import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount, resetCount } from '../redux/actions/actions'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>
                Count : <span>{count}</span>
            </h1>
            <button onClick={() => dispatch(incrementCount())}> +1</button>
            <button onClick={() => dispatch(decrementCount())}> -1</button>
            <button onClick={() => dispatch(resetCount())} > reset</button>
        </div>
    )
}
export default Counter
