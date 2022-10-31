import './profile.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';

export const ProfilePage = () => {
  return (
    <div className="profile">
      <Header />
      <main className="profile__content">
        Profile
      </main>
      <Footer />
    </div>
  );
}
