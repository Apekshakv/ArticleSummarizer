import React from 'react'
import { useEffect , useState } from 'react'
import { useLazyGetSummaryQuery } from '../srveices/article'
import './demo.css'
const Demo = () => {
  const [getSummary , {error , isFetching}] =  useLazyGetSummaryQuery()
  const [loading, setLoading] = useState(false)


  const [article , setarticle] = useState({
    url : " ",
    summary : ''
  })
const handleinput = async(e) =>{
  e.preventDefault()
  const {data} =  await getSummary({articleUrl : article.url})
 if(data?.summary){
  const newArticle = ({ ...article, summary: data.summary })

  setarticle(newArticle);
  console.log(newArticle)
 }
 setLoading(false)
}
  return (
    <div>
         <section className='sec'>
          <form   onSubmit={handleinput}>
             <input type='url' onChange={(e) =>setarticle({...article , url:e.target.value})} value={article.url} required placeholder='Enter the url'></input>
             <button type='submit'>Submit</button>
          </form>
         </section>

           <h1 style={{
            display :"flex",
            justifyContent:"center"

           }}>Article Summary</h1>
             
        <p className="summary"> {article.summary}</p>


    </div>
  )
}

export default Demo