import { Component } from "react";

export default class CustomerRow extends Component {
    render() {
        let { id, name, email } = this.props.customer; // destructuring
        return <div className="row">
            Name : {name} <br />
            Email: {email} <br />
            <button onClick={() => this.deleteRow(id)}>Delete</button>
            <hr />
        </div>
    }

    // behaviour as in methods...
    deleteRow(id) {
        console.log("<CustomerRow />", id);
        this.props.delEvent(id);
    }
}

