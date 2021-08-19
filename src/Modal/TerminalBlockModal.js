import React, {useState} from "react";
import { useCartContext } from "../context/CartContext";
import './TerminalBlockModal.css';

const TerminalBlockModal = ({showModal,toogle,item,setMsg}) => {

    const {addToCartTB, contactNumber, updateContact} = useCartContext()

    const [data, setData] = useState({
        quantity : 0,
        description : "",
        series : "",
        numOfWays : 0,
        partNumber: ""
    })

    const [validationMessage, setvalidationMessage] = useState("")

    const validateData = () => {
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
            quantity : 0,
            description : "",
            series : "",
            numOfWays : 0,
            partNumber: ""
        })
        setvalidationMessage("")
    }
    
    const postData = () => {
        const validation = validateData()
        if(validation === false){
            addToCartTB(data.id,
                      data.description,
                      parseInt(data.quantity),
                      data.series,
                      data.numOfWays,
                      data.partNumber
                    )
            toogle()
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
                    <h4>Toogle Switch - {item.description}</h4>
                </div>
                <div className="ts-modal-validation">
                    <h4>{validationMessage}</h4>
                </div>
                <div className="ts-modal-content"> 
                    <div className="ts-modal-desc">
                        <label className="ts-modal-label">Name : </label>
                        <input type="text" value={item.description} readOnly = {true} className="ts-modal-input" />
                    </div>
                    <div className="ts-modal-desc">
                        <label className="ts-modal-label">Series : </label>
                        <input type="text" value={item.series} readOnly = {true} className="ts-modal-input" />
                    </div>
                    <div className="ts-modal-desc">
                        <label className="ts-modal-label">Num of ways : </label>
                        <input type="text" value={item.numOfWays} readOnly = {true} className="ts-modal-input" />
                    </div>
                    <div className="ts-modal-desc">
                        <label className="ts-modal-label">Part Number : </label>
                        <input type="text" value={item.partNumber} readOnly = {true} className="ts-modal-input" />
                    </div>
                    <div className="ts-modal-quan">
                        <label className="ts-modal-label">Quantity : </label>
                        <input  className="ts-modal-input" type="number" onChange = {(e) => {
                            setData({...data, 
                                        quantity : e.target.value, 
                                        description : item.description,
                                        series : item.series,
                                        numOfWays : item.numOfWays,
                                        partNumber : item.partNumber, 
                                        id : item.id
                            })
                            setvalidationMessage("")
                        }} />
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
 
export default TerminalBlockModal;