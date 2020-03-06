import React from 'react';

import ModalForm from '../ModalForm/ModalForm';

import './Blog.css';

function Blog(props) {

  return (
    <>
      <div className="Blog row">
        { props.blogPosts.map((blog) => (
          <div className="col-sm-6 col-12" key={blog.id}>
            <div className="card">
              <h5 className="card-header"><strong>{blog.title}</strong></h5>
              <div className="card-body">
                <p className="card-text">{blog.body}</p>
              </div>
              <div className="flex-container">
                <button onClick={() => props.onOpenModal(blog)} type="button" className="btn btn-primary">
                  Editar
                </button>
                <button 
                  onClick={()=>{ props.deleteBlogPost(blog.id)}}
                  type="button"
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )) }
      </div>

      <ModalForm
        isOpen={props.modalIsOpen} 
        onClose={props.onCloseModal}
        post={props.post}
        handleForm={props.handleForm}
        handleEditChange={props.handleEditChange}
      />
    </>
  );

}

export default Blog;
