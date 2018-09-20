import { Component } from 'inferno';
import { observer } from "inferno-mobx";
import styles from './App.scss';
import nyan from '../assets/nyan.gif';
import store from 'store';

@observer class App extends Component {
	render() {
		return (
			<div id="App">
				<h1>I haz Infernos</h1>
				<img src={nyan}/>
				<h2>{store.galaxies} galaxies traveled</h2>
			</div>
		);
	}
};

export default App;