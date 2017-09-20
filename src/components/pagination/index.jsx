import { h, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router';

export default class Pagination extends Component {
	page() {

  }

	render({totalPages, page}) {
    
    page = page === '' ? 1 : page;
    return (
      <div class={style.pagination}>
        {
          totalPages.map(data => {
            const active = parseInt(page) === data + 1 ? style.active : '';
            return <Link style={active ? `border-bottom: 2px solid black;` : ''} href={`/swatches/${data + 1}`} >{data + 1}</Link>
          })
        }
      </div>
		);
	}
}
