import{BrowserRouter as Router,Routes,Route} from 'react-router'
import Home from './pages/Home/Home'
import Characters from './pages/Home/Characters/Characters'
import Contact from './pages/Home/Characters/Contact/Contact'


export default function RouterSite(){
    return(
    <Router>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Characters' element={<Characters/>}/>
    <Route path='/Contact' element={<Contact/>}/>
</Routes>

    </Router>
    )
}