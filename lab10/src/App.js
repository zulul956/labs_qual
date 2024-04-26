import './App.css';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';

function App() {
  return (
    <div className="App">
       <div class="main">
        <div class="container">
            <h2 class="main_title">Что Вам необходимо?</h2>
            <div class="main_block">
              <Block1/>
              <Block2/>
              <Block3/>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
