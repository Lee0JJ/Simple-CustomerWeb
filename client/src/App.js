import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerList from './page/CustomerList';
import CustomerEdit from './page/CustomerEdit';
import CustomerAdd from './page/CustomerAdd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <CustomerList />}/>
        <Route path="/customer-edit/:id" element={ <CustomerEdit />}/>
        <Route path="/customer-add/" element={ <CustomerAdd />}/>
      </Routes>
    </Router>
  );
}

export default App;
