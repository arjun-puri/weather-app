import Search from './components/Search/Search'
import Card from './components/Card/Card';
import { useWeatherContext } from './state/WeatherAppContext';

const App = () => {
  const weather = useWeatherContext();

  function showCard() {
    return Object.keys(weather).length > 0;
  }

  return (
    <div className="flex justify-center items-center flex-col" >
      <Search />
      {showCard() ? <Card /> : null}
    </div>
  )
}

export default App;
