import { h, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router'

export default class SideBar extends Component {
	state = {
		currentColor: ""
	}

	sortColor(color) {
		const { sideBarColorSort, colorSort } = this.props
		color = colorSort === color ? undefined : color;
		sideBarColorSort(color);
	}

	getRandomNumber(allColors) {
		this.setState({
			currentColor: allColors[Math.floor(Math.random() * allColors.length)].slice(1)
		});
		// forceUpdate();
	}

	render({colorOptions, colorSort, allColors}, {currentColor}) {
		return (
			<div class={style.sideBar}>
				<div>
        	<Link class={style.button} onClick={() => this.getRandomNumber(allColors)} href={`/details/${currentColor}`}>Random Color</Link>
				</div>
				<ul class={style.colorList}>
					{
						colorOptions.map((color, index) => {
							const active = colorSort === color ? style.active : ''
							return <Link href="/swatches" onClick={() => this.sortColor(color)} class={`${style.color} ${active}`} key={index}>{color}</Link>
						})
					}
				</ul>
			</div>
		);
	}
}
