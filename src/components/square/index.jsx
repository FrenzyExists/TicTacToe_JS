import './index.css';


const Square = ({id, value, onClick }) => (
    <button id={id} className="item" onClick={onClick}>
      {value}
    </button>
);

export default Square;