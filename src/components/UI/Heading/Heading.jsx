import './Heading.css';

export const Heading = ({ children, secondClass }) => {
  return (
    <h2 className={`heading ${secondClass}`}>{children}</h2>
  );
};
