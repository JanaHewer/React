import "./styles.css";
function ProfileCard() {
  const userData = {
    avatar:
      "https://img.freepik.com/premium-photo/cat-suit-with-tie-that-says-cat_549702-3033.jpg",
    useName: "John McCathy",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };
  return (
    <div className="profile-card-wrapper">
      <img src={userData.avatar}/>
      <h2>{userData.useName}</h2>
      <p>Profession: {userData.profession}</p>
      <p>Hobby: {userData.hobbies[0]}</p>
    </div>
  );
}

export default ProfileCard;
