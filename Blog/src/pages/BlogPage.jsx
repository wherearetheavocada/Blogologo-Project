import Blog from "../Components/Blog/Blog"
import BlogHeader from "../Components/Blog/BlogHeader"
import Pagination from "../Components/Pagination/Pagination"
import styles from '../Components/Blog/Blog.module.css'
// import { queryTerm } from '../Components/Header/Header'
import { useGetBlogsQuery } from "../store/api/api"
import { useState } from "react"
import { useSelector } from "react-redux"
// queryTerm,page
// import {queryTerm} from '../Components/Header/Header';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function BlogPage(queryTerm){

    let maxDate = new Date();
    let [minDate, setMinDate] = useState(new Date());

    // let dateString = date.toString()
    const [page, setPage] = useState(0)
    const {search} = useSelector(state => state.user)
    const { data, isFetching, isLoading } = useGetBlogsQuery({
        search: search, 
        page: page, 
        limit: 9,
        maxData: maxDate.toISOString(),
        minData: minDate.toISOString(),
        sort: 'field' // tyt sort
    })






    const handleChangeDataSort = (sortType) => {
        console.log(isLoading);
        let date = new Date();
        switch (sortType) {
            case 'day':
                date.setDate(date.getDate() - 1);
                break
            case 'week':
                date.setDate(date.getDate() - 7);
            break
            case 'monath':
                date.setMonth(date.getMonth() - 1);
                break
            default:

          }
          setMinDate(date);
    }

const handleChangeSortTitle = () =>{

}


    return(
<>
<BlogHeader onFilterClick={handleChangeDataSort} onSortClick= {handleChangeSortTitle}/>
<div className={styles.blog}>
        <div className={styles.blog_Component}>
{isLoading ? (
        <div>Loading...</div> 
        ): data ?(
         data.results.map(blog => 
          <Blog 
          id={blog.id} image={blog.image_url} data={blog.published_at} title={blog.title}/>)
        ) : <div>Not found</div>} 
        </div>
        </div>
            <div className={styles.pagination}>
        <button className={styles.btnPagination} onClick={() => setPage(page - 1)}>
        <GoArrowLeft />
            <p className={styles.btnText}>Prev</p>
      </button>
      <button  onClick={() => setPage(0)} >1</button>
      <button  onClick={() => setPage(1)}>2</button>
      <button  onClick={() => setPage(2)}>3</button>

      <button className={styles.btnPagination} onClick={() => setPage(page + 1)} >
      <p className={styles.btnText}>Next</p>
         <GoArrowRight />
      </button>
      </div>
</>
    )
}