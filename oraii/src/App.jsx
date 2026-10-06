import "./App.css";
import ColorBox from "./components/ColorBox.jsx";
import Counter from "./components/Counter.jsx";
import Greeting from "./components/Greeting.jsx";
import LikeButton from "./components/LikeButton.jsx";
import LimitedCounter from "./components/LimitedCounter.jsx";
import SearchableList from "./components/SearchableList.jsx";
import TextMirror from "./components/TextMirror.jsx";
import TodoList from "./components/TodoList.jsx";
import ToggleMessage from "./components/ToggleMessage.jsx";
import UserProfile from "./components/UserProfile.jsx";

function DemoCard({ number, title, concepts, children, className = "" }) {
  return (
    <article className={`demo-card ${className}`}>
      <header className="demo-card-header">
        <span className="demo-number">{number}</span>
        <div>
          <h2>{title}</h2>
          <p className="concepts">{concepts}</p>
        </div>
      </header>
      <div className="demo-content">{children}</div>
    </article>
  );
}

function App() {
  const favoriteFoods = ["Gulyásleves", "Túrós csusza", "Lángos", "Almás pite"];

  return (
    <main className="app-shell">
      <section className="demo-grid" aria-label="React gyakorlófeladatok">
        <DemoCard
          number="01"
          title="Üdvözlő komponens"
          concepts="props · destrukturalizálás"
        >
          <div className="greeting-list">
            <Greeting name="Anna" age={22} color="red" />
            <Greeting name="Péter" age={25} color="blue" />
            <Greeting name="Lili" age={19} color="green" />
          </div>
        </DemoCard>

        <DemoCard
          number="02"
          title="Egyszerű számláló"
          concepts="useState · setCount"
        >
          <Counter />
        </DemoCard>

        <DemoCard
          number="03"
          title="Váltóüzenet"
          concepts="boolean · feltételes renderelés"
        >
          <ToggleMessage />
        </DemoCard>

        <DemoCard
          number="04"
          title="Felhasználói adatlap"
          concepts="több prop · feltételes szöveg"
        >
          <UserProfile name="Dóra Kovács" age={28} isOnline />
        </DemoCard>

        <DemoCard
          number="05"
          title="Korlátos számláló"
          concepts="useState · minimum / maximum"
        >
          <LimitedCounter />
        </DemoCard>

        <DemoCard
          number="06"
          title="Szövegtükör"
          concepts="onChange · vezérelt input"
        >
          <TextMirror />
        </DemoCard>

        <DemoCard
          number="07"
          title="Kedvenc ételek"
          concepts="props · map · key"
        >
          <TodoList items={favoriteFoods} />
        </DemoCard>

        <DemoCard
          number="08"
          title="Színváltó doboz"
          concepts="useState · dinamikus stílus"
        >
          <ColorBox />
        </DemoCard>

        <DemoCard
          number="09"
          title="Gyümölcskereső"
          concepts="filter · toLowerCase · includes"
        >
          <SearchableList />
        </DemoCard>

        <DemoCard
          number="10"
          title="Kedvelés"
          concepts="useState · toggle · UI visszajelzés"
          className="demo-card-wide"
        >
          <LikeButton />
        </DemoCard>
      </section>

      <footer className="footer">
        <span>REACT MŰHELY</span>
        <span>Gyakorlat teszi a komponenst.</span>
      </footer>
    </main>
  );
}

export default App;
