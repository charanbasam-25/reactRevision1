import { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    show: true,
    showOnLoadText: "",
    showUpdatedText: "This is the Updated text",
    count:0,
    resetShown:false,
    showRedColour:false,
  };

  componentDidMount() {
    console.log("componentDidMounttttttttt");
    this.setState({
      ...this.state,
      showOnLoadText: "This is the text that will be shown on load",
    });
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdateeeeeee");
    console.log(prevProps,"PrevProps--------------")
    if(this.state.count!==prevState.count && this.state.count==10){
        this.setState({
            ...this.state,
            resetShown:true,
            showRedColour:true,
        })
    }
}

  handleCounter = () => {
    this.setState({
        ...this.state,
        count:this.state.count+1,

    });
  };


  handleReset=()=>{
    this.setState({
        ...this.state,
        count:0,
        resetShown:false,
        showRedColour:false,
    })
  }
  render() {
    console.log("rrrrrrrrrrrenderrrrrrrrrrrrr");
    return (
      <div className="classbasedComponent">
        <h1 className={this.state.show ? "show" : "hide"}>
          Class based Components
        </h1>
        <p className={this.state.showRedColour?"merry-chrismas":""}>Merry chrismas</p>
        <p className="onload-text">{this.state.showOnLoadText}</p>
        <div style={{color:"red", fontSize:"20px"}}>{this.state.count}</div>
        {!this.state.resetShown &&<button onClick={this.handleCounter}>Counter</button>}
        {this.state.resetShown&&<button onClick={this.handleReset}>Reset</button>}
      </div>
    );
  }
}

export default ClassBasedComponent;
