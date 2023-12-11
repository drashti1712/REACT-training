import { Component } from "react";

export default class CustomerRow extends Component {

    render() {
        return <div className="row">
            Name : {this.props.customer.name} <br />
            Email: {this.props.customer.email} <br />
            <hr />
        </div>
    }
}