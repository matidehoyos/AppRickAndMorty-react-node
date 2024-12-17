import axios from 'axios';


const charsProvider = {
    
    async getChars() {
        try {
            const chars = await axios(`http://localhost:3001/r&m/characters`)
            return chars.data;
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    },

    async getCharByName(name) {
        try {
            const char = await axios(`http://localhost:3001/r&m/character/name/${name}`)
            return char.data;
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    },

    async getCharById(id) {
        try {
            const char = await axios(`http://localhost:3001/r&m/character/${id}`)
            return char.data;
        } catch (error) {
            console.error(error.message)
            return error.message
        }
    },
}

export default charsProvider;