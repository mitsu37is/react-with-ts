import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

interface IPost {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

interface IState {
  posts: IPost[];
}

class App extends Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      posts: []
    };
  }

  public componentDidMount() {
    axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ posts: response.data });
      });
  }

  public render() {
    return (
      <div className="App">
        <ul className="posts">
          {this.state.posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
