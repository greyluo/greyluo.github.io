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
    <div>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 '>
        <div className='container'>
          <a href="#" class="navbar-brand"></a>
          <SideButton onClick ={() => setOpen(!open)} />
          <Sidebar open = {open}/>
          
        </div>
    
      </nav>
    <section className='bg-dark text-light p-5 '>
      <div className="container">
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/Education' element={<Education courses={courses} />} />
          <Route path='/Projects' element={<Projects projects={projects} />} />

        </Routes>
      
      
      </div>
    </section>
    <div className="h-100">
    </div>
    <footer className="p-5 bg-dark text-white text-center position-absolute bottom-0 start-50 translate-middle">
      <div className="container">
        <p className="lead">Copyright &copy; 2022 Guidong Luo</p>

        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
   
    </div>
    
  )

}

export default App;


