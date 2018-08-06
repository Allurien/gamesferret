import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './header-bar';
import Home from './home';
import NotFound from './notfound';
import Browse from './browse';
import BrowseGenre from './browse/genreoptions';
import BrowseGenreResults from './browse/genreresults';
import BrowsePrice from './browse/price';
import BrowsePriceResults from './browse/priceresults';
import BrowsePlatform from './browse/platform';
import BrowsePlatformResults from './browse/platformresults';
// import BrowseRating from './browse/rating';
import BrowseRatingResults from './browse/ratingresults';
import Wizard from './wizard/price';
import Platform from "./wizard/platform";
import Genre from "./wizard/genre";
import Search from './search';
import GameInfo from './gamedetails';
import About from './about';
import Footer from './footer-bar';
import WizardResults from "./wizard/wizardresults"
import '../assets/css/app.scss';
import SignIn from "../components/signin/sign_in";
import SignUp from "../components/signin/sign_up";
import Favorites from "../components/favorites";


const App = () => (
        <div className="appOuterDiv">
            <div>
            <Header/>
            </div>
            <div className="mainBody">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/browse/" component={Browse}/>
                    <Route exact path="/browse/genre" component={BrowseGenre}/>
                    <Route path="/browse/genre/:genre" component={BrowseGenreResults}/>
                    {/* <Route exact path="/browse/rating" component={BrowseRating}/> */}
                    <Route path="/browse/rating/results" component={BrowseRatingResults}/>
                    <Route exact path="/browse/price" component={BrowsePrice}/>
                    <Route path="/browse/price/:price" component={BrowsePriceResults}/>
                    <Route exact path="/browse/platform" component={BrowsePlatform}/>
                    <Route path="/browse/platform/:platform" component={BrowsePlatformResults}/>
                    <Route path="/wizard" component={Wizard}/>
                    <Route path="/platform" component={Platform}/>
                    <Route path="/genre" component={Genre}/>
                    <Route path="/wizardresults" component={WizardResults}/>
                    <Route exact path="/search" component={Search}/>
                    <Route path="/about" component={About}/>
                    <Route path="/search/results" component={Search}/>
                    <Route path='/game/:game_details' component={GameInfo} />
                    <Route path='/sign-in' component={SignIn}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/favorites" component={Favorites}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer/>
        </div>


        
);
export default App;
