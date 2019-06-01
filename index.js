import React, { Component } from 'react';
import { render } from 'react-dom';
//import '@atlaskit/css-reset';
import initData from './data';
import Column from './column'

class App extends React.Component {
  state = initData;

  render() {
    return this.state.columnOrder.map(columnID => {
      const column = this.state.columns[columnID];
      const tasks = column.taskIds.map(taskID => this.state.tasks[taskID]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

render(<App />, document.getElementById('root'));
