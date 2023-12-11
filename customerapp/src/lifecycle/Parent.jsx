import { Component } from "react";
import NameChild from "./NameChild";
import AgeChild from "./AgeChild";

export default class Parent extends Component {
    state = {
        name : 'Roger',
        age: 30
    }

    render() {
        console.log("Parent renders...")
        return <div>
            <NameChild name={this.state.name}/>
            <AgeChild age={this.state.age}/> <br />
            <button type="button" onClick={() => {
                this.setState({
                    age: this.state.age + 1
                })
            }}>Change Age</button> <br />
            <button type="button" onClick={() => {
                this.setState({
                    name: this.state.name + ".."
                })
            }}>Change Name</button>
        </div>
    }
}