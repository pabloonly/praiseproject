
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbars';
import Home from './Components/Home';
import Card from './Components/Card';
import Render from './Components/Render';
import Next from './Components/Next';
import Article from './Components/Article';
import Review from './Components/Review';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbars/>
      <Home/> 
      <div className='container'>
      <Render/>
      <Card/> 
      <Next/>
      <Article/>
      <Review/>
      </div>
      <Footer/> 
    </div>
  );
}

export default App;
