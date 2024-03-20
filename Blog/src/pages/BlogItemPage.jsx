import BlogItem from '../Components/Blog/BlogItem'
import { useParams } from 'react-router-dom'
import { useGetBlogQuery } from '../store/api/api'

export default function BlogItemPage({id,title,summary,image}){

    let params = useParams();
    
    console.log(params.id);

    let {isLoading,data} = useGetBlogQuery(params.id ?? 0) 

    return(
        <div>
        {!isLoading && <BlogItem
          id={data.id} image={data.image_url} text={data.summary} title={data.title}/>}
        </div>
    )
}
