import "./App.css";

// @import from db:
import data from "./db/data.json";
import friends from "./db/friends.json";

// @import components:
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendsList";
function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Statistics stats={data} />
    </>
  );
}

export default App;
