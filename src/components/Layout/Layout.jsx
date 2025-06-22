import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

// ✅ Правильный экспорт (default)
export default function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}