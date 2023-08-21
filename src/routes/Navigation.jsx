import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import MyCards from '../pages/MyCards'
import AppLayout from './layout/AppLayout'
import NewCard from '../pages/NewCard'
import AppProvider from '../context/AppProvider'


const Navigation = () => {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path='/auth' element={<Auth/>} />
          <Route path='/' element={<AppLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='my-cards' element={<MyCards/>} /> 
            <Route path='new-card' element={<NewCard/>} />
          </Route>
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default Navigation