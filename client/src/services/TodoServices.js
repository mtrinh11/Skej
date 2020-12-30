import ApiClient from "./ApiServices";

export const __CreateTodo = async (data) => {
    try {
        const res = await ApiClient.post('/todo/create', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetSingleTodo = async (todoId) => {
    try {
        const res = await ApiClient.get(`/todo/${todoId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __GetTodosByAccount = async (userId) => {
    try {
        const res = await ApiClient.get(`/todo/all/todos/${userId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __EditTodo = async (todoId) => {
    try {
        const res = await ApiClient.put(`/todo/edit/${todoId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const __DeleteTodo = async (todoId) => {
    try {
        const res = await ApiClient.delete(`/todo/delete/${todoId}`)
        return res.data
    } catch (error) {
        throw error
    }
}
