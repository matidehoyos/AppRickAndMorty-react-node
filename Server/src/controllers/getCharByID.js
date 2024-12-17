const axios = require("axios");

const getCharByID = async (req, res) => {
    try {
        const characterId = req.params.id;

        if (!characterId || isNaN(characterId)) {
            return res.status(400).send("Invalid character ID");
        }

        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);

        if (!response.data) {
            return res.status(404).send("Character not found");
        }

        const { id, status, name, origin, species, image, gender, location } = response.data;
        const character = { id, status, name, origin, species, image, gender, location };

        if (!character.name) {
            return res.status(404).send("Character not found");
        }

        return res.status(200).json(character);

    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).send(error.response.data.error || "Error fetching character data");
        }

        return res.status(500).send("Server error");
    }
};

module.exports = getCharByID;
