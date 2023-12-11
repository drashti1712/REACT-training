import { Component } from "react";

export default class NameChild extends Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.name === newProps.name) {
            return false;
        }
        return true;
    }
    render() {
        console.log("NameChild renders...");
        return <div>
            Name in NameChild: {this.props.name} <br />
        </div>
    }
}