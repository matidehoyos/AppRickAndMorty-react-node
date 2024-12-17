import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_URL;


const charsProvider = {
    
    async getChars() {
        try {
            const chars = await axios(`${serverUrl}/characters`)
            return chars.data;
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    },

    async getCharByName(name) {
        try {
            const char = await axios(`${serverUrl}/character/name/${name}`)
            return char.data;
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    },

    async getCharById(id) {
        try {
            const char = await axios(`${serverUrl}/character/${id}`)
            return char.data;
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    },
}

export default charsProvider;