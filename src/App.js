
import { Route } from 'react-router';
import './App.css';
import HomePageContainer from './Components/HomePage/HomePageContainer';
import NavBar from './Components/NavBar/NavBar';
import SendMoneyContainer from './Components/SendMoneyPage/SendMoneyContainer';

function App() {
  return (
    <div className="app-wrapper">
      <NavBar/>
      <div className="content">
      <Route path ="/home" render={()=><HomePageContainer/>}/>
      <Route path ="/sendmoney" render={()=><SendMoneyContainer/>}/> 
    </div>
    </div>
  );
}

export default App;
