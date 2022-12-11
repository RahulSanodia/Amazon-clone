import Card from './Card';
import React from 'react'
import './ProductList.scss';
import { useStateValue } from './StateProvider';
const ProductList = () => {
  const { initialState } = useStateValue();
  return(
    <div className="productList">
      {
        initialState.productList.map((item, index)=><Card {...item} key={index}/>)
      }
    </div>
  )
}

export default ProductList;