import axios from "axios";


export 	async function saveUser(data){
    let res = await axios.post('http://localhost:3000/api/v1/user/register', data)
    return res.data
}