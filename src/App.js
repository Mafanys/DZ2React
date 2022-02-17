import './App.css';
import Distruct from './components/Distrucrurization/distruct';
import Example1 from './components/Example1/example1';
import Example2 from './components/Example2/example2';
import User from './components/Users/user';

const user = {
  name: "Sasha",
  age: 20,
  sity: "Kyiv"
}
const {name,age,sity} = user;


function App() {
  return (
    <div className="App">
      <Example1 />
      <Example2>
        <h1>World</h1>
      </Example2>  
      <Example2 name="Sasha"/> 
      <User name = {user.name} age = {user.age} sity = {user.sity}/>
      <Example1 />
      <Example2>
        <h1>World</h1>
      </Example2>  
      <Example2 name="Sasha"/> 
      <User name = {"Igor"} age = {18} sity = {"Lviv"}/>
      <Distruct name = {name} age = {age}/>
    </div>
  );
}

export default App;
