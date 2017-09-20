import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import SVG from '../../assets/helpful-human-icon.svg';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<img src={SVG} alt="logo"/>
				<div class={style.searchBox}>
					<input class={style.search} placeholder="Search" type="text"/>
				</div>
			</header>
		);
	}
}
