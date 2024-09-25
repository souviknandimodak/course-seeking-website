import Card from './Components/Card'
import Cardbeauty from './Components/Cardbeauty'
import Cardcraft from './Components/Cardcraft'
import Cardgov from './Components/Cardgov'
import Cardstiching from './Components/Cardstitching'
import Cardweb from './Components/Cardweb'
import Cardyoga from './Components/Cardyoga'
import Home from './Screens/Home'
import Log_In from './Screens/Log_In'
import Popular_Courses from './Screens/Popular_Courses'
import Sign_Up from './Screens/Sign_Up'
import { BrowserRouter as Routers,
  Routes,
  Route
 } from 'react-router-dom';
export default function App() {
  return (
    <Routers>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Log_In' element={<Log_In/>}/>
          <Route path='/Popular_Courses' element={<Popular_Courses/>}/>
          <Route path='/Sign_Up' element={<Sign_Up/>}/>
          <Route path='/Core_development_related_Courses' element={<Card/>}/>
          <Route path='/Govt_job_related_Courses' element={<Cardgov/>}/>
          <Route path='/Web_development_related_Courses' element={<Cardweb/>}/>
          <Route path='/Yoga_related_Courses' element={<Cardyoga/>}/>
          <Route path='/Art_and_Craft_related_Courses' element={<Cardcraft/>}/>
          <Route path='/Beautician_related_Courses' element={<Cardbeauty/>}/>
          <Route path='/Steaching_related_courses' element={<Cardstiching/>}/>
        </Routes>
    </Routers>
  )
}