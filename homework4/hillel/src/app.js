import { Component } from "react";
import { fetchPopularRepos } from "./api/fetchPopularRepos";
import RepoGrid from "./RepoGrid";
import SelectedLanguage from "./SelectedLanguage";

class App extends Component {
  state = {
    selectedLanguage: "All",
    repos: null,
    work: "auto",
  };

  componentDidMount() {
    fetchPopularRepos(this.state.selectedLanguage).then((data) =>
      this.setState({ repos: data })
    );
  }

  selectLanguage = (event) => {
    this.setState({ repos: null });
    fetchPopularRepos(event.target.innerText).then((data) =>
      this.setState({ repos: data })
    );
    if (event.target.innerText !== this.state.selectedLanguage) {
      this.setState({ selectedLanguage: event.target.innerText });
    }
  };

  render() {
    return (
      <>
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          selectLanguage={this.selectLanguage}
          repos={this.state.repos}
        />
        {this.state.repos ? (
          <RepoGrid repos={this.state.repos} />
        ) : (
          <p style={{ textAlign: "center" }}>Loading ...</p>
        )}
      </>
    );
  }
}

export default App;
