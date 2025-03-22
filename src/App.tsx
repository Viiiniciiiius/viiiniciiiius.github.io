import MainPage from './page/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

const Router: React.FC = () => { 
  return(
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
