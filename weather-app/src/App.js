import './App.css';
import { Background } from './components/Background/Background';
import { WeatherCard } from './components/components/WeatherCard/WeatherCard';
import { CurCity } from './components/components/components/CurCity/CurCity';

function App() {
  return (
    <Background>
      <WeatherCard>
        <CurCity />
      </WeatherCard>
    </Background>
  );
}

export default App;
