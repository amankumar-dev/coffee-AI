import './App.css';
import Aside from './components/Aside/Aside.js';
import Main from './components/Main/Main.js';
import store from './redux/Store/store.js';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <>
      <Aside />
      <Main />
    </>
    </Provider>
  );
}

export default App;
