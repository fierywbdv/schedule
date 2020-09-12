import React, { Component } from 'react';
import Service from '../../service/Service'
import './app.css';
import TaskPage from '../TaskPage/TaskPage';

export default class App extends Component {
  state = {
    data: null,
  }
  
  service = new Service();

  async componentDidMount() {
    const res = await this.service.getAllEvents()
    this.setState({
        data: res,
    })
    // res.forEach(element => this.service.deleteEvent(element.id))
}

  render() {
    const { data } = this.state;
  
    return (
      <TaskPage data={data} />
    );
  }
}
