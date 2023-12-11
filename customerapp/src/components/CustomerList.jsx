import { Component } from 'react';
import customers from '../data';
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    state = {
        customers : customers
    }

    deleteCustomer(id) {
        let custs = this.state.customers.find(c => c.id !== id);
        // this.state.customers = custs; // won't work
    }

    render() {
        return <div>
            {
                this.state.customers.map(c => <CustomerRow customer={c}/>)
            }
        </div>
    }
}