import './App.css'
import FullWidget from './components/FullWidget';
import useArticle from './hooks/useArticle.ts';


const App = () => {

  useArticle();

  return (
  <div className="font-Raleway">
    <FullWidget />
  </div>
  )
}

export default App;
