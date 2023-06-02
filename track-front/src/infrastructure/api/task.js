import axios from "axios";
let tokenStorage = `Bearer ${localStorage.getItem("token")}`;

export async function addNewTask(data){
    try {
        const res  = await axios.post("http://localhost:4000/api/v1/track_time/add", data, {
            headers: {
                "x-access-token": tokenStorage,
            },
        });
        return res.data
    } catch (error) {
        return error
    }
}

export async function getTaskById(track_id){
    try {
        const res  = await axios.get(`http://localhost:4000/api/v1/track_time/data/${track_id}`, {
            headers: {
                "x-access-token": tokenStorage,
            },
        });
        return res.data        
    } catch (error) {
        return error
    }
}
export async function updateTaskById(track_id) {
    try {
        const res = await axios.put(`http://localhost:4000/api/v1/track_time/update/${track_id}`, {
            headers: {
                "x-access-token": tokenStorage,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}

export async function deleteTaskById(track_id) {
    try {
        
        const res = await axios.delete(`http://localhost:4000/api/v1/track_time/delete/${track_id}`, {
            headers: {
                "x-access-token": tokenStorage,
            },
        })
        return res.data
    } catch (error) {
        return error
    }
}