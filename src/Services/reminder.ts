import axios from "axios"
import Reminder from "../interfaces/interface"

class ReminderService {
    url = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    async getReminders(){
        const response = await this.url.get<Reminder[]>("/todos")
        return response.data
    }
    
    async addReminder(title:string){
        const response = await this.url.post<Reminder>("/todos", {title})
        return response.data
    }

    async removeReminder(id: number){
        const response = await this.url.delete("/todos/" + id)
        return response.data
    }
}

export default new ReminderService()