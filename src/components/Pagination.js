import React from 'react' 
import './Pagination.css'

const Pagination = ({totalExercise, exercisePerPage, currentPage, handlePageChange}) => {

    let pages = [];
    
    for(let i=1 ; i<=Math.ceil(totalExercise/exercisePerPage); i++){
        pages.push(i)
    }
    return (
        <div className='pagination'>
            <button>
                PREV
            </button>
            {
                pages.map((page, index)=>{
                    return (
                        <button key={index}
                            className={page===currentPage ? "active" : ""}
                            onClick={()=>handlePageChange(page)}
                        >{page}</button>
                    ) 
                })
            }
            <button>
                NEXT
            </button>
        </div>
    )
}

export default Pagination
