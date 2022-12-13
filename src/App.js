import Info from './components/Info'
import Sidebar from './components/Sidebar'
import Education from './components/Education';
import { useState, useEffect } from 'react'
import Projects from './components/Projects';
import {Routes, Route} from 'react-router-dom'
import SideButton from './components/SideButton';
import data from './db.json'
import Contact from './components/Contact';
// Bootstrap CSS
// Bootstrap Bundle JS

function App() {

  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
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
  return (
    <div>
      <nav className='navbar navbar-expand-md bg-dark navbar-dark py-3 '>
        <div className='container'>
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
          <Route path='/Contact' element={<Contact/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />

        </Routes>


      </div>
    </section>
    <div className="h-100">
    </div>
    <footer className="p-md-3 m-md-3 pr-sm-3 bg-dark text-white text-center">
      <div className="container">
        <p className="lead">Copyright &copy; 2022 Guidong Luo</p>


      </div>
    </footer>

    </div>

  )

}

export default App;


