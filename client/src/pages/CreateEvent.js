import {connect} from 'react-redux'
// import { Link } from "react-router-dom"
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
        changeTitleInput: (input) => dispatch(changeTitleInput(input)),
        changeDescriptionInput: (input) => dispatch(changeDescriptionInput(input)),
        changeStartDateInput: (input) => dispatch(changeStartDateInput(input)),
        changeEndDateInput: (input) => dispatch(changeEndDateInput(input)),
        changeStartTimeInput: (input) => dispatch(changeStartTimeInput(input)),
        changeEndTimeInput: (input) => dispatch(changeEndTimeInput(input)),
        changeImportanceInput: (input) => dispatch(changeImportanceInput(input)),
        changePrivacyInput: (input) => dispatch(changePrivacyInput(input)),
        createEvent: (formData) => dispatch(createEvent(formData))
    }
}

const CreateEvent = (props) => {
    const handleTitleChange = ({target}) => {
        props.changeTitleInput(target.value)
    }
 
    const handleDescriptionChange = ({target}) => {
        props.changeDescriptionInput(target.value)
    }
 
    const  handleStartDateChange = ({target}) => {
        props.changeStartInput(target.value)
    }
 
    const  handleEndDateChange = ({target}) => {
        props.changeEndDateInput(target.value)
    }
 
 
    const  handleStartTimeChange = ({target}) => {
        props.changeStartTimeInput(target.value)
    }
 
    const  handleEndTimeChange = ({target}) => {
        props.changeEndTimeInput(target.value)
    }

    const  handleImportanceChange = ({target}) => {
        props.changeImportanceInput(target.value)
    }
 
    const  handlePrivateChange = ({target}) => {
        props.changePrivateInput(target.value)
    } 

    //We may need to edit the EventReducer so that we have the input for each one
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            props.createEvent({
                title: props.eventState.inputTitle,
                description: props.eventState.inputDescription,
                startDate: props.eventState.inputStartDate,
                endDate: props.eventState.inputEndDate,
                startTime: props.eventState.inputStartTime,
                endTime: props.eventState.inputEndTime,
                importance: props.eventState.inputImportance,
                privacy: props.eventState.inputPrivacy
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
                    onChange={handleTitleChange}
                />
                <TextField
                    placeholder="DESCRIPTION"
                    title="DESCRIPTION"
                    type="text"
                    onChange={handleDescriptionChange}
                />
                <TextField
                    placeholder="START DATE"
                    title="START DATE"
                    type="date"
                    onChange={handleStartDateChange}
                />
                <TextField
                    placeholder="END DATE"
                    title="END DATE"
                    type="date"
                    onChange={handleEndDateChange}
                />
                <TextField
                    placeholder="START TIME"
                    title="START TIME"
                    type="time"
                    onChange={handleStartTimeChange}
                />
                <TextField
                //refactor this into a ternary with an option for whenever
                    placeholder="END TIME"
                    title="END TIME"
                    type="time"
                    onChange={handleEndTimeChange}
                />
                <TextField
                //refactor this into a dropdown
                    placeholder="IMPORTANCE"
                    title="IMPORTANCE"
                    type="text"
                    onChange={handleImportanceChange}
                />
                <TextField
                    placeholder="PRIVACY"
                    title="PRIVACY"
                    type="checkbox"
                    onChange={handlePrivateChange}
                />
                <Button type="submit" theme="primary" themeType="contained">Create Event</Button>
            </form>
        </section>
    )
}
export default connect(mapStateToProps, mapActionToProps)(CreateEvent)
