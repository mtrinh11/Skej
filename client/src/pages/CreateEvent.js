import {connect} from 'react-redux'
import { Link } from "react-router-dom"
import {Button, Textfield} from "react-md"
import {} from '../store/actions/EventActions'


const mapStateToProps = ({eventState}) => {
    return{
        eventState
    }
};

const mapActionToProps = (dispatch) => {
//not sure about using this because we have it in the calendar App
    return {
        createEvent: (formData) => dispatch(createEvent(formData)),
        getEvent: (eventId) => dispatch(getEvent(eventId)),
        getEventsByUser: (userId) => dispatch(getEventsByUser(userId)),
        getFriendEvents: (friendId) => dispatch(getFriendEvents(friendId)),
        getAllEvents: () => dispatch(getAllEvents()),
        editEvent: (formData, eventId) => dispatch(editEvent(formData, eventId)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
    }
}

const CreateEvent = (props) => {
    const handleTitleChange = ({target}) => {
        props.changeTitleInput(target.value)
    }
 
    const handleDescriptionChange = ({target}) => {
        props.changeDescriptionInput(target.value)
    }
 
    const  handleStartChange = ({target}) => {
        props.changeStartInput(target.value)
    }
 
    const  handle____Change = ({target}) => {
        props.change____Input(target.value)
    }
 
    const  handle____Change = ({target}) => {
        props.change____Input(target.value)
    }
 

}
