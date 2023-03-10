
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Offers from './components/Offers';
import Plans from './components/Plans';
import Rooms from './components/Rooms';
import Slides from './components/Slides';

function App() {
  return (
    <div>
      <Banner />
      <Offers />
      <Plans />
      <Rooms />
      <Slides />
      <Footer />
    </div>
  );
}

export default App;
