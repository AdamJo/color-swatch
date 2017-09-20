import { h, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router';

export default class ColorSwatches extends Component {
	render({hex}) {
		return (
      // slice the color to remove the hashtag for routing
      <Link href={`/details/${hex.slice(1)}`} class={style.singleColors} style={`background: ${hex}`} >
        <div class={style.hexName}>{hex}</div>
      </Link>
    )
  }
}
