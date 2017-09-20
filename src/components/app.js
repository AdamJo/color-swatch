import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import SideBar from './sideBar'
import Home from '../routes/home';
import Redirects from '../routes/redirects';
import Details from '../routes/details';
// import Home from 'async!./home';

import { connect } from "preact-redux";
import { bindActions } from "../redux/util";
import * as actions from "../redux/action";
import reduce from "../redux/reducers";

import { Provider } from 'preact-redux';
import store from '../redux/store'

@connect(reduce, bindActions(actions))
class Main extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render(props) {
		return (
				<div id="app">
					<Header />
					<div id="container">
						<SideBar {...props} />
						<Router onChange={this.handleRoute}>
							<Redirects path="/" to="/swatches"/>
							<Redirects path="/details" to="/swatches"/>
							<Details {...props} path="/details/:color?" />
							<Home {...props} path="/swatches/:page?" />
						</Router>
					</div>
				</div>
		);
	}
};

class App extends Component {
	render() {
		return (<Provider store={store}><Main /></Provider>);
	}
}

export default App;
