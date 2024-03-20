import ArticlesItem from '../Components/Articles/ArticlesItem'
import { useParams } from 'react-router-dom'
import { useGetArticleQuery } from '../store/api/api'

export default function ArticlesItemPage({id,title,published_at,image}){

    let params = useParams();
    
    console.log(params.id);

    let {isLoading,data} = useGetArticleQuery(params.id ?? 0) 

    return(
        <div>
        {!isLoading && <ArticlesItem 
          id={data.id} image={data.image_url} text={data.summary} title={data.title}/>}
        </div>
    )
}
