import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import AdminPage from './pages/AdminPage'
import UsersPage from './pages/UsersPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  return (
    <div>App
      <AdminPage></AdminPage>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <SettingsPage></SettingsPage>
      <UsersPage></UsersPage>
    </div>
  )
}
