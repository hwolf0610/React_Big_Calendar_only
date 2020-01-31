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
import christImg1 from '../../assets/img/christmas1.png'
import christImg2 from '../../assets/img/christmas2.png'
import christImg3 from '../../assets/img/christmas3.png'
import christImg4 from '../../assets/img/christmas4.png'

const localizer = momentLocalizer(moment);

class calendar extends React.Component {

  constructor(props) {
    super(props);
    const now = new Date();
    const events = [
      {
        id: 0,
        title: 'Staples Center',
        allDay: true,
        start: new Date(new Date().setDate(new Date().getDate()+2)),
        end: new Date(new Date().setDate(new Date().getDate()+3)),
        start2: new Date().setDate(new Date().getDate()+2),
        end2: new Date().setDate(new Date().getDate()+3),
        label: "Test event 3",
        price: "¥2,800 +1D",
        img: christImg,
      },
      {
        id: 1,
        title: 'Caesar Palace',
        allDay: true,
        start: new Date(new Date().setDate(new Date().getDate()+7)),
        end: new Date(new Date().setDate(new Date().getDate()+10)),
        start2: new Date().setDate(new Date().getDate()+7),
        end2: new Date().setDate(new Date().getDate()+10),
        label: "event1",
        price: "¥2,800 +1D",
        img: christImg1,
      },
      {
        id: 2,
        title: 'Komagome x-x-x',
        allDay: true,
        start: new Date(new Date().setDate(new Date().getDate()+12)),
        end: new Date(new Date().setDate(new Date().getDate()+15)),
        start2: new Date().setDate(new Date().getDate()+12),
        end2: new Date().setDate(new Date().getDate()+15),
        label: "Cthulhu 2eme scenario",
        price: "¥2,800 +1D",
        img: christImg2,
      },
      {
        id: 3,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        start2: new Date().setHours(new Date().getHours() - 3),
        end2: new Date().setHours(new Date().getHours() + 3),
        label: "Test event 4",
        price: "¥2,800 +1D",
        img: christImg3,
      },
      {
        id: 4,
        title: 'Point in Time Event',
        start: new Date(new Date().setHours(new Date().getHours())),
        end: new Date(new Date().setHours(new Date().getHours())),
        start2: new Date().setHours(new Date().getHours()),
        end2: new Date().setHours(new Date().getHours()),
        label: "Test event 5",
        price: "¥2,800 +1D",
        img: christImg4,
      },
    ]

    this.state = {
      width: '100%',
      name: 'React',
      show: false,
      title: "123",
      start: new Date().setDate(new Date().getDate()+2),
      end: new Date().setDate(new Date().getDate()+2),
      label: "098",
      price: "234",
      img: christImg,
      events
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
    console.log("my event:", data.title)
    console.log("my start:", new Date().toLocaleString(data.start2))
    console.log("my end:", new Date().toLocaleString(data.end2))
    console.log("my label:", data.label)
    console.log("my price:", data.price)
    console.log("my image:", data.img)

    this.setState({ title: data.title })
    this.setState({ start: new Date().toLocaleString(data.start2) })
    this.setState({ end: new Date().toLocaleString(data.end2) })
    this.setState({ label: data.label })
    this.setState({ price: data.price })
    this.setState({ img: data.img })

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
        <div style={{ height: '500pt',border: '2px solid', padding: '10px' ,box_shadow: '5px 10px #888888' }} >
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
        <br/><br/>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.show}
          onClose={this.handleClose}
        >
          <div style={{ position: 'absolute',  top: '20%', left: '35%', backgroundColor: 'white', border: '2px solid #000', boxShadow: 5, padding: 4 }}>
            <h2 id="simple-modal-title">{this.state.title}.</h2>
            <img src={this.state.img} />
            <p>{this.state.start}</p>
            <p>{this.state.end}</p>
            <p>{this.state.label}</p>
            <p>{this.state.price}</p>
          </div>
        </Modal>

      </div>


    )
  }
}
export default calendar