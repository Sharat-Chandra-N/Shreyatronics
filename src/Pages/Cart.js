import React from "react";
import PageHero from "../Components/PageHero";
import { useCartContext } from "../context/CartContext";
import './Cart.css'

const Cart = () => {

    const {cart, deleteCartItem, submitOrder} = useCartContext()

    if(cart.length === 0){
        return <div className="empty-cart">
                <h4 className="empty-cart-header">Cart is Empty</h4>
               </div>
            }

    return ( 
        <div>
           <PageHero text1="Cart" />
           <div className="cart-section">
               <table className = "table">
                   <thead className = "thead">
                       <tr>
                           <th>Item Name</th>
                           <th>Quantity</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           cart.map((item,index) => {
                               return <tr key={index} className={`tr-${index}`} >
                                   <td>
                                       {item.itemName && <p className="item-desc">{item.itemName}</p>}
                                       {item.powerRating && <p className="item-desc">Power Rating : {item.powerRating}</p>}
                                       {item.description && <p className="item-desc">{item.description}</p>}
                                       {item.series && <p className="item-desc">Series : {item.series}</p>}
                                       {item.numOfWays && <p className="item-desc">Number of ways : {item.numOfWays}</p>}
                                       {item.partNumber && <p className="item-desc">Part Number : {item.partNumber}</p>} 
                                    </td>
                                   <td>{item.quantity}</td>
                                   <td><button 
                                            onClick={() => {deleteCartItem(item.id)}}
                                            className ="delete-button"
                                    >Delete</button></td>
                               </tr>
                           })
                       }
                   </tbody>
               </table>
               <div className="submit-section">
                       <button className="submit-btn" onClick = {() => submitOrder()}>Submit Order</button>
               </div>
           </div> 
        </div>
     );
}
 
export default Cart;