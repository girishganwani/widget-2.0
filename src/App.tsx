import './App.css'
import FullWidget from './components/FullWidget';
import useCurrentArticle from './hooks/useCurrentArticle.ts';


const App = () => {

  useCurrentArticle()

  return (
  <div className="font-Raleway">
    <FullWidget />
  </div>
  )
}

export default App;
