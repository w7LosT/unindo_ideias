import P from 'prop-types';

const defaultCustomStyle = {
  fontSize: "14px",
  margin: "10px",
  boxShadow: "0 3px 6px rgba(0, 0, 0, .5)",
  cursor: "pointer",
}

export const Button = ({ children, handleClick, customStyle = defaultCustomStyle }) => {
  return (
    <button onClick={handleClick} style={customStyle}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: P.string.isRequired,
  handleClick: P.func.isRequired,
  customStyle: P.object,
}
