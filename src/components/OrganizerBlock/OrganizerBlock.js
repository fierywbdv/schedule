import React, { Component } from 'react';
import { Input, Checkbox } from 'antd';

import 'antd/dist/antd.css';
import './organizerBlock.css';

export default class OrganizerBlock extends Component { 

  componentWillMount() {
    const { data, name: { organizer, organizerDescription } } = this.props;
    this.setState({ 
      checked: !!data[organizer] || !!data[organizerDescription],
      organizer: data[organizer] ,
      organizerDescription: data[organizerDescription],
    })
  }

  onChangeCheckbox = (event) => {
    const { data, name, changeData } = this.props;
    const { organizer, organizerDescription } = this.state;

    const isChecked = event.target.checked;

    if (!isChecked) {
      changeData(name.organizer, '');
      changeData(name.organizerDescription, '');
    } else {
      changeData(name.organizer, organizer);
      changeData(name.organizerDescription, organizerDescription);
    }

    this.setState({ checked: isChecked });    
  }

  handleChangeInput = (event) => {
    const inputValue = event.target.value;
    const dataAttr = event.target.dataset.name;

    this.props.handleChangeInput(event);

    this.setState((state) => state[dataAttr] = inputValue);
  }

  render() {
    const { TextArea } = Input;
    const { isEdited, name, data, handleChangeInput } = this.props;
    const { checked,  organizer, organizerDescription  } = this.state;

    if (!isEdited && !checked) {
      return null;
    }

    console.log(data)

    return (
      <div className='organizer-block'>      
        {isEdited ?         
          <Checkbox 
            className='organizer-block__checkbox'            
            onChange={this.onChangeCheckbox}
            checked={checked}
          /> : null
        }
        <div className='organizer-block__data'>  
          <Input 
            className='organizer-block__organizer' 
            placeholder='Write organizer name...'
            value={organizer}
            data-name={name.organizer}
            disabled={!checked}
            bordered={isEdited ? true : false}
            onChange={this.handleChangeInput}
          />
          <TextArea
            className='organizer-block__description'
            placeholder='Write description...'
            value={organizerDescription}
            data-name={name.organizerDescription}
            autoSize={{ minRows: 3, }}              
            disabled={!checked}
            readOnly={isEdited ? false : true}
            bordered={isEdited ? true : false}
            onChange={this.handleChangeInput}
          />
        </div>
      </div>
    )
  }
}