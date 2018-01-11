import * as React from 'react';
import {
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom'

import './App.css';

import { Menu, Icon } from 'antd';
import Day from '../Day'
import Week from '../Week'
import Month from '../Month'
import Task from '../Task'
import Note from '../Note'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu
            mode="horizontal"
          >
            <Menu.Item key="day">
              <Link to="/">
                <Icon type="clock-circle-o" />日
              </Link>
            </Menu.Item>
            <Menu.Item key="week">
              <Link to="/week">
                <Icon type="calendar" />周
              </Link>
            </Menu.Item>
            <Menu.Item key="month" >
              <Link to="month">
                <Icon type="calendar" />月
              </Link>
            </Menu.Item>
            <Menu.Item key="task">
              <Link to="task">
                <Icon type="mail" />待办
              </Link>
            </Menu.Item>
            <Menu.Item key="note">
              <Link to="note">
                <Icon type="mail" />笔记
              </Link>
            </Menu.Item>
          </Menu>
          <Route exact path="/" component={Day} />
          <Route  path="/week" component={Week} />
          <Route  path="/month" component={Month} />
          <Route  path="/task" component={Task} />
          <Route  path="/note" component={Note} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
