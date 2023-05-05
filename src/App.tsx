import { Component } from "react";
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
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
