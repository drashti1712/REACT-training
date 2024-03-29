import './App.css';
import CustomerList from './components/CustomerList';
import Parent from './lifecycle/Parent';
import Menu from './recipes/Menu';

// returns JSX, returned JSX is converted into ReactElement by React.createElement
function App() {
  return (
    <div>
      <h1>Customer Application</h1>
      {/* <Menu /> */}
      {/* <CustomerList /> */}
      <Parent />
    </div>
  );
}

export default App;
