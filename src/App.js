import React from 'react';

import Sidebar from "./components/SideBar";
import { Outlet } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <Provider store={store}>
        <Sidebar/>
        <div className='ml-48'>
        <Outlet/>
        </div>
    </Provider>
    
  )
}



export default App