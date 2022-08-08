import Info from './components/Info'
import Sidebar from './components/Sidebar'
import Education from './components/Education';
import { useState, useEffect } from 'react'
import Projects from './components/Projects';
import {Routes, Route} from 'react-router-dom'
import SideButton from './components/SideButton';
// Bootstrap CSS
// Bootstrap Bundle JS

function App() {

  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const getCourses = async () => {
      const CoursesFromServer = await fetchCourses()
      setCourses(CoursesFromServer)
    }

    getCourses()

    const getProjects = async () => {
      const ProjectsFromServer = await fetchProjects()
      setProjects(ProjectsFromServer)
    }

    getProjects()
  },[])
  const fetchProjects = async () => {
    const res = await fetch('http://localhost:3000/projects')
    const data = await res.json()
    return data
  }
  const fetchCourses = async () => {
    const res = await fetch('http://localhost:3000/courses')
    const data = await res.json()
    return data
  }

  return (
    <div className="container">
      <div className='d-sm-flex'>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <SideButton onClick ={() => setOpen(!open)} open = {open} />
        <Sidebar open = {open}/>
      </nav>
      

      <div className="main">
      <Routes>
        <Route path='/' element={<Info />} />
        <Route path='/Education' element={<Education courses={courses} />} />
        <Route path='/Projects' element={<Projects projects={projects} />} />

      </Routes>
      
      
      </div>
      </div>
    </div>
  )

}

export default App;


