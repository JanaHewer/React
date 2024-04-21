import "./styles.css";

function Button({ buttonName = "Get data", isPrimaryButton}) {
  // const buttonClass = isPrimaryButton
  //   ? "main-button primary-button"
  //   : "main-button secondary-button";
console.log(isPrimaryButton);
  const buttonClass = `main-button ${
    isPrimaryButton ? "primary-button" : "secondary-button"
  }`;

  return <button className={buttonClass}>{buttonName}</button>;
}

export default Button;
