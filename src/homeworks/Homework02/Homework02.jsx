// Задание
// Создайте локально новую ветку от вашей главной (например от главной ветки main создать ветку homework02)

// Создайте компонент "ProfileCard" в папке "components". В нем нужно создать карточку с информацией о 
// вымышленном пользователе со следующими данными:

// аватар(можно не ваш, а просто какую-нибудь картинку как ссылку)
// имя и фамилия
// род деятельности
// хобби
// Верстка и стили на ваше усмотрение. Писать нужно на React, используя 
// нами изученный на ликции синтаксис jsx. Затем нужно импортировать компонет 
// ProfileCard в компонент Homework02, где переиспользовать его 3 раза. В App.jsx 
// отобразить компонент Homework02.

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import"./styles.css";
function Homework02(){
return (<div className="profile-cards-container">
<ProfileCard/>
<ProfileCard/>
<ProfileCard/>
</div>);
}
export default Homework02