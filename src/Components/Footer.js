const Footer = () => {
    return ( 
        <footer>
            <div className ="main-footer">
                <h5 className ="footer-text">&copy; All rights Reserved {new Date().getFullYear()}</h5>
                <h5 className ="footer-text">Shreyatronics</h5>
            </div>
        </footer>
     );
}
 
export default Footer;