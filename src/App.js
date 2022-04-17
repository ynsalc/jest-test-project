import "./App.css";
import Todo from './components/Todo/index';
import Videos from './components/Videos/Index';
import 'antd/dist/antd.css';

const videos = ['Udemy', 'Youtube', 'Tutorial'];
function App() {
  return (
    <div className="App">
      Jest - React testing library
      <br />
      <Todo />
      <br />
      <Videos videos={videos} />
    </div>
  );
}

export default App;
