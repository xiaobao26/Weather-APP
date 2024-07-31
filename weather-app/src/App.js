import './App.css';
import { Background } from './components/Background/Background';
import { WeatherCard } from './components/components/WeatherCard/WeatherCard';
import { CurCity } from './components/components/components/CurCity/CurCity';
import { ForeCast } from './components/components/components/ForeCast/ForeCast';
import { SearchBar } from './components/components/components/SearchBar/SearchBar';
import { SearchHistory } from './components/components/components/SearchHistory/SearchHistory';

function App() {
  return (
    <Background>
      <WeatherCard>
        <CurCity />
        <ForeCast />
        <SearchBar />
        <SearchHistory />
      </WeatherCard>
    </Background>
  );
}

export default App;
