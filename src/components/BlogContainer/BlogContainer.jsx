import React from 'react';

import Blog from '../Blog/Blog';

class BlogContainer extends React.Component {

  state = {
    blogPosts: [],
    modalIsOpen: false,
    post: {
      id: '',
      title: '', 
      body: '',
      userId: ''
    }
  }

  componentDidMount() {
    this.getBlogPosts();
  }

  render() {
    return (
      <div className="Blog">
        <div className="container">
          <div className="text-right">
            <button onClick={() => this.handleOpenModal({})} className="btn btn-success">Crear Post</button>          
          </div>
          <Blog 
            blogPosts={this.state.blogPosts} 
            deleteBlogPost={this.deleteBlogPost}
            onCloseModal={this.handleCloseModal} 
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            post={this.state.post}
            handleForm={this.handleForm}
            handleEditChange={this.handleEditChange}
          />
        </div>
      </div>
    );
  }

  handleEditChange = (event) => {
    this.setState({
      post: {
          ...this.state.post, 
          [event.target.name]: event.target.value
      }
    })
  }

  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false, 
      post: {
        id: '',
        title: '', 
        body: '',
        userId: ''
      }
    })
  }

  handleOpenModal = (post) => {
    this.setState({
      modalIsOpen: true,
      post: post
    })
  }

  getBlogPosts = async () => {
    this.setState({
      error: null
    });

    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          blogPosts: response
        })

        this.props.addGet();
      })
      .catch(error => window.alert("Ha ocurrido un error. Vuelva a intentarlo nuevamente."))
  }

  handleForm = (event) => {
    event.preventDefault();

    if (this.state.post.id) {
      // se esta editando un post
      this.editPost(this.state.post);
    } else {
      // se esta creando un post
      this.createPost(this.state.post);
    }
  }

  createPost = (post) => {
    
      // crearemos el post con el usuario 999 posque no 
      // somos usuarios registrados logueados en el sistema
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: post.title,
          body: post.body,
          userId: 99
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        window.alert("Se ha creado satisfactoriamente el post.")

        this.props.addPost();
      })
      .catch(error => window.alert("Ha ocurrido un error. Vuelva a intentarlo nuevamente."))

  }

  editPost = (post) => {
    if (!post.title || !post.body) {
      window.alert('Los datos del formulario no pueden estar vacios!')
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: this.state.post.id,
          title: this.state.post.title,
          body: this.state.post.body,
          userId: this.state.post.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => {
        window.alert("Se ha actualizado satisfactoriamente el post.")

        this.props.addPut();
      })
      .catch(error => window.alert("Ha ocurrido un error. Vuelva a intentarlo nuevamente."))
    }
  }

  deleteBlogPost = (id) => {
    const response = window.confirm("¿Estas seguro que deseas eliminar este Post?");
    if (response) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      })
      .then(response => { 
        alert('El post ha sido eliminado satisfactoriamente.')

        this.props.addDelete();
      })
      .catch(error => alert('Ha ocurrido un error al momento de eliminar un post. Vuelva a intentarlo nuevamente.'))
    }
  }

}

export default BlogContainer;
