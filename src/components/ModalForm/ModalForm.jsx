import React from 'react';
import Modal from '../Modal/Modal';

import './ModalForm.css';

function ModalForm(props) {

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <h4 className="text-center">
        {props.post.id ? 'Editar post' : 'Crear post'}
      </h4>

      <form>
        <div className="form-group">
          <label>Titulo del Post</label>
          <input
            type="text" 
            className="form-control"
            name="title"
            value={props.post.title}
            onChange={(e) => props.handleEditChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripcion del Post</label>
          <textarea 
            className="form-control"
            rows="3"
            name="body"
            value={props.post.body}
            onChange={(e) => props.handleEditChange(e)}
            required
          />
        </div>

        <button className="btn btn-primary" onClick={(e) => props.handleForm(e)}>Enviar</button>
      </form>
    </Modal>
  )
}

export default ModalForm;
