import React from 'react' 
import './Pagination.css'

const Pagination = ({totalExercise, exercisePerPage, currentPage, handlePageChange}) => {

    const totalPages = Math.ceil(totalExercise/exercisePerPage);
    const maxVisiblePages=7;

    const startPage = Math.max(1, currentPage-Math.floor(maxVisiblePages/2));
    const endPage = Math.min(totalPages, startPage+maxVisiblePages-1)

    const adjustedStartPage = Math.max(1, endPage-maxVisiblePages+1)

    let pages = [];
    
    for(let i=adjustedStartPage ; i<=endPage; i++){
        pages.push(i)
    }

    return (
        <div className='pagination'>
            <button
                className={`btn ${currentPage===1 ? "btn-prev" : ""}`}
                disabled={currentPage===1}
                onClick={()=>handlePageChange(currentPage-1)}
            >
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
            <button
                className={`btn ${currentPage===totalPages ? "btn-next" : ""}`}
                disabled={currentPage===totalPages}
                onClick={()=>handlePageChange(currentPage+1)}
            >
                NEXT
            </button>
        </div>
    )
}

export default Pagination
