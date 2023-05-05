import { Component, ChangeEvent } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";


interface State {
  robots: { id: number; name: string; email: string }[];
  searchField: string;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event: ChangeEvent) => {
    this.setState({ searchField: (event.target as HTMLInputElement).value })

  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1>
      :
      (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );

  }
}

export default App;
