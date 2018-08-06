import React, {Component} from 'react';
import GeneralText from '../multiuse/generaltext';
import '../results/results.scss';
import GameComponent from '../results/gamecomponent';
import {wizardResults} from '../../actions/';
import {connect} from 'react-redux';
import Loader from '../loader';

class WizardResults extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getDataFromLocalStorage();
    }
    getDataFromLocalStorage() {
        var priceData = JSON.parse(localStorage.getItem('price'));
        var platformData = JSON.parse(localStorage.getItem('platform'));
        var genreData = JSON.parse(localStorage.getItem('genre'));
        const newItem = {
            genre: genreData.genre,
            platform:  platformData.platform,
            price_value: priceData.price
        };
        this.props.wizardResults(newItem);
    }
    render() {
        if (!this.props.wizard){
            return (
                <Loader />
            )
    }
    const data = this.props.wizard.data;
    const text = 'Based on your choices, we think you will enjoy these games.';
        return (
            <div className="resContainer">
                <h2>Recommendations</h2>
                <GeneralText text={text} />
                <div className="detailContainer">
                    {data.map(game => <GameComponent key={game.game_id} details={game}/>)}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        wizard: state.wizard.wizardresults
    }
}
export default connect(mapStateToProps, {wizardResults})(WizardResults);





