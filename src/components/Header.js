import styles from "./Header.module.css";


const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Paragon</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
