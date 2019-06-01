import React from 'react';
import styled from 'styled-components';

const MARGIN_PADDING = 10;
const BORDER = 1;
const RADIUS = 2;

const Container = styled.div`
  margin-bottom: ${MARGIN_PADDING}px;
  border: ${BORDER}px solid lightgrey;
  border-radius: ${RADIUS}px;
  padding: ${MARGIN_PADDING}px;
`;

export default class Task extends React.Component {
  render(){
    return <Container>{this.props.task.content}</Container>;
  }
}