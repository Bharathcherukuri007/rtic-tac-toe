import React, { Component } from 'react'
export interface Name{
    display: string
}
export default class Child extends Component {
    props : Name;
    constructor(props : Name){
        super(props);

    }
    shouldComponentUpdate(nextProps: Name, nextState: Readonly<{}>, nextContext: any): boolean {
        return this.props != nextProps;
    }
  render() {
    return (
      <div>{this.props.display}</div>
    )
  }
}
