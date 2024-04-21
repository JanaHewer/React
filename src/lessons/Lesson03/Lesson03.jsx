import "./styles.css";
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, normalizeName } from "./data";
import AvatarCat from "../../assets/3d-katzen-avatar-fuer-online-spiele-oder-web-account-avatar_147351-47.avif"

function Lesson03() {
  const isPrymary = false;

  return (
    <div className="button-container">
      <AnimalCard
        animalData={lionData}
        animalName={normalizeName(lionData.name)}
      >
        <p>Main Character</p>
      </AnimalCard>
      <AnimalCard
        animalData={zebraData}
        animalName={normalizeName(zebraData.name)}
      >
        <p>Main Character</p>
      </AnimalCard>
      <img src={AvatarCat}/>
      {/* <Button isPrimaryButton />
      <Button buttonName="Send data" isPrimaryButton={isPrymary} /> */}
    </div>
  );
}

export default Lesson03;
