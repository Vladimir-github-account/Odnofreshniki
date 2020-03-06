const { RefreshToken } = require( '../db/models' );

class RefreshController {
  async createRefreshToken(req, res, next) {
    try {
      const createdRefreshToken = await RefreshToken.create( req.body );
      if ( createdRefreshToken ) {
        return res.status( 201 ).send( 'OK' );
      }
      next( new Error( 'Create Refresh Token error' ) );
    } catch (e) {
      next( e );
    }
  };
}

module.exports = new RefreshController();

