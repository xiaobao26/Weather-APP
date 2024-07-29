import './App.css';
import { Background } from './components/Background/Background';
import { WeatherCard } from './components/components/WeatherCard/WeatherCard';
import { CurCity } from './components/components/components/CurCity/CurCity';
import { ForeCast } from './components/components/components/ForeCast/ForeCast';

function App() {
  return (
    <Background>
      <WeatherCard>
        <CurCity />
        <ForeCast />
      </WeatherCard>
    </Background>
  );
}

export default App;
