import React from 'react';

import CounterLS from '../CounterLS/CounterLS';
import BlogContainer from '../BlogContainer/BlogContainer';

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
      counter: {
        get: 0,
        post: 0,
        put: 0,
        delete: 0
      }
    }
  }

    addGet = () => {
      this.setState({
        counter: {
          ...this.state.counter,
          get: this.state.counter.get + 1
        }
      })
    }

    addPost = () => {
      this.setState({
        counter: {
          ...this.state.counter,
          post: this.state.counter.post + 1
        }
      })
    }

    addPut = () => {
      this.setState({
        counter: {
          ...this.state.counter,
          put: this.state.counter.put + 1
        }
      })
    }

    addDelete = () => {
      this.setState({
        counter: {
          ...this.state.counter,
          delete: this.state.counter.delete + 1
        }
      })
    }

    handleCloseModal = () => {
      this.setState({
        modalIsOpen: false
      })
    }
    
    handleOpenModal = () => {
      this.setState({
        modalIsOpen: true
      })
    }
    
    render() {
      return (
        <div className="Home">
          <CounterLS 
            get={this.state.counter.get}
            post={this.state.counter.post}
            put={this.state.counter.put}
            delete={this.state.counter.delete}
          />
          <h1 className="text-center mb-4">Blog Posts</h1>
          <BlogContainer 
            addGet={this.addGet}
            addPost={this.addPost}
            addPut={this.addPut}
            addDelete={this.addDelete}
          />
        </div>
      );
    }
    
}

export default Home;
