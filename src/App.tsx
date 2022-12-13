import img01 from './assets/imgs/safaris/img-02.jpg';
import Navigation from './components/shared/Navigation';

function App() {
  return (
    <div className="bg-gray-50 h-screen p-0 m-0  font-euclid">
      <Navigation />
      <div
        className="bg-cover bg-no-repeat h-2/3"
        style={{ backgroundImage: 'url(' + img01 + ')' }}
      ></div>
    </div>
  );
}

export default App;
