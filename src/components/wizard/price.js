import React, {Component} from 'react';
import {Link} from "react-router-dom"
import Paid from "../../assets/images/wizard-icons/001-money.png";
import Free from "../../assets/images/wizard-icons/002-free.png";
import "./wizard.scss";

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state={
            price:"",
            disabled: "disabled",
            styling: "inactive-wizard-button"
    };
        this.handleIconClick = this.handleIconClick.bind(this);
        localStorage.removeItem('price');
        localStorage.removeItem('platform');
        localStorage.removeItem('genre');
    }
    handleIconClick(e, title) {
        let price = {
            price: title
        };
        this.setState(price);
        localStorage.setItem('price', JSON.stringify(price));
        this.setState({
            disabled: "",
            styling: "active-wizard-button"
        })
    }
    render() {
        return(
            <div className="wizardContainer">
                <h4 className="priceGameName">Are you looking for FREE or PAID games?</h4>
                <div className="priceIcons">
                    <div className="flexColumn">
                        <div className="icon">
                            <img className="lg_icon_wiz" src ={Free} onClick={(e) => this.handleIconClick(e, 'free')} />
                        </div>
                        <div className="icon">
                            <img className="lg_icon_wiz" src ={Paid} onClick={(e) => this.handleIconClick(e, 'paid')}/>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <Link to="/platform">
                        <button className={this.state.styling} disabled={this.state.disabled} type="button">Next</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Wizard;
