import './App.css';
import { Background } from './components/Background/Background';
import { WeatherCard } from './components/components/WeatherCard/WeatherCard'

function App() {
  return (
    <Background>
      <WeatherCard />
    </Background>
  );
}

export default App;
