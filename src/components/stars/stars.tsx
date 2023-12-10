import './stars.css'
import Star from '../star/star';

export default function Stars({count}:{count: number}) {

    if(count < 1 || count > 5) return;

    const content = [];
    for(let i = 0; i < count; i++) {
        content.push(
            <li key={i}><Star/></li>
        )
    }

    return (
        <ol className='card-body-stars'>{content}</ol>
    )
}