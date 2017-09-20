import { h, Component } from 'preact';
import style from './style';
import ColorSwatches from '../../components/colorSwatches';
import Pagination from '../../components/pagination';
import { Link } from 'preact-router';

export default class Home extends Component {
  state = {
    swatches: Array.from(Array(5).keys())
  }


  componentWillMount() {
    this.setState({
      swatches: [
        (parseInt(`${this.props.color}`, 16) - 3000).toString(16),
        (parseInt(`${this.props.color}`, 16) - 1500).toString(16),
        (parseInt(`${this.props.color}`, 16)).toString(16),
        (parseInt(`${this.props.color}`, 16) + 1500).toString(16),
        (parseInt(`${this.props.color}`, 16) + 3000).toString(16),
      ]
    })
  }

  componentWillReceiveProps() {
    this.setState({
      swatches: [
        (parseInt(`${this.props.color}`, 16) - 3000).toString(16),
        (parseInt(`${this.props.color}`, 16) - 1500).toString(16),
        (parseInt(`${this.props.color}`, 16)).toString(16),
        (parseInt(`${this.props.color}`, 16) + 1500).toString(16),
        (parseInt(`${this.props.color}`, 16) + 3000).toString(16),
      ]
    })
  }

	render({color, allColors}, {swatches}) {
		return (
      <div class={style.details}>
        <div class={style.detailColor} style={`background: #${color}`}>
          <div class={style.hexName}>#{color}</div>
        </div>
        <div class={style.swatches}>
          {
             swatches.map(color => {
               return <ColorSwatches hex={`#${color}`} {...this.props} />
             })
          }
        </div>
        <div class={style.clear}>
          <div>
            <Link href="/" class={style.button}>Clear</Link>
          </div>
        </div>
      </div>
		);
	}
}
