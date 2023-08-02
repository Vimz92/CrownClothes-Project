import React from 'react'

const CategoryItem = ({category}) => {
    const {imageUrl, title  } = category
    return (
        <div className="categories-container">
        
           <div className="category-container">
             <div className='background-image' style={{
               backgroundImage: `url(${imageUrl})`
             }} />
     
             <div className='category-body-container'>
            <h2 key={category.id}> {title}</h2>
            <p> SHop Now</p>
            </div>
            
             </div>
            
        
        
          
        </div>
     
      )
}

export default CategoryItem