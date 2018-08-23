import React, {Component, Fragment} from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import '../assets/css/desktopMenu.scss'
import {signIn, signOut} from "../actions";
import { connect } from "react-redux";
import WelcomeLogo from "../assets/images/wizard-icons/headerlogo.png"


class DesktopMenu extends Component {
    constructor(props){
        super(props);

        this.state = {
            dropdownsOpen: {
                main: true,
                browse: false,
                user: false,
                search: false
            },
            searchTerm: "",
            searchInputClicks: 0
        };
    }

    toggleMainMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.main = !this.state.dropdownsOpen.main;
        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.user = false;
        this.state.dropdownsOpen.search = false;

        this.setState({
            ...this.state
        });
    }
    toggleBrowseMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.browse = !this.state.dropdownsOpen.browse;
        this.state.dropdownsOpen.user = false;

        this.setState({
            ...this.state
        });
    }
    toggleUserMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.user = !this.state.dropdownsOpen.user;

        this.setState({
            ...this.state
        });
    }
    toggleSearchBar(event){
        event.stopPropagation();

        this.state.dropdownsOpen.main = false;
        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.user = false;
        this.state.dropdownsOpen.search = !this.state.dropdownsOpen.search;

        this.setState({
            ...this.state
        });
    }
    // -------------------------------------------------------------------------------------
    async handleSearchInputChange(event){
        await this.setState({
            ...this.state,
            searchTerm: event.target.value
        });
    }
    handleSearchSubmit(event){
        event.preventDefault();

        const location = `/search/results?search_term=${this.state.searchTerm}`;
        this.props.history.push(location);

        this.state.searchInputClicks = 0;
        this.setState({
            ...this.state
        });
    }
    handleSearchTextClick(event){
        event.preventDefault();

        this.state.searchInputClicks++
        this.setState({
            ...this.state
        });

        if (this.state.searchInputClicks < 2){
            event.target.select();
        }
    }
    // -------------------------------------------------------------------------------------
    componentDidUpdate(prevProps){
        if (this.props.location !== prevProps.location){

            this.state.dropdownsOpen.main = true;
            this.state.dropdownsOpen.browse = false;
            this.state.dropdownsOpen.user = false;
            this.state.dropdownsOpen.search = false;

            this.setState({
                ...this.state
            });
        }
    }



    renderLinks() {
        const userMenuStyle = {
            height: this.state.dropdownsOpen.user ? "80px" : "0",
            "marginTop": this.state.dropdownsOpen.user ? "15px" : "0"
        };
        if(this.props.auth) {
            return (
                <Fragment>
                        <li className="desktopNavText">
                            <div onClick={this.toggleUserMenu.bind(this)}>
                                Account
                                <span className={`glyphicon glyphicon-${this.state.dropdownsOpen.user ? "minus" : "plus"}`} alt="list expand icon" aria-expanded={`${this.state.dropdownsOpen.user ? "true" : "false"}`} aria-label="User-Menu expansion"></span>
                            </div>
                            <ul className="desktopUserMenu" style={userMenuStyle}>
                            <li>
                                <NavLink to ="/favorites">Favorites</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={this.props.signOut} to ="sign-in">Sign Out</NavLink>
                            </li>
                            </ul>
                        </li>
                </Fragment>
            )
        }
        return(
            <Fragment>
                    <Link className="desktopNavText" to="/sign-up"><li>Sign Up</li></Link>
                    <Link className="desktopNavText" to ="/sign-in"><li>Sign In</li></Link>
            </Fragment>
        )
    }

    render() {
        const menuOverlayStyle = {
            background: this.state.dropdownsOpen.main ? "rgba(255,255,255,.5)" : "rgba(0,0,0,0)",
            "pointerEvents": this.state.dropdownsOpen.main ? "auto" : "none"
        };
        // -----------------------------------
        const mainMenuButtonPosition = {
            transform: this.state.dropdownsOpen.main ? "translateX(99px)" : "translateX(0px)"
        };
        const hamburgerXdiv2 = {
            transform: this.state.dropdownsOpen.main ? "rotateZ(-45deg)" : "initial"
        };
        const hamburgerXdiv3 = {
            transform: this.state.dropdownsOpen.main ? "rotateZ(45deg)" : "initial"
        };
        const hamburgerXdivFade = {
            opacity: this.state.dropdownsOpen.main ? "0" : "1"
        }
        // -----------------------------------
        const mainMenuStyle = {
            width: this.state.dropdownsOpen.main ? "100%" : "0",
        };
        const browseMenuStyle = {
            height: this.state.dropdownsOpen.browse ? "160px" : "0",
            "marginTop": this.state.dropdownsOpen.browse ? "0" : "0"
        };
        
        const searchDropDownStyle = {
            height: this.state.dropdownsOpen.search ? "30px" : "0"
        };


        return(
            <div>
                <div className="desktopHeader"></div>
                <nav className="desktopNav">
                    <ul className="desktopMainMenu" style={mainMenuStyle}>
                        <Link className="desktopLogoLink" to="/"><li><img className="desktopLogo" src={WelcomeLogo}/></li></Link>
                        <li className="desktopNavContainer">
                            <ul className="desktopNavItems">
                                <li className="desktopNavText">
                                    <div onClick={this.toggleBrowseMenu.bind(this)}>
                                        Browse
                                        <span className={`glyphicon glyphicon-${this.state.dropdownsOpen.browse ? "minus" : "plus"}`} alt="list expand icon" aria-expanded={`${this.state.dropdownsOpen.browse ? "true" : "false"}`} aria-label="Browse-Menu expansion"></span>
                                    </div>
                                    <ul className="desktopBrowseMenu" style={browseMenuStyle}>
                                        <Link to='/browse/genre'><li>By Genre</li></Link>
                                        <Link to='/browse/platform'><li>By Platform</li></Link>
                                        <Link to='/browse/price'><li>By Price</li></Link>
                                        <Link to='/browse/rating/results'><li>By Rating</li></Link>
                                    </ul>
                                </li>
                                <Link to="/wizard" className="desktopNavText"><li>Wizard</li></Link>
                                <Link to="/about" className="desktopNavText"><li>About</li></Link>
                                {this.renderLinks()}
                                <li className="desktopDropdownSearch">
                                    <form className="desktopForm" onSubmit={this.handleSearchSubmit.bind(this)}>
                                        <button className="desktopSearchButtonInner" type="submit">
                                            <div className="fa fa-search" aria-hidden="true"></div>
                                        </button>
                                        <input className="desktopDropdownInput" type="text" placeholder="Search..." aria-label="Search" onChange={this.handleSearchInputChange.bind(this)} onClick={this.handleSearchTextClick.bind(this)} value={this.state.searchTerm}/>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default withRouter (connect(mapStateToProps, {signIn: signIn, signOut: signOut})(DesktopMenu));