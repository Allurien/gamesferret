import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Adventure from "../../assets/images/wizard-icons/adventure.png";
import Board from "../../assets/images/wizard-icons/board.png";
import Strategy from "../../assets/images/wizard-icons/strategy.png";
import Puzzle from "../../assets/images/wizard-icons/puzzle.png";
import Action from "../../assets/images/wizard-icons/action.png";
import RolePlaying from "../../assets/images/wizard-icons/roleplaying.png"
import Arcade from "../../assets/images/wizard-icons/arcade.png";
import Simulation from "../../assets/images/wizard-icons/simulation.png";
import Racing from "../../assets/images/wizard-icons/racing.png";
import "../wizard/wizard.scss";

class Genre extends Component {
    constructor(props) {
        super(props);
        this.state={
            genre:"",
            disabled: "disabled",
            styling: "inactive-wizard-button"
        };

        this.handleIconClick = this.handleIconClick.bind(this);

    }
    handleIconClick(e, title) {
        let genre = {
            genre: title
        };
        this.setState(genre)
        localStorage.setItem('genre', JSON.stringify(genre));
        this.setState({
            disabled: "",
            styling: "active-wizard-button"
        })

    }
    render() {
        return(
            <div className="wizardContainer">
                <h4 className="gameName">Which genre appeals to you?</h4>
                <div className="gameIcons">
                    <div className="flexRow">
                        <div className="icon">
                            <img className="game_wiz" src ={Adventure} onClick={(e) => this.handleIconClick(e, 'adventure')}/>
                            <div className="genreTitle">Adventure</div>
                        </div>
                        <div className="icon">
                            <img className="game_wiz" src ={Board} onClick={(e) => this.handleIconClick(e, 'board')} />
                            <div className="genreTitle">Board</div>
                        </div>
                        <div className="icon">
                            <img className="game_wiz" src ={Strategy} onClick={(e) => this.handleIconClick(e, 'strategy')}/>
                            <div className="genreTitle">Strategy</div>
                        </div>
                    </div>
                    <div className="flexRow">
                        <div className="icon">
                            <img className="game_wiz" src ={Puzzle} onClick={(e) => this.handleIconClick(e, 'puzzle')}/>
                            <div className="genreTitle">Puzzle</div>
                        </div>
                        <div className="icon">
                            <img className="game_wiz" src ={Action} onClick={(e) => this.handleIconClick(e, 'action')}/>
                            <div className="genreTitle">Action</div>
                        </div>
                        <div className="icon">
                            <img className="game_wiz" src ={RolePlaying} onClick={(e) => this.handleIconClick(e, 'role playing')}/>
                            <div className="genreTitle">Role</div>
                            <div className="genreTitle">Playing</div>
                        </div>
                    </div>
                    <div className="flexRow">
                        <div className="icon">
                            <img className="game_wiz" src ={Arcade} onClick={(e) => this.handleIconClick(e, 'arcade')}/>
                            <div className="genreTitle">Arcade</div>
                        </div>
                        <div className="icon">
                            <img className="game_wiz" src ={Simulation} onClick={(e) => this.handleIconClick(e, 'simulation')}/>
                            <div className="genreTitle">Simulation</div>
                        </div>
                        <div className="icon">
                            <img className="game_wiz" src ={Racing} onClick={(e) => this.handleIconClick(e, 'racing')}/>
                            <div className="genreTitle">Racing</div>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                <Link to="/platform">
                    <button className="active-wizard-button" type="button">Back</button>
                </Link>
                <Link to="/wizardresults">
                    <button className={this.state.styling} disabled={this.state.disabled} type="button" onClick={this.getDataFromLocalStorage}>Next</button>
                </Link>
            </div>
            </div>

        )
    }
}
export default Genre
