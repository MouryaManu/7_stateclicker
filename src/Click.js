import React, { Component } from 'react'

class Click extends Component {
    constructor(props) {
        super(props);
        this.state= {
            num: 0
        };
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick() {
        let rand= Math.floor(Math.random() * 10)+1;
        this.setState({num: rand})
    }
    render() {
        let num= this.state.num;
        return (
            <div>
                <h1>Your Number is: {num}</h1>
                {this.state.num ===7 ?
                 <h2>You Win!!</h2> :
                 <button  onClick= {this.handleClick}>Random Number</button>
                }
                {/* {this.state.num === 7 && <h2>You Win!!</h2>}
                {this.state.num!==7 && <button  onClick= {this.handleClick}>Random Number</button> } */}
            </div>
        )
    }
}

export default Click;