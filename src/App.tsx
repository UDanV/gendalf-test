import { Route, Routes } from 'react-router-dom';
import {StartPage} from "./pages/startPage.tsx";
import './sass/app.scss'

export const App = () => {

  return (
    <Routes>
        <Route path="/" element={<StartPage />} />
    </Routes>
  )
}