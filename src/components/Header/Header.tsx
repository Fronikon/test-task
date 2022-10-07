import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header: React.FC = () => {
  const setActive = ({ isActive }: { isActive: boolean; isPending: boolean }) =>
  !isActive ? styles.link : `${styles.link} ${styles.active}`;

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <nav className={styles.links}>
              <NavLink className={setActive} to='/main/form' end>Форма для заявки</NavLink>
              <NavLink className={setActive} to='/main/table' end>Сводная таблица</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
