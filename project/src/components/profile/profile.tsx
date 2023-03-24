function Profile(): JSX.Element {
  return (
    <section className="header__profile profile">
      <p className="profile__rating">Movie Buff</p>
      <img className="profile__avatar" src="./images/bitmap@2x.png" width="35" height="35" alt="Avatar" />
    </section>
  );
}

export default Profile;
