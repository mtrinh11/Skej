const {Event} = require('../models')


const CreateEvent = async (request, response) => {
    try {
        const body = request.body
        const event = await Event.create(body)
        console.log('EventController: CreateEvent hits. Event:', event)
        response.send(event)
    }catch(error){
        console.log('EventController: CreateEvent fails')
        throw error
    }
}

const GetOneEvent = async (request, response) => {
    try {
        const oneEvent = await Event.findByPk(request.params.post_id)
        response.send(oneEvent)
        console.log('EventController: GetOneEvent hits, event:', oneEvent)
    }catch(error){
        console.log('EventController: GetOneEvent fails')
        throw error
    }
}

const GetAllEvents = async (request, response) => {
    try {
        const allEvents = await Event.findAll()
        console.log('EventController: GetAllEvents hits')
    }catch(error){
        console.log('EventController: GetAllEvents fails')
        throw error
    }
}

const GetEventsByUser = async (request, response) => {
    try {
        const userId = request.params.user_id
        const userEvents = await Event.findAll({
            where: {user_id: userId}
        })
        console.log('EventController: GetEventsByUser hits')
        response.send(userEvents)
    }catch(error){
        console.log('EventController: GetEventsByUser fails')
        throw error
    }
}
const EditEvent = async (request, response) => {
    try {

        console.log('EventController: Event hits')
    }catch(error){
        console.log('EventController: Event fails')
        throw error
    }
}

const DeleteEvent = async (request, response) => {
    try {

        console.log('EventController: Event hits')
    }catch(error){
        console.log('EventController: Event fails')
        throw error
    }
}


module.exports = {
    CreateEvent,
    GetOneEvent,
    GetAllEvents,
    GetEventsByUser,
    EditEvent,
    DeleteEvent
}