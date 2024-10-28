import { Link } from "react-router-dom"
import { historyClassData } from "../../data/historyData"
import './Tarix.css'

const Tarix = () => {
  return (
    <div className="p-8 pt-16">
      <h1 className="text-4xl font-bold mb-6">Tarix Dərsləri</h1>
      <div className=" pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historyClassData.map((lesson) => (
          <div key={lesson.id} className="lesson-box bg-white shadow-md rounded-lg p-4">
            <img src={lesson.image} alt={lesson.lessonName} />
            <h2 className="text-2xl font-bold mt-4">{lesson.lessonName}</h2>
            <p className="">Müəllim: {lesson.teacherName}</p>
            <p className="mt-2">{lesson.description}</p>
            <div className="pt-2">
              <Link><button className="font-semibold">Daha ətraflı</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tarix