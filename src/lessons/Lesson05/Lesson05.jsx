import "./styles.css";
import {v4} from 'uuid';
// import { lionData, zebraData, hippoData, giraffeData } from "./data";
import { animalsData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function Lesson05() {
  const animalCards = animalsData.map((animalData) => {
    return <AnimalCard animalData={animalData} />;
  });
  return (
    <div className="lesson05-container">
      {/* <AnimalCard animalData={animalData[0]} />
      <AnimalCard animalData={animalData[1]} />
      <AnimalCard animalData={animalData[2]} />
      <AnimalCard animalData={animalData[3]} /> */}
      {animalCards}
    </div>
  );
}

export default Lesson05;
