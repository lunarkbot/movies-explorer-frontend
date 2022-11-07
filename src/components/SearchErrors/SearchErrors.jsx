import styles from './SearchErrors.module.css';

export const SearchErrors = ({ children }) => {
  return (
    <div className={styles.error}>{ children }</div>
  );
};
