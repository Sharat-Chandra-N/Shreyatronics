import { ADD_TO_CART, UPDATE_CONTACT, DELETE_CART_ITEM, SUBMIT_ITEMS, ADD_TO_CART_TB} from '../Action'

const Cart_Reducer = (state, action) => {

    var today = new Date();
    var date = today.getFullYear()+'_'+(today.getMonth()+1)+'_'+today.getDate();

    if(action.type === ADD_TO_CART){
        
        const {id,itemName,quantity,powerRating} = action.payload
        const tempItem = state.cart.find((i) => i.id === `${id}_${itemName.split(' ').join('_')}_${powerRating.split(' ').join('_')}`)

        if(tempItem){
            const tempCart = state.cart.map((cartItem) => {
                let newQuan = cartItem.quantity + quantity
                return {...cartItem, quantity : newQuan}
            })
            
        return{
            ...state,cart : tempCart
        }

        }else{

        return{
            ...state,
            cart : [...state.cart,
                {
                id : `${id}_${itemName.split(' ').join('_')}_${powerRating.split(' ').join('_')}`,
                itemName : itemName,
                quantity : quantity,
                powerRating : powerRating,
                orderId : `${state.contactNumber}_${date}`
            }]
        }}
    }

    if(action.type === ADD_TO_CART_TB){
        
        const {id,description,quantity,series,numOfWays,partNumber} = action.payload
        const tempItem = state.cart.find((i) => i.id === `${id}_${description.split(' ').join('_')}_${partNumber.split(' ').join('_')}`)

        if(tempItem){
            const tempCart = state.cart.map((cartItem) => {
                let newQuan = cartItem.quantity + quantity
                return {...cartItem, quantity : newQuan}
            })
            
        return{
            ...state,cart : tempCart
        }

        }else{

        return{
            ...state,
            cart : [...state.cart,
                {
                id : `${id}_${description.split(' ').join('_')}_${partNumber.split(' ').join('_')}`,
                description : description,
                quantity : quantity,
                series : series,
                numOfWays : numOfWays,
                partNumber : partNumber,
                orderId : `${state.contactNumber}_${date}`
            }]
        }}
    }

    if(action.type === UPDATE_CONTACT){
        
        const tempNumber = action.payload
        
        return{
            ...state,
            contactNumber : tempNumber
        }
    }

    if(action.type === DELETE_CART_ITEM){
        const tempId = action.payload
        const tempCart = state.cart.filter((item) => (item.id !== tempId))
        return{
            ...state,
            cart : tempCart
        }
    }

    if(action.type === SUBMIT_ITEMS){
        const tempCart = state.cart
        return{
            ...state,
            finalCart : tempCart
        }
    }

    throw new Error(`${action.type} is NOT FOUND`)

}

export default Cart_Reducer