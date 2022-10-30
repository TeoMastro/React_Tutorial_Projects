import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item} //like key={item.id} title={item.title} and so on ...
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
