import React, { Component } from 'react';
import { Input, Checkbox, Typography } from 'antd';
import 'antd/dist/antd.css';
import './link.css';

export default class Link extends Component {
  state = {
    checked: false,
  } 

  onChange = (event) => {
    const isChecked = event.target.checked;

    this.setState({
      checked: isChecked,
      url: '',
      linkTitle: '',
    })
  }
  
  onChangeInput = (event) => {
    const inputValue =  event.target.value;
    this.setState({ linkTitle: inputValue })
  }

  
  onChangeLinkInput = (event) => {
    const url =  event.target.value;
    this.setState({ url: url })
  }

  render() {
    const { Link } = Typography;
    const { isEdited } = this.props;    ///////////
    const { checked, url, linkTitle } = this.state;

    if (!isEdited && !checked) {
      return null;
    }

    return (
      <div className='link-block'>      
        { isEdited ? 
        <Checkbox 
          className='link-block__checkbox' 
          onChange={this.onChange}
          checked={checked}
        /> : null }

        <div className='link-block__content'>
          <Input 
            className='link-block__label' 
            placeholder='Add link title...'
            defaultValue={linkTitle}
            disabled={!checked}
            onChange={this.onChangeInput}
          />
          { isEdited ?
          <Input 
            className='link-block__link-input' 
            placeholder='Add URL...'
            defaultValue={url}
            disabled={!checked}
            onChange={this.onChangeLinkInput}
          /> : 
          <Link 
            className='link-block__link'
            href={url}
            target="_blank"
          >{url}</Link>   
          }            
        </div>               
      </div>
    )
  }
}
