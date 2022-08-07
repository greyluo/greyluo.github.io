import Info from './components/Info'
import Sidebar from './components/Sidebar'
import Education from './components/Education';
import { useState, useEffect } from 'react'

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const CoursesFromServer = await fetchCourses()
      setCourses(CoursesFromServer)
    }

    getCourses()
  }, [])

  const fetchCourses = async () => {
    const res = await fetch('http://localhost:3000/courses')
    const data = await res.json()
    return data
  }

  return (
    <div className="container">
      <Info /> 
      <Sidebar />
      <Education courses={courses} />
    </div>
  )

}

export default App;
