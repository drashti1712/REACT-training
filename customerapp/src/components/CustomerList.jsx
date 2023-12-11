import { Component } from 'react';
import customers from '../data';
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    state = {
        customers: customers
    }

    deleteCustomer(id) {
        console.log("<CustomerList />", id)
        let custs = this.state.customers.filter(c => c.id !== id);
        // this.state.customers = custs; // won't work --> won't reconcil --> not force render();
        console.log(this.state.customers.length);

        // use setState() to update state and force reconcillation
        this.setState({
            customers: custs
        })
    }

    render() {
        return <div>
            {
                this.state.customers.map(c => <CustomerRow
                    key ={c.id}
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} />)
            }
        </div>
    }
}