import { useAdminContext } from '../context/AdminContext';
import { useHistory } from 'react-router-dom'

const AdminHome = () => {

    const { loggedIn } = useAdminContext()
    const history = useHistory()

    if(!loggedIn){
        history.push('./')
    }

    return ( 
        <h2>Admin Home Main</h2>
     );
}
 
export default AdminHome;