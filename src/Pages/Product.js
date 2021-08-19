import React,{useEffect, useState} from "react" ;
import {useParams} from 'react-router-dom';
import './Product.css';
import ToggleSwitchModal from "../Modal/ToggleSwitchModal";
import PageHero from "../Components/PageHero";

const Product = () => {

    const {name} = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [item, setItem] = useState([])
    const [msg, setMsg] = useState("")

    const toogle = () => {
        setShowModal(!showModal)
    }

    const fetchData = async () => {

        try {
            setLoading(true)
            const response = await fetch('https://shreyatronics.herokuapp.com/api/public/gilard')
            const data = await response.json()
            const filteredData = data.toggleSwitches.filter(item => {
                return item.poleType === name
            })
            setData(filteredData)
            setLoading(false)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const filterItem = (id) => {
        const singleItem = data.filter(item => {
            return item.id === id
        })
        setItem(singleItem[0])
    }
    
    if(loading){
        return(
            <div className = "table-section">
                <h3>Products Loading...</h3>
            </div>
        )
    }

    return (
        <>
        <PageHero text1 = "Gilard" text2 = {name} />
        <div className="message-section">
            <h3 className="message-header">{msg}</h3>
        </div> 
        <div className = "table-section">
            <table className = "table">
                <thead className = "thead">
                    <tr>
                      <th>Description</th>
                      <th>Pole Type</th>
                      <th>6 Amps</th>
                      <th>10 Amps</th>
                      <th>15 Amps</th>
                      <th>20 Amps</th>
                      <th></th>
                    </tr>
                </thead>
                {
                    data.map((item,index) => (
                        <tbody>
                            <tr key = {index} className={`tr-${index}`}>
                                <td>{item.description}</td>
                                <td>{item.poleType}</td>
                                <td>{item.amps6}</td>
                                <td>{item.amps10}</td>
                                <td>{item.amps15}</td>
                                <td>{item.amps20}</td>
                                <td className="button-section">
                                    <button 
                                        className ="add-button"
                                        onClick = {() =>{
                                            toogle()
                                            filterItem(item.id)
                                            }}
                                    >Add to Cart</button></td>
                            </tr>
                        </tbody>
                    ))
                }
                <ToggleSwitchModal 
                    showModal = {showModal}
                    toogle = {toogle}
                    item = {item}
                    setMsg = {setMsg}    
                ></ToggleSwitchModal>
            </table>    
        </div>
    </>
    );
}
 
export default Product;