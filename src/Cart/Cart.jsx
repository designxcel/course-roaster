

const Cart = ({selectedCourse, totalCredit, remainingCredit, courseAmount}) => {
    return (
        <div className="bg-white rounded-lg p-4 w-[312px]">
            <h2 className="text-[#2F80ED] font-bold text-lg mb-4">Credit Hour Remaining {remainingCredit} hr</h2>
            <hr />
            <h2 className="font-bold text-4xl mt-4 mb-6">Course Taken: {selectedCourse.length}</h2>
            <div className="mb-6">
            {
                selectedCourse.map(course => (
                    
                        <li className="list-decimal text-gray-500">{course.title}</li>
            
                ))
            }</div>
            <hr />
            <h2 className="mt-5 mb-5 font-medium">Total Credit Hour : {totalCredit}</h2>
            <hr />
            <h2 className="mt-5 mb-5 font-medium">Total Price : {courseAmount} USD</h2>

            
        </div>
    );
};

export default Cart;