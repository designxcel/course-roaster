import { useEffect, useState } from 'react';
import { FaBook } from 'react-icons/fa';
import Cart from '../Cart/Cart';
import swal from 'sweetalert';

const Home = () => {
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [remainingCredit, setRemainingCredit] = useState(0)
    const [courseAmount, setCourseAmount] = useState(0)

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    const handleCourse =(course) =>{
        const isExist = selectedCourse.find(item => item.id == course.id)
        let count = course.credit;
        let amountCount = course.price;
        if(isExist)
        {
            swal ("Oops!", "Course already taken! Try different course.", "error")
        }
        else{
            selectedCourse.forEach((item)=>{
                count = count + item.credit;
                amountCount = amountCount + item.price;
            })
            
            const maxCredit = 20 - count;
            console.log(maxCredit)
            if(count > 20){
                return swal("Oops!", "Your total credit can't exceed over 20 credit!", "error")
            }
            else{
                setCourseAmount(amountCount)
                setRemainingCredit(maxCredit)
                setTotalCredit(count)
                setSelectedCourse([...selectedCourse, course])
            }
            
        }
        
    }
    return (
        <div className="bg-slate-200 lg:max-w-[1350px] mx-auto p-5">
            <h1 className="font-bold text-4xl text-center mb-8">Course Registration</h1>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        courses.map(course => (
                            <div className="lg:w-[315px] h-[402px] bg-white p-4 rounded-lg space-y-4">
                        <div className="">
                            <img className="w-full h-[144px] rounded-lg" src={course.image} alt="" />
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
                    <Cart 
                    selectedCourse={selectedCourse}
                    totalCredit={totalCredit}
                    remainingCredit={remainingCredit}
                    courseAmount={courseAmount}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;