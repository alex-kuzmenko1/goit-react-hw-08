import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div className={css.container}>
      <AppBar />
      <main className={css.main}>
        {/* Здесь будут рендериться страницы */}
      </main>
    </div>
  );
}