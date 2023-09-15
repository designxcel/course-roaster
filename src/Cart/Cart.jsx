

const Cart = ({selectedCourse, totalCredit, remainingCredit, courseAmount}) => {
    return (
        <div>
            <h2>Credit Hour Remaining {remainingCredit} hr</h2>
            <h2 className="font-bold text-4xl">Course Name: {selectedCourse.length}</h2>
            {
                selectedCourse.map(course => (
                    
                        <li className="list-decimal">{course.title}</li>
            
                ))
            }
            <hr />
            <h2>Total Credit Hour : {totalCredit}</h2>
            <hr />
            <h2>Total Price : {courseAmount} USD</h2>

            
        </div>
    );
};

export default Cart;