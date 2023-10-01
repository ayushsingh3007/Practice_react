import React, { Component } from 'react';

class Example extends Component {

  constructor(props) {
    super(props);
    console.log('Constructor called');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called');
    return null; 
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate called');
    return null; 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate called');
  }


  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }
  componentDidCatch(error, info) {
    console.log('componentDidCatch called');
    console.error(error, info);
  }

  
  render() {
    console.log('Render called');
    return <div>Example Component</div>;
  }
}

export default Example;
