import React from "react";
import { connect } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  createEvent,
  getAllEvents,
  getEvent,
  getEventsByUser,
  getFriendEvents,
  editEvent,
  deleteEvent,
} from "../store/actions/EventActions";
import {
  addFriend,
  getAllFriends,
  getFriend,
  removeFriend,
} from "../store/actions/FriendsAction";
import { createRequest, deleteRequest } from "../store/actions/RequestActions";
import {
  createTodo,
  getTodo,
  getTodoByAcc,
  editTodo,
  deleteTodo,
} from "../store/actions/TodoActions";

const mapStateToProps = (state) => {
  return {
    eventState: state.eventState,
    friendState: state.friendState,
    requestState: state.requestState,
    todoState: state.todoState,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    createEvent: (formData) => dispatch(createEvent(formData)),
    getAllEvents: () => dispatch(getAllEvents()),
    getEvent: (eventId) => dispatch(getEvent(eventId)),
    getEventsByUser: (userId) => dispatch(getEventsByUser(userId)),
    getFriendEvents: (friendId) => dispatch(getFriendEvents(friendId)),
    editEvent: (formData, eventId) => dispatch(editEvent(formData, eventId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),

    addFriend: (userId, friendId) => dispatch(addFriend(userId, friendId)),
    getAllFriends: (id) => dispatch(getAllFriends(id)),
    getFriend: (id) => dispatch(getFriend(id)),
    removeFriend: (userId, friendId) =>
    dispatch(removeFriend(userId, friendId)),

    createRequest: (userId, requestedId) =>
    dispatch(createRequest(userId, requestedId)),
    deleteRequest: (userId, requestedId) =>
    dispatch(deleteRequest(userId, requestedId)),

    createTodo: (data) => dispatch(createTodo(data)),
    getTodo: (todoId) => dispatch(getTodo(todoId)),
    getTodoByAcc: (userId) => dispatch(getTodoByAcc(userId)),
    editTodo: (todoId) => dispatch(editTodo(todoId)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
  };
};

const Calendar = () => {
  const handleDateClick = (e) => {
    alert(e.dateStr);
  };

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        editable="True"
        droppable="True"
        selectable="True"
        slotEventOverlap="True"
        nowIndicator="True"
        dateClick={handleDateClick}
        events={[{ title: 'event 1', date: '2020-12-27', start:'2020-12-27T10:10:12' , end: '2020-12-27T11:10:00'},
        { title: 'event 1', date: '2020-12-27', start:'2020-12-27T10:10:12' , end: '2020-12-27T11:10:00'},
        { title: 'event 2', date: '2020-12-27' }]}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
