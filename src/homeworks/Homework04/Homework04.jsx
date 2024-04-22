// Задание
// Напоминание: cоздайте новую ветку, в которой будет ваша домашняя работа(ответвитеcь от main)

// Требования Создайте компонент Feedback в папке components, в самом компоненте будут находиться:

// кнопка “Like” и справа от неё количество лайков
// кнопка “Dislike" и справа от неё количество дизлайков
// Кнопка “Reset Results”, при клике на которую, лайки и дизлайки обнуляются
// Для кнопок используйте компонент Button
// Стили на ваше усмотрение
// Подсказка: в компоненте Feedback нужно использовать два стейта (так можно)
import "./styles.css";
import Feedback from "../../components/Feedback/Feedback";

function Homework04() {
  return (
    <div className="homework04-container">
      <Feedback/>
    </div>
  );
}

export default Homework04