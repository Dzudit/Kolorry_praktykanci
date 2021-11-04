import './App.css';

function App() {

  return (
    <form className="App" >
        <input type="radio" name="bedStatus"  defaultChecked  onChange={e => {alert(e.target.value)}}  value="allot"/>
        <input type="radio" name="bedStatus"onChange={e => {alert(e.target.value)}}  id="transfer" value="transfer" />
    </form>
  );
}

export default App;
