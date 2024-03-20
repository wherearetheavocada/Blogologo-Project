import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter } from 'react-router-dom';

// const [theme, setTheme] = useState<THEME>('light');

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    {/* <ThemeContext.Provider value={useMemo(() => ({ theme, setTheme }), [theme, setTheme])}> */}
    <App />
    {/* </ThemeContext.Provider> */}
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
