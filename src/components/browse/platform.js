import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Apple from "../../assets/images/wizard-icons/001-apple.png";
import Android from "../../assets/images/wizard-icons/002-android.png";
import "../wizard/wizard.scss";

class PriceOptions extends Component {
    render() {
        return(
            <div className="wizardContainer">
                <h2>Browse by Platform</h2>
                <div className="gameIcons">
                    <div className="flexRow">
                        <Link to='/browse/platform/android'>
                            <div className="icon">
                                <img className="game_wiz" src ={Android} />
                                <div className="genreTitle">Android</div>
                            </div>
                        </Link>
                        <Link to='/browse/platform/apple'>
                            <div className="icon">
                                <img className="game_wiz" src ={Apple} />
                                <div className="genreTitle">Apple</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default PriceOptions;