import React, { Component } from 'react'

export class Container extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    const {size} = this.props
    return (
      <div style={{ ...styles, height:size, width:size}}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  position:'relative',
  background: "grey",
  margin: "auto",
  border: "1px solid",
};

export default Container
