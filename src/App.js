
import { Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/ArticleDetails';
import ArticleListing from './components/ArticleListing';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
 

  
  
  return (
    <div className="App">

      <Routes>
        <Route path="/article/:id"  element={<ArticleDetails/>}  />
        <Route exact path="/category/products/:slug"  element={<ArticleListing/>}  />  
        <Route exact path="/"  element={<Home/>}  />     
        <Route exact path="*"  element={<NotFound/>}  />      
      </Routes>
        
        


      
    </div>
  );
}

export default App;
