import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/css/header-bar.scss';

export default props => {
    return (
        <div className="browseMain">
            <h2>Browse By:</h2>
            <ul>
                <li><Link className='blueLink' to='/browse/genre'>Genre</Link></li>
                <li><Link className='blueLink' to='/browse/price'>Price</Link></li>
                <li><Link className='blueLink' to='/browse/rating/results'>Rating</Link></li>
            </ul>
        </div>
        
    )
}