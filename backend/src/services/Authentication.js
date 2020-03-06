import bcrypt                 from 'bcrypt';
import { User, RefreshToken } from '../db/models';
import AppError               from '../utils/application_errors';
import jwt                    from 'jsonwebtoken';
import { TOKEN_KEY }          from '../constants';
import { promisify }          from 'util';
import BadRequestError
                              from '../utils/application_errors/BadRequestError.js';

const signTokenAsync = promisify( jwt.sign );

class AuthenticationService {
  async loginByEmail(credentials) {
    const user = await User.findOne( {
                                       where: {
                                         email: credentials.email
                                       }
                                     } );
    if ( user ) {
      if ( this.comparePasswords( credentials.password, user.password ) ) {
        const userData = user.get();
        delete userData.password;

        const tokens = {
          accessToken: this.getAccessToken(),
          refreshToken: this.getRefreshToken()
        };

        return {
          tokenList: tokens,
          user: userData
        };
      }
    }
    throw new AppError.BadRequestError( 'Email or password is bad' );
  }

  async comparePasswords(password, passwordHash) {
    return bcrypt.compare( password, passwordHash );
  }

  async getAccessToken(user) {
    const payload = {
      userId: user.id,
      email: user.email, //and role
      exp: Math.floor( Date.now() / 1000 ) + ( 60 * 10 ),
    };
    return signTokenAsync( {
                             ...payload,
                           }, TOKEN_KEY );
  }

  async getRefreshToken(user) {
    const payload = {
      userId: user.id,
      email: user.email, //and role
      exp: Math.floor( Date.now() / 1000 ) + ( 60 * 60 * 24 * 30 ),
    };

    const refreshTokenValue = await signTokenAsync( {
                                                      ...payload,
                                                    }, TOKEN_KEY );
    const refreshToken = await RefreshToken.create( {
                                                      userId: user.id,
                                                      refreshToken: refreshTokenValue
                                                    } );
    if ( refreshToken ) {
      return refreshTokenValue;
    }
    throw new BadRequestError( 'getRefreshToken' );
  }

}

export default new AuthenticationService();