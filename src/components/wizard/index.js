import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Wizard from './wizard'
import { formatPostData} from '../../helpers'

class WizardResults extends Component {
    constructor(props) {
        super(props);
        this.state={
            genre:"",
            platform:"",
            price_value:""
        }
    }
    componentDidMount() {
        this.getDataFromLocalStorage;
    }
    getDataFromLocalStorage() {
        var priceData = JSON.parse(localStorage.getItem('price'));
        var platformData = JSON.parse(localStorage.getItem('platform'));
        var genreData = JSON.parse(localStorage.getItem('genre'));
        this.setState({
            price: priceData.price,
            platform: platformData.platform,
            genre: genreData.genre
        });
        const newItem = {
            genre: 'board',
            platform:  'android',
            price_value: 'free'
        };
        const postnewItem = formatPostData(newItem);
        axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'wizardpage'
            }
        }).then(resp => {
        });
    }
    render() {
        return <div>it worked</div>
    }
}






