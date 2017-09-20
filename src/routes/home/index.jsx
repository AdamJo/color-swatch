import { h, Component } from 'preact';
import style from './style';
import ColorSwatches from '../../components/colorSwatches';
import Pagination from '../../components/pagination'

export default class Home extends Component {
	render({ colors, colorSort, pageMax, pageNumber, page, allColors, ...props }) {
		let start = page === "" ? 0 : (parseInt(page) - 1) * pageMax;
		let end = start === 0 ? pageMax : page * pageMax;
		return (
			<div class={style.home}>
				<div class={style.colors}>
					{
						colorSort 
							?
							colors[colorSort].slice(start, end).map(hex => {
								return <ColorSwatches hex={hex} />
							})
							:
							allColors.slice(start, end).map((hex) => {
									return <ColorSwatches hex={hex} />
							})
					}
				</div>
				<div>
					<Pagination {...props} page={page}/>
				</div>
			</div>
		);
	}
}
