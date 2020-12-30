import {connect} from 'react-redux'
// import { Link } from "react-router-dom"
import {Button, TextField} from "react-md"
import {createEvent} from '../store/actions/EventActions'


const mapStateToProps = ({eventState}) => {
    return{
        eventState
    }
};

const mapActionToProps = (dispatch) => {
//not sure about using this because we have it in the calendar App
    return {
        createEvent: (formData) => dispatch(createEvent(formData))
    }
}

const CreateEvent = (props) => {

    const handleChange = ({target}) =>{
        props.createEvent(target.value)
    }

    //We may need to edit the EventReducer so that we have the input for each one
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            props.createEvent({
                title: props.eventState.newEvent.inputTitle,
                description: props.eventState.newEvent.inputDescription,
                startDate: props.eventState.newEvent.inputStartDate,
                endDate: props.eventState.newEvent.inputEndDate,
                startTime: props.eventState.newEvent.inputStartTime,
                endTime: props.eventState.newEvent.inputEndTime,
                importance: props.eventState.newEvent.inputImportance,
                privacy: props.eventState.newEvent.inputPrivacy
            })
            props.history.push('/calendar')
        }catch(error){
            throw error
        }
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h3>Create an Event</h3>
                <TextField
                    placeholder="TITLE"
                    title="TITLE"
                    type="text"
                    onChange={handleChange}
                />
                <TextField
                    placeholder="DESCRIPTION"
                    title="DESCRIPTION"
                    type="text"
                    onChange={handleChange}
                />
                <TextField
                    placeholder="START DATE"
                    title="START DATE"
                    type="date"
                    onChange={handleChange}
                />
                <TextField
                    placeholder="END DATE"
                    title="END DATE"
                    type="date"
                    onChange={handleChange}
                />
                <TextField
                    placeholder="START TIME"
                    title="START TIME"
                    type="time"
                    onChange={handleChange}
                />
                <TextField
                //refactor this into a ternary with an option for whenever
                    placeholder="END TIME"
                    title="END TIME"
                    type="time"
                    onChange={handleChange}
                />
                <TextField
                //refactor this into a dropdown
                    placeholder="IMPORTANCE"
                    title="IMPORTANCE"
                    type="text"
                    onChange={handleChange}
                />
                <TextField
                    placeholder="PRIVACY"
                    title="PRIVACY"
                    type="checkbox"
                    onChange={handleChange}
                />
                <Button type="submit" theme="primary" themeType="contained">Create Event</Button>
            </form>
        </section>
    )
}
export default connect(mapStateToProps, mapActionToProps)(CreateEvent)
