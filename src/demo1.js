import React, { Component } from "react";
import Ball from "./Ball";

export class Demo1 extends Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      ballX: 50,
      ballY: 100,
      dx:5,
      dy:4
    };
  }
  componentDidMount() {
    console.log(this.ticker );
    // call this.tick every 1 second
    this.ticker = setInterval( () => this.tick(), 30 );
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate called");
    console.log(prevProps);
    console.log(prevState);
    if(prevState.ballX > 350){
      console.log('idf hit');
      this.setState({
        dx:-3,
        ballX:340
      })
    }
    if(prevState.ballX <1){
      console.log('idf hit');
      this.setState({
        dx:6,
        ballX:1
      })
    }
    if(prevState.ballY <1){
      console.log('idf hit');
      this.setState({
        dy:3,
        ballY:1
      })
    }
    if(prevState.ballY > 350){
      console.log('idf hit');
      this.setState({
        dy:-4,
        ballY:340
      })
    }
    // call this.tick every 1 second
  }

  tick = () => {
    const { ballX, ballY, dx, dy } = this.state;
    console.log('ballX',ballX)
    console.log('dx',dx)
    console.log('dx',dx +ballX)
    
const newX =dx +ballX
const newY =dy +ballY
    this.setState({
      ballX:newX ,
      ballY: newY
    });
  };

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.ticker);
  }
  render() {
    const { ballX, ballY } = this.state;
    const {size} = this.props
    return (
      <div style={{ ...styles, height: size, width: size }}>
        <Ball x={ballX} y={ballY} />
      </div>
    );
  }
}

const styles = {
  position: "relative",
  background: "grey",
  margin: "auto",
  border: "1px solid"
};

export default Demo1;
