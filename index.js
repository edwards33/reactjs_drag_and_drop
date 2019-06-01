import React, { Component } from 'react';
import { render } from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import initData from './data';
import Column from './column'

class App extends React.Component {
  state = initData;
  onDragEnd = result => {
    console.log('onDragEnd')
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {
          this.state.columnOrder.map(columnID => {
            const column = this.state.columns[columnID];
            const tasks = column.taskIds.map(taskID => this.state.tasks[taskID]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })
        }
      </DragDropContext>
    )
  }
}

render(<App />, document.getElementById('root'));
