import Info from './components/Info'
import Sidebar from './components/Sidebar'
import Education from './components/Education';
import { useState, useEffect } from 'react'
import Projects from './components/Projects';
import {Routes, Route} from 'react-router-dom'
import data from './db.json'
import Contact from './components/Contact';



function App() {

  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const getCourses = async () => {
      const CoursesFromServer = data.courses;
      setCourses(CoursesFromServer)
    }
    getCourses()
    const getProjects = async () => {
      const ProjectsFromServer = data.projects;
      setProjects(ProjectsFromServer)
    }
    getProjects()
    const getSkills = async () => {
      const SkillsFromServer = data.skills;
      setSkills(SkillsFromServer)
    }

    getSkills()
  },[])


  return (
    <div>

      <Sidebar/>

      <section className='bg-dark text-light mx-3 mt-3 pb-5 mb-5'>
        <div className="container">
          <Routes>
            <Route path='/' element={<Info skills={skills} />} />
            <Route path='/Education' element={<Education courses={courses} />} />
            <Route path='/Projects' element={<Projects projects={projects} skills={skills}/>} />
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


