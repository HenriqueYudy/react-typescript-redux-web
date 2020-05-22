import React from 'react';
import ApplicationList from './components/AplicationList';
import { Provider } from 'react-redux';
import store from './store';

const App = () =>
<Provider store={store}>
<ApplicationList />
</Provider>

export default App;
