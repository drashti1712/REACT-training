import { Component } from "react";

export default class AgeChild extends Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.age === newProps.age) {
            return false;
        }
        return true;
    }
    render() {
        console.log("AgeChild renders...");
        return <div>
            Age in AgeChild: {this.props.age} <br />
        </div>
    }
}