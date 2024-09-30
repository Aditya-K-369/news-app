
import './App.css';
import React ,{Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
         <Route path='/' element={<News country="us"  category="general" pageSize = {3}/>}></Route> 
         <Route path='/general' element={<News  key="general"  country="us"  category="general" pageSize = {3}/>}></Route> 
         <Route path='/sports' element={<News key="sports" country="us"  category="sports" pageSize = {3}/>}></Route> 
         <Route path='/business' element={<News key="business" country="us"  category="business" pageSize = {3}/>}></Route> 
         <Route path='/entertainment' element={<News key="entertainment" country="us"  category="entertainment" pageSize = {3}/>}></Route> 
         <Route path='/health' element={<News key="health" country="us"  category="health" pageSize = {3}/>}></Route> 
         <Route path='/science' element={<News key="science" country="us"  category="science" pageSize = {3}/>}></Route> 
         <Route path='/technology' element={<News key="technology" country="us"  category="technology" pageSize = {3}/>}></Route> 
         </Routes>
        </Router>
      </div>
    )
  }
}

