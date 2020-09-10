import React, { Component } from 'react';
import { Input, Checkbox, Image } from 'antd';
import 'antd/dist/antd.css';
import './imageBlock.css';
import noImage from '../../assets/images/no_img.jpg'

export default class ImageBlock extends Component {
  state = {
    checked: false,
    url: '',
  }

  onChangeCheckbox = (event) => {
    const isChecked = event.target.checked;
    this.setState({ checked: isChecked })
  }

  // onChangeInput = (event) => {
  //   const inputValue =  event.target.value;
  //   this.setState({ url: inputValue })
  // }


  render() {
    const { isEdited, name, data, handleChangeInput } = this.props;
    const { checked, url } = this.state;

    if (!isEdited && !checked) {
      return null;
    }

    return (
      <div className='image-block'>        
        { isEdited ?
        <div className='image-block__edite-block'>            
          <Checkbox 
            className='image-block__checkbox'
            onChange={this.onChangeCheckbox}
            checked={checked}
          />
          <Input 
            placeholder='Add image url...'
            defaultValue={data[name] || url}
            data-name={name}
            disabled={!checked}
            onChange={handleChangeInput}
          />
        </div> :
        <Image
          className='image-block__image'
          src={data[name] || url}
          fallback={noImage} /*default picture*/
        /> }
      </div>
    )
  }
}