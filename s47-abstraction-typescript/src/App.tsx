import './App.css';
import Movie from './components/Movie';
import Animal from './classes/Animal';
import Lion from './classes/Lion';
import Elephant from './classes/Elephant';

function App() {
 // let animalObj1=new ((Animal();
 let wildLion =new Lion();
 wildLion.sleepingBehavior();
 let wildElephant=new Elephant();
 wildElephant.eatingHabits();
 
  return (
    <div className="App">
      <Movie></Movie>
    </div>
  );
}

export default App;
