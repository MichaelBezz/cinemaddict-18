import Profile from '../profile/profile';


function Header(): JSX.Element {
  return (
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>

      <Profile/>
    </header>
  );
}

export default Header;
