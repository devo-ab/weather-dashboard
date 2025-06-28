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
  );
}

export default App;
