// Задание
// В компоненте Button:

// Нужно простилизовать компонент Button в соотвтесвии с дизайном
// Компонент Button должен принимать в качестве props:
// name - эта пропса должна отображаться в кнопке как имя
// type - имеется ввиду атрибут type
// Создайте папку Input в папке components, в папке Input создайте
// компонент Input:

// 1. Нужно простилизовать компонент Input в соотвтесвии с дизайном
// 2. Компонент Input должен принимать в качестве props:
//  name - имеется ввиду атрибут name
//  type - имеется ввиду атрибут type
//  placeholder - атрибут placeholder
//  label - атрибут label

// Создайте папку LoginForm в папке components, в папке LoginForm
// создайте компонент LoginForm:

//1. Нужно простилизовать компонент LoginForm в соотвтесвии с дизайном
// 2. Импортируйте себе в этот компонент уже заготовленные компоненты
// Input и Button и переиспользуйте их
// 3. Компонент LoginForm не должен принимать в качестве props ничего

// В папке homeworks, cоздайте папку Homework03, в ней создайте компонент
// Homework03. Импортируйте в него LoginForm компонент и расположите его
// посередине страницы

import "./styles.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function Homework03() {
  return (
    <div className="homework03-container">
      <LoginForm />
    </div>
  );
}

export default Homework03;
