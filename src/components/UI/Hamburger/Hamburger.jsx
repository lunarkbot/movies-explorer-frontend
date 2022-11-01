import './Hamburger.css';

const Hamburger = ({ onClick, isActive }) => {
  return (
    <button
      className={`hamburger ${isActive && 'hamburger_active'}`}
      onClick={onClick}
      type="button"
    >
      <span></span>
    </button>
  );
};

export default Hamburger;
