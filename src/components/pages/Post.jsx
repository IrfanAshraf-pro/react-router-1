import React, { useEffect } from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

const Post = () => {
    const [searchParams,setSearchParams]=useSearchParams()

    console.log(searchParams);
    console.log(searchParams.entries());
    for (const entry of searchParams.entries()) {
        console.log(entry);
      }
    console.log(searchParams.get('condition'));
    console.log(searchParams.get('company'));
    console.log(searchParams.get('model'));
    const params = useParams()
    // useEffect(() => {
    //    setTimeout(() => {
    // //        setSearchParams({ name: 'ali' })
    // // console.log('inside effect');
    // // console.log(searchParams.get('name'));
    
    //  }, 5000); 
           
    //  },[])
    //or
    // const { category,id }=useParams()
  return (
    <>
          <h1>Post - category is {params.category}</h1>
          <h2>Id is - {params.id}</h2>
    </>
  )
}

export default Post
