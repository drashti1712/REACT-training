import { Component } from 'react';
import customers from '../data';
import CustomerRow from './CustomerRow';
import Filter from './Filter';

export default class CustomerList extends Component {
    state = {
        customers: customers,
        original: customers
    }

    filterCustomers(txt) {
        let custs = this.state.original.filter(c => c.name.toUpperCase().indexOf(txt.toUpperCase()) >= 0);
        this.setState({
            customers: custs
        })
    }

    deleteCustomer(id) {
        console.log("<CustomerList />", id)
        let custs = this.state.original.filter(c => c.id !== id);
        // this.state.customers = custs; // won't work --> won't reconcil --> not force render();
        console.log(this.state.customers.length);

        // use setState() to update state and force reconcillation
        this.setState({
            customers: custs
        })
    }

    render() {
        return <div>
            <Filter filterEvent={(txt) => this.filterCustomers(txt)} />
            {
                this.state.customers.map(c => <CustomerRow
                    key={c.id}
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} />)
            }
        </div>
    }
}