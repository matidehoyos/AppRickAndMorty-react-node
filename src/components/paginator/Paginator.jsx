import style from "./Paginator.module.css";

export default function Paginator ({currentPage, setCurrentPage, totalPages}) {

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    return (
        <div className={style.paginator}>
            <button className={style.boton} onClick={handlePrev} disabled={currentPage === 1}>
                Prev
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button className={style.boton} onClick={handleNext}>
                Next
            </button>
        </div>
    );
 }