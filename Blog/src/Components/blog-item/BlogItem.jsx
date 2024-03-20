import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useAction'
import { Link } from 'react-router-dom'

export default function BlogItem({id,title,published_at,image}){
    const {favorites} = useSelector(state => state)

    const dispatch = useActions()

    const isExist = favorites.some(r => r.id === blog.id)
    return(
        <div>
           <h3>{id}</h3> 
           <h3>{title}</h3> 
           <h3>{published_at}</h3> 
           <h3>{image}</h3> 
           <button onClick={() => toggleFavorites(blog)}>{isExist ? 'Remove from' : 'Add to'}</button>
            <Link href={`blog=item/${id}`} />
        </div>
    )
}



// export default function BlogItem({blog}){

{/* <div>
<h3>{blog.name}</h3> 
<button onClick={() => toggleFavorites(blog)}>{isExist ? 'Remove from' : 'Add to'}</button>

</div> */}