import React from 'react';
import { Link } from 'react-router-dom'
import { userInfo } from 'os';
import { Modal } from '@material-ui/core';

// import events from "./events";
// import BigCalendar from "react-big-calendar-like-google";
// import moment from "moment";
// import "react-big-calendar-like-google/lib/css/react-big-calendar.css";


// moment.locale("en");
// BigCalendar.momentLocalizer(moment);

// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);



// import { Calendar, momentLocalizer } from 'react-big-calendar'

// const localizer = momentLocalizer(moment)

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import christImg from '../../assets/img/christmas.png'
import realData from './realdata';

const localizer = momentLocalizer(moment);

class calendar extends React.Component {

  constructor(props) {
    super(props);
    const now = new Date();
    // const events = realData
    console.log("json:", realData)
    const modalDate = {}
    const modalDatearray = []

    realData.map(item => {
      modalDate['id'] = item.Planner_Schedule__;
      modalDate['title'] = item.Label;
      modalDate['start'] = item.Date.iso;
      modalDate['end'] = item.Date.iso;
      modalDate['description'] = item.Description;
      modalDate['allDay'] = true;

      modalDatearray.push(modalDate)
    })

    console.log("add_date:", modalDate)
    console.log("add_date_array:", modalDatearray)

    const events = [
      {
        id: 'plns-xrl5dl-u2bj-b2vk-acvv-44fezgjq',
        title: 'Staples Center',
        start: "2/1/2020, 9:28:41 PM",
        end: "2/1/2020, 9:28:41 PM",
        description: "Test event 3",

      }
    ]

    console.log("static_date:", events)


    this.state = {
      width: '100%',
      name: 'React',
      show: false,
      title: "123",
      start: "2/1/2020, 9:28:41 PM",
      end: "2/1/2020, 9:28:41 PM",
      description: "234",
      img: christImg,
      events: modalDatearray
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      /*this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });*/
      // alert("clicked:")
    });
  }

  myEventsList = (data) => {
    var thisv = 1580200467000
    console.log("my title:", data.title)
    console.log("my start:", data.start)
    console.log("my end:", data.end)
    console.log("my label:", data.description)

    this.setState({ title: data.title })
    this.setState({ start: data.start })
    this.setState({ end: data.start })
    this.setState({ description: data.description })

    this.modalshow()
  }
  modalshow = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <div style={{ height: '500pt', border: '2px solid', padding: '10px', box_shadow: '5px 10px #888888' }} >
          <Calendar
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={event => this.myEventsList(event)}
            defaultDate={moment().toDate()}
            localizer={localizer}
            data-toggle="modal"
            data-target="#myModal"
          />
        </div>
        <br /><br />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.show}
          onClose={this.handleClose}
        >
          <div style={{ position: 'absolute', top: '20%', left: '35%', backgroundColor: 'white', border: '2px solid #000', boxShadow: 5, padding: 4 }}>
            <h2 id="simple-modal-title">{this.state.title}.</h2>
            <p>{this.state.start}</p>
            <p>{this.state.description}</p>
          </div>
        </Modal>

      </div>


    )
  }
}
export default calendar