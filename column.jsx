import React from 'react';
import styled from 'styled-components';
import Task from './task';

const MARGIN_PADDING = 10;
const BORDER = 1;
const RADIUS = 2;

const Container = styled.div`
  margin: ${MARGIN_PADDING}px;
  border: ${BORDER}px solid lightgrey;
  border-radius: ${RADIUS}px;
`;
const Title = styled.h3`
  padding: ${MARGIN_PADDING}px;
`;
const TaskList = styled.div`
  padding: ${MARGIN_PADDING}px;
`;

export default class Column extends React.Component {
  render(){
    return(
      <Container>
        <Title>{this.props.column.title}</Title>
        <TaskList>
          {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
        </TaskList>
      </Container>
    ); 
  }
}