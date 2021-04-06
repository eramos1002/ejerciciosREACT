import React from "react";

class RelojOk extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  updateTime = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  };

  componentDidMount() {
    console.log("Incio Ciclo Vida");
    setInterval(this.updateTime, 1000);
  }

  render() {
    return <h2> {this.state.time} </h2>;
  }
}

export default RelojOk;
