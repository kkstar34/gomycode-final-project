

import Nav from './components/Nav';
import Basket from './components/Basket';
import Header from './components/Header';

import { useEffect} from 'react';
import Article from './components/Article';
import Connexion from './components/Modals/Connexion';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import loadArticles from './redux/actions/loadArticles';
import { Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/ArticleDetails';
import ArticleListing from './components/ArticleListing';

function App() {
  // const [articles, setArticles] = useState([
  //   {},{},{},{},{},{},{},{}
  // ])

  
  
  return (
    <div className="App">

      <Routes>
        <Route path="/article/:id"  element={<ArticleDetails/>}  />
        <Route exact path="/"  element={<ArticleListing/>}  />        
        </Routes>
        
        


      
    </div>
  );
}

export default App;
