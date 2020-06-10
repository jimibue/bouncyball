import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo1 from "./demo1";
import Container from "./Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenWidth: 0, screenHeight: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    });
  }
  render() {
    const { screenWidth, screenHeight } = this.state;
    return (
      <div>
        <h1 style={{ screenHeight: "50px", textAlign: "center" }}>Some Game</h1>
        <Container
          screenHeight={screenHeight}
          screenWidth={screenHeight}
          size={400}
        >
          <Demo1  size={400} />
        </Container>
        <p>screen screenWidth:{screenWidth}</p>
        <p>screen screenHeight:{screenHeight}</p>
      </div>
    );
  }
}

export default App;
