

const Cart = ({selectedCourse, totalCredit}) => {
    return (
        <div>
            
            <h2 className="font-bold text-4xl">Course Name: {selectedCourse.length}</h2>
            {
                selectedCourse.map(course => (
                    
                        <li className="list-decimal">{course.title}</li>
            
                ))
            }
            <hr />
            <h2>Total Credit Hour : {totalCredit}</h2>
            <hr />


            
        </div>
    );
};

export default Cart;