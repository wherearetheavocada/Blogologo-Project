import Article from "../Components/Articles/Articles"
import ArticleHeader from "../Components/Articles/ArticlesHeader"
import Pagination from "../Components/Pagination/Pagination"
import styles from '../Components/Blog/Blog.module.css'

import { useGetArticlesQuery } from "../store/api/api"

export default function ArticlesPage(){
    let {isLoading,data} = useGetArticlesQuery() 
    console.log(data)

    return(
<>
<ArticleHeader  />
<div className={styles.blog}>
        <div className={styles.blog_Component}>
{isLoading ? (
        <div>Loading...</div> 
        ): data ?(
         data.results.map(articles => 
          <Article 
          id={articles.id} image={articles.image_url} data={articles.published_at} title={articles.title}/>)
        ) : <div>Not found</div>} 
        </div>
        </div>
        <Pagination/>
</>
    )
}