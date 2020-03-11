import React, { Component } from 'react';
import Icon                 from '@mdi/react';
import { mdiEye }           from '@mdi/js';
import Input                from '../Input';

class PasswordInput extends Component {
  constructor(props) {
    super( props );
    this.state = {
      type: 'password'
    };
  }

  changeType = () => {
    console.log( 'changeType' );
    const { type } = this.state;
    this.setState( {
      type: type === 'password' ? 'text' : 'password'
    } )
    ;
  };

  render() {
    return (
        <Input
            {...this.props}
            changeViewButton={(
                <div className='iconWrapper changeTypeIconWrapper'>
                  <Icon path={mdiEye}
                        size='18px'
                        color='rgba(0,0,0,0.7)'
                        onClick={this.changeType}/>
                </div> )}
            type={this.state.type}
        />
    );
  }
}

export default PasswordInput;