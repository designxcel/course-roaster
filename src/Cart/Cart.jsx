

const Cart = ({selectedCourse}) => {
    return (
        <div>
            
            <h2 className="font-bold text-4xl">Course Name: {selectedCourse.length}</h2>
            {
                selectedCourse.map(course => (
                    
                        <li className="list-decimal">{course.title}</li>
            
                ))
            }

            
        </div>
    );
};

export default Cart;