import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

const BackgroundColorPicker = ({displayBgPicker, setDisplayBgPicker, colorBgPicker, setColorBgPicker, onHandleAccessible}) => {

  const handleClick = () => {
    setDisplayBgPicker(!displayBgPicker)
  };

  const handleClose = () => {
    setDisplayBgPicker(false)
  };

  const handleChange = (color) => {
    setColorBgPicker(color.rgb)
  };

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ colorBgPicker.r }, ${ colorBgPicker.g }, ${ colorBgPicker.b }, ${ colorBgPicker.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ handleClick }>
          <div style={ styles.color } />
        </div>
        { displayBgPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ handleClose }/>
          <SketchPicker color={ colorBgPicker } onChange={ handleChange } />
        </div> : null }
      </div>
    )
}

export default BackgroundColorPicker;
