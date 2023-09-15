import { useEffect, useState } from 'react';
import { FaBook } from 'react-icons/fa';
import Cart from '../Cart/Cart';

const Home = () => {
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const handleCourse =(course) =>{
        setSelectedCourse([...selectedCourse, course])
    }
    return (
        <div>
            <h1>Course Registration</h1>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        courses.map(course => (
                            <div className="w-[315px] h-[402px] bg-slate-200 p-4 rounded-lg space-y-4">
                        <div>
                            <img className="w-[280px] h-[144px] rounded-lg" src={course.image} alt="" />
                        </div>
                        <h2 className="font-bold text-lg">{course.title}</h2>
                        <p className="text-sm">{course.desc}</p>
                        <div className="flex justify-between items-center">
                            <h3>$ Price : {course.price}</h3>
                            <div className='flex justify-between items-center gap-4'>
                                <FaBook></FaBook>
                                <p>Credit : {course.credit}hr</p>
                            </div>
                        </div>
                        <button onClick={() => handleCourse(course)} className="bg-blue-500 text-white px-8 py-2 rounded-lg w-full">Select</button>
                    </div>
                        ))
                    }
                </div>
                <div>
                    <Cart selectedCourse={selectedCourse}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;