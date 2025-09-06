import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import {Provider} from 'react-redux'
import { store } from "./srveices/store";
const root = document.getElementById('root')
const rootelement = ReactDOM.createRoot(root)
rootelement.render(
    <Provider store={store}>
    <App/>
    </Provider>
)