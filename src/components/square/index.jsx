import './index.css';

/**
 * 
 * @param {int} id
 * @param {string} value
 * @param {any} onClick 
 * @returns 
 */
const Square = ({id, value, onClick }) => (
    <button id={id} className="item" onClick={onClick}>
      {value}
    </button>
);

export default Square;