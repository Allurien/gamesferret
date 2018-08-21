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
import {connect} from 'react-redux';
import {browseResults} from '../../actions/';


class GenreOptions extends Component {

    render() {
        return(

            <div className="wizardContainer">
                <h2>Browse by Genre</h2>
                <div className="gameIcons">
                    <div className="flexRow">
                        <Link to='/browse/genre/action'>
                            <div className="icon">
                                <img className="game_wiz" src ={Action} />
                                <div className="genreTitle">Action</div>
                            </div>
                        </Link>
                        <Link to='/browse/genre/adventure'>
                            <div className="icon" >
                                <img className="game_wiz" src ={Adventure} />
                                <div className="genreTitle">Adventure</div>
                            </div>
                        </Link>
                        <Link to='/browse/genre/arcade'>
                            <div className="icon">
                                <img className="game_wiz" src ={Arcade} />
                                <div className="genreTitle">Arcade</div>
                            </div>
                        </Link>
                    </div>

                    <div className="flexRow">
                        <Link to='/browse/genre/board'>
                            <div className="icon">
                                <img className="game_wiz" src ={Board} />
                                <div className="genreTitle">Board</div>
                            </div>
                        </Link>
                        <Link to='/browse/genre/puzzle'>
                            <div className="icon">
                                <img className="game_wiz" src ={Puzzle} />
                                <div className="genreTitle">Puzzle</div>
                            </div>
                        </Link>
                        <Link to='/browse/genre/racing'>
                            <div className="icon">
                                <img className="game_wiz" src ={Racing} />
                                <div className="genreTitle">Racing</div>
                            </div>
                        </Link>
                    </div>

                    <div className="flexRow">
                        <Link to='/browse/genre/role playing'>
                            <div className="icon">
                                <img className="game_wiz" src ={RolePlaying} />
                                <div className="genreTitle">Role</div>
                                <div className="genreTitle">Playing</div>
                            </div>
                        </Link>
                        <Link to='/browse/genre/simulation'>
                            <div className="icon">
                                <img className="game_wiz" src ={Simulation} />
                                <div className="genreTitle">Simulation</div>
                            </div>
                        </Link>
                        <Link to='/browse/genre/strategy'>
                            <div className="icon">
                                <img className="game_wiz" src ={Strategy} />
                                <div className="genreTitle">Strategy</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        )
    }

}
export default connect(null, {browseResults})(GenreOptions);
