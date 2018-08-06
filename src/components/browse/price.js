import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Paid from "../../assets/images/wizard-icons/001-money.png";
import Free from "../../assets/images/wizard-icons/002-free.png";
import "../wizard/wizard.scss";

class PriceOptions extends Component {
    render() {
        return(
            <div className="wizardContainer">
                <h2>Browse by Price</h2>
                <div className="gameIcons">
                    <div className="flexRow">
                        <Link to='/browse/price/free'>
                            <div className="icon" >
                                <img className="game_wiz" src ={Free} />
                                <div className="genreTitle">Free</div>
                            </div>
                        </Link>
                        <Link to='/browse/price/paid'>
                            <div className="icon">
                                <img className="game_wiz" src ={Paid} />
                                <div className="genreTitle">Paid</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default PriceOptions;