import {Provider} from 'react-redux'
import react from 'react';
import Main from './Main';
import {store} from './redux/store'



export default function App() {
  return (
    <Provider store={store}>
      <Main />

    </Provider>
    
    
    
  );
}

