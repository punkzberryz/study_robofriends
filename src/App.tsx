import { Component, ChangeEvent } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { robots } from "./robots";

interface State {
  robots: { id: number; name: string; email: string }[];
  searchField: string;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  onSearchChange = (event: ChangeEvent) => {
    this.setState({ searchField: (event.target as HTMLInputElement).value })

  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLocaleLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
