import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-gray-900 to-gray-700 grid place-items-center">
      <div className="w-full">
        <Header></Header>
        <main>
          <section>
            <WeatherBoard></WeatherBoard>
          </section>
        </main>
      </div>
    </div>
    11c1d059d0bc11c8c02d4d2c646c5d87
    https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  );
}

export default App;
