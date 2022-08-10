import Info from './components/Info'
import Sidebar from './components/Sidebar'
import Education from './components/Education';
import { useState, useEffect } from 'react'
import Projects from './components/Projects';
import {Routes, Route} from 'react-router-dom'
import SideButton from './components/SideButton';
import data from './db.json'
// Bootstrap CSS
// Bootstrap Bundle JS

function App() {

  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  

  useEffect(() => {

    const getCourses = async () => {
      const CoursesFromServer = data.courses;
      setCourses(CoursesFromServer)
    }

    getCourses()

   
  },[])

  useEffect(() => {
    const getProjects = async () => {
      const ProjectsFromServer = data.projects;
      setProjects(ProjectsFromServer)
    }

    getProjects()
  },[])
  useEffect(() => {
    const getSkills = async () => {
      const SkillsFromServer = data.skills;
      setSkills(SkillsFromServer)
    }

    getSkills()
  },[])

/*   const fetchSkills = async () => {
    const res = await fetch('http://localhost:3000/skills')
    const data = await res.json()
    return data
  }

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:3000/projects')
    const data = await res.json()
    return data
  }
  const fetchCourses = async () => {
    const res = await fetch('http://localhost:3000/courses')
    const data = await res.json()
    return data
  } */

  return (
    <div>
      <nav className='navbar navbar-expand-md bg-dark navbar-dark py-3 '>
        <div className='container'>
          <a href="#" className="navbar-brand"></a>
          <SideButton onClick ={() => setOpen(!open)} />
          <Sidebar open = {open}/>
          
        </div>
    
      </nav>
    <section className='bg-dark text-light mx-3 mt-3 pb-5 mb-5'>
      <div className="container">
        <Routes>
          <Route path='/' element={<Info skills={skills} />} />
          <Route path='/Education' element={<Education courses={courses} />} />
          <Route path='/Projects' element={<Projects projects={projects} />} />

        </Routes>
      
      
      </div>
    </section>
    <div className="h-100">
    </div>
    <footer className="p-3 m-3 bg-dark text-white text-center position-relative start-50 translate-middle bottom-fixed">
      <div className="container">
        <p className="lead">Copyright &copy; 2022 Guidong Luo</p>

        
      </div>
    </footer>
   
    </div>
    
  )

}

export default App;


