import {Link} from 'react-router-dom';
import './PageHero.css'

const PageHero = ({text1, text2}) => {
    return ( 
        <div className="main-page-hero">
            <h4 className="page-hero-heading">
                <Link to="/" className="page-hero-heading">
                    Home / 
                </Link>
                <Link to = {`/${text1}`} className="page-hero-heading">
                    {` ${text1} `}
                </Link>
                {text2 && <>/ {text2}</>}
            </h4>
        </div>
     );
}
 
export default PageHero;