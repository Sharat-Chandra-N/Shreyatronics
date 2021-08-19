import React, {useState} from "react";
import { useCartContext } from "../context/CartContext";
import './ToggleSwitchModal.css';

const ToggleSwitchModal = ({showModal,toogle,item,setMsg}) => {

    const {addToCart, contactNumber, updateContact} = useCartContext()

    const [data, setData] = useState({
        itemName : "",
        quantity : 0,
        powerRating : ""
    })
    const [validationMessage, setvalidationMessage] = useState("")

    const validateData = () => {
        if(data.powerRating === "" || data.powerRating === "-- Select Here --"){
            setvalidationMessage("Select Power Rating")
            return true
        }
        if(data.quantity === 0){
            setvalidationMessage("Quantity is Required")
            return true
        }
        if(data.quantity < 0 || data.quantity === 'e'){
            setvalidationMessage("Quantity should be greater then Zero")
            return true
        }
        if(contactNumber === null || contactNumber.length !== 10){
            setvalidationMessage("Contact Number Not Valid")
            return true
        }
        return false
    }

    const clearData = () => {
        setData({
            id : null,
            itemName : "",
            quantity : 0,
            powerRating : ""
        })
        setvalidationMessage("")
    }

    const postData = () => {
        const validation = validateData()
        if(validation === false){
            toogle()
            addToCart(data.id,data.itemName,parseInt(data.quantity),data.powerRating)
            clearData()
            setMsg("Items added to Cart")
            setTimeout(() => {
                setMsg("")
            }, 2000);
        }
    }

    return (
        showModal ?
        <div className="ts-modal-background"> 
            <div className="ts-modal">
                <div className="ts-modal-header">
                    <h4>Toogle Switch - {item.poleType}</h4>
                </div>
                <div className="ts-modal-validation">
                    <h4>{validationMessage}</h4>
                </div>
                <div className="ts-modal-content"> 
                    <div className="ts-modal-desc">
                        <label className="ts-modal-label">Name : </label>
                        <input type="text" value={item.description} readOnly = {true} className="ts-modal-input" />
                    </div>
                    <div className="ts-modal-quan">
                        <label className="ts-modal-label">Quantity : </label>
                        <input  className="ts-modal-input" type="number" onChange = {(e) => {
                            setData({...data, quantity : e.target.value, itemName : item.description, id : item.id})
                            setvalidationMessage("")
                        }} />
                    </div>
                    <div className="ts-modal-power">
                        <label className="ts-modal-label">Power Rating : </label>
                        <select  className="ts-modal-input" name="" id="" onChange = {(e) => {
                                setData({...data, powerRating : e.target.value})
                                setvalidationMessage("")
                            }}>
                            <option>-- Select Here --</option>
                            <option value={`amps6 - ${item.amps6}`}>{`amps6 - ${item.amps6}`}</option>
                            <option value={`amps10 - ${item.amps10}`}>{`amps10 - ${item.amps10}`}</option>
                            <option value={`amps15 - ${item.amps15}`}>{`amps15 - ${item.amps15}`}</option>
                            <option value={`amps20 - ${item.amps20}`}>{`amps20 - ${item.amps20}`}</option>
                        </select>
                    </div> 
                    <div className="ts-modal-quan">
                        <label className="ts-modal-label">Phone Number : </label>
                        <input  className="ts-modal-input" type="number" value={contactNumber} onChange = {(e) => {
                            updateContact(e.target.value)
                        }} />
                    </div>   
                </div>
                <div  className="ts-modal-footer">
                    <button className="ts-modal-cart" onClick={() => {
                        postData()
                    }}>Add to Cart</button>
                    <button className="ts-modal-cancel" onClick={() => {
                        toogle()
                        clearData()
                    }}>Close</button>
                </div>
            </div>
        </div> : null
     );
}
 
export default ToggleSwitchModal;