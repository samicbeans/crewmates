// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import CrewmateDetail from './routes/CrewmateDetail.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './routes/Layout.jsx';
import NotFound from './routes/NotFound.jsx';
import EditMember from './routes/EditMember'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route index={false} path="/crewmate/:id" element={<CrewmateDetail />} />
      <Route path="/crewmate/edit/:id" element={<EditMember />} />
      <Route path="*" element={ <NotFound /> }/>
    </Route>
  </Routes>
</BrowserRouter>
)