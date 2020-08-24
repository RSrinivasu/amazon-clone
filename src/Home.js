import React from 'react';
import "./home.css";
import Product from './Product';
import data from './utils/products.json'

function Home(){
    let items_2 = data.slice(1,3)
    let items_3 = data.slice(2,5)
    let items_4 = data.slice(1,5)
    return(
        <div className="home">
            <img className="home_img" 
                src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg" />

           {
               /**
                * showing product main page
                */
           } 
            <div className="home_row">
               {
                   items_2.map((item,index)=><Product {...item} key={index} />)
               } 
            </div>
            <div className="home_row">
               {
                   items_4.map((item,index)=><Product {...item} key={index} />)
               } 
            </div>
            <div className="home_row">
               {
                   items_3.map((item,index)=><Product {...item} key={index} />)
               } 
            </div>
            <div className="home_row">
                <Product {...data[0]} />
            </div>

        </div>
    )
}

export default Home;