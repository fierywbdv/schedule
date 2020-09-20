import React, { Component } from 'react';
import { Button } from 'antd';

import './button.css';

export default class UserSwitchButton extends Component {

  render() {
    const { type, size, shape, btnClassName, btnWrapperClassName, handlerOnClick, text, icon, ghost, danger } = this.props;
    
    return (
      <div className={btnWrapperClassName}>
        <Button 
          type={type} 
          size={size}
          shape={shape}
          icon={icon}
          ghost={ghost}
          danger={danger}
          className={btnClassName}
          onClick={handlerOnClick}
        >
          {text}
        </Button>
      </div>
    )
  }
}