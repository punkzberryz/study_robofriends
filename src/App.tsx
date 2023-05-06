import { ChangeEvent, useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";


interface State {
  robots: { id: number; name: string; email: string }[];
  searchField: string;
}



function App() {
  const [robots, setRobots] = useState<State['robots']>([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event: ChangeEvent) => {
    setSearchField((event.target as HTMLInputElement).value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLocaleLowerCase().includes(searchField.toLowerCase());
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users))
  });


  return !robots.length ?
    <h1>Loading</h1>
    :
    (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );

}



export default App;
