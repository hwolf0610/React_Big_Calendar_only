import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/calendar/style.css';
import { BrowserRouter } from 'react-router-dom';
import {  Modal} from '@material-ui/core';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React',
      show: false,

    };

  }

  modal = () => {

    this.setState({ name: "e.target.value" })
  }

  handleClose = () => {
    this.setState({ show: false })
  }
  handleOpen = () => {
    this.setState({ show: true })
  }

  render() {
    return (
      <div className="container">
        <h1>Home!!!</h1>
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" onClick={this.modal}>Open Modal</button>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header" style={{ padding: "35px 50px" }}>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4><span className="glyphicon glyphicon-lock"></span> Login</h4>
              </div>
              <div className="modal-body" style={{ padding: "40px 50px" }}>
                {this.state.name}
              </div>
              <div className="modal-footer">
                asdfasdfasf
        </div>
            </div>

          </div>
        </div>


        <button type="button" onClick={this.handleOpen}>
          Open Modal
      </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.show}
          onClose={this.handleClose}
        >
          <div style={{ position: 'absolute', width: 400,top:'35%',left:'35%', backgroundColor: 'white', border: '2px solid #000', boxShadow: 5, padding: 4 }}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          </div>
        </Modal>




      </div>
    )
  }
}
export default App
