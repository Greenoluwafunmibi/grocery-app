import React from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { useSelector } from 'react-redux';

const Nav = () => {

    const groceryListNumber = useSelector((state)=>state.grocery.value.length);
    const prices = useSelector((state)=>state.grocery.value);

    let pricesArray;

    
    if(prices){
        pricesArray =  prices.map((eachPrice)=>{
            return Number(eachPrice.price);
        })

    }

    let pricesSum =  pricesArray.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
    }, 0);
    
    

   
  return (
    <header>
        <nav>
            <h2>Grocery List app</h2>
            <div className="icons-div">
                <div className="money-icons-div">
                    <GiMoneyStack className="icons money"/>
                    <h3> &#163;{pricesSum}</h3>

                </div>
                
                <div className="shopping-icons-div">
                    <FaBagShopping className="icons shopping"/>
                    <h3>{groceryListNumber}</h3>

                </div>
                
                

            </div>
        </nav>
    </header>
  )
}

export default Nav