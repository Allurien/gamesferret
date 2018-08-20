import React, {Component, Fragment} from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import '../assets/css/header-bar.scss'
import {signIn, signOut} from "../actions";
import { connect } from "react-redux";
import WelcomeLogo from "../assets/images/wizard-icons/headerlogo.png"


class HeaderBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            dropdownsOpen: {
                main: false,
                browse: false,
                about: false,
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
        this.state.dropdownsOpen.about = false;
        this.state.dropdownsOpen.search = false;

        this.setState({
            ...this.state
        });
    }
    toggleBrowseMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.browse = !this.state.dropdownsOpen.browse;
        this.state.dropdownsOpen.about = false;

        this.setState({
            ...this.state
        });
    }
    toggleAboutMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.about = !this.state.dropdownsOpen.about;

        this.setState({
            ...this.state
        });
    }
    toggleSearchBar(event){
        event.stopPropagation();

        this.state.dropdownsOpen.main = false;
        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.about = false;
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

            this.state.dropdownsOpen.main = false;
            this.state.dropdownsOpen.browse = false;
            this.state.dropdownsOpen.about = false;
            this.state.dropdownsOpen.search = false;

            this.setState({
                ...this.state
            });
        }
    }



    renderLinks() {
        if(this.props.auth) {
            return (
                <Fragment>
                    <li className="nav-text nav-text-bottom">
                        <NavLink to ="/favorites">Favorites</NavLink>
                    </li>
                    <li className="nav-text nav-text-bottom">
                        <NavLink onClick={this.props.signOut} to ="sign-in">Sign Out</NavLink>
                    </li>
                </Fragment>

            )
        }
        return(
            <Fragment>
                <li className="nav-text nav-text-bottom">
                    <NavLink to="/sign-up">Sign Up</NavLink>
                </li>
                <li className="nav-item nav-text">
                    <NavLink className="nav-link" to ="/sign-in">Sign In</NavLink>
                </li>
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
            width: this.state.dropdownsOpen.main ? "167px" : "0",
            "borderRight": this.state.dropdownsOpen.main ? "1px solid #F0C808" : "none"
        };
        const browseMenuStyle = {
            height: this.state.dropdownsOpen.browse ? "90px" : "0",
            "marginTop": this.state.dropdownsOpen.browse ? "15px" : "0"
        };
        const aboutMenuStyle = {
            height: this.state.dropdownsOpen.about ? "20px" : "0",
            "marginTop": this.state.dropdownsOpen.about ? "15px" : "0"
        };
        const searchDropDownStyle = {
            height: this.state.dropdownsOpen.search ? "40px" : "0"
        };


        return(
            <div>
                <nav className="header">
                    <div className="menu-overlay" onClick={this.toggleMainMenu.bind(this)} style={menuOverlayStyle}></div>
                    <button className="menu-icon" type="button" onClick={this.toggleMainMenu.bind(this)} style={mainMenuButtonPosition} aria-expanded={`${this.state.dropdownsOpen.main ? "true" : "false"}`} aria-label="Toggle main navigation menu">
                        <div className="hamburger-animation">
                            <div style={hamburgerXdivFade}></div>
                            <div style={hamburgerXdiv2}></div>
                            <div style={hamburgerXdiv3}></div>
                            <div style={hamburgerXdivFade}></div>
                        </div>
                    </button>
                    <ul className="main-menu" style={mainMenuStyle}>
                        <Link to="/"><li className="nav-text">Home</li></Link>
                        <li className="nav-text">
                            <div className="plus-bar" onClick={this.toggleBrowseMenu.bind(this)}>
                                Browse
                                <span className={`glyphicon glyphicon-${this.state.dropdownsOpen.browse ? "minus" : "plus"}`} alt="list expand icon" aria-expanded={`${this.state.dropdownsOpen.browse ? "true" : "false"}`} aria-label="Browse-Menu expansion"></span>
                            </div>
                            <ul className="browse-menu" style={browseMenuStyle}>
                                <Link to='/browse/genre'><li>By Genre</li></Link>
                                <Link to='/browse/platform'><li>By Platform</li></Link>
                                <Link to='/browse/price'><li>By Price</li></Link>
                                <Link to='/browse/rating/results'><li>By Rating</li></Link>
                            </ul>
                        </li>
                        <Link to="/wizard"><li className="nav-text">Wizard</li></Link>
                        <Link to="/about"><li className="nav-text">About</li></Link>
                        {this.renderLinks()}
                    </ul>
                    <Link className="logoLink" to="/"><img className="logo" src={WelcomeLogo}/></Link>
                    <div className="fas fa-search search-icon" onClick={this.toggleSearchBar.bind(this)}></div> 

                </nav>
                <div className="dropdownSearch" style={searchDropDownStyle}>
                    <div>
                        <form className="form-inline dropForm" onSubmit={this.handleSearchSubmit.bind(this)}>
                            <button className="search-button-outer" type="submit">
                                <div className="fa fa-search search-button-inner" aria-hidden="true"></div>
                            </button>
                            <input className="dropdownInput form-control form-control-sm ml-3 w-75" type="text" placeholder="Search..." aria-label="Search" onChange={this.handleSearchInputChange.bind(this)} onClick={this.handleSearchTextClick.bind(this)} value={this.state.searchTerm}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default withRouter (connect(mapStateToProps, {signIn: signIn, signOut: signOut})(HeaderBar));