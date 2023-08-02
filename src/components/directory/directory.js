import CategoryItem from '../category-item/category-item.js';


const Directory  = ({categories}) =>  {
    return ( 
        <div className="categories-container">
          {categories.map((category) => (
         <CategoryItem category={category} key={category.id}/>
       
    ))}
   
     
   </div>
    )
}

export default Directory