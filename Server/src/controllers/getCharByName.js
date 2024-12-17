const axios = require("axios");

const getCharByName = async (req, res) => {
    try {
        const { name } = req.params;
        if (!name || typeof name !== "string") {
            return res.status(400).send("Invalid character name.");
        }

        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`);
        const data = response.data;

        if (!data.results || data.results.length === 0) {
            return res.status(404).send("Character not found.");
        }

        const { id, status, name: charName, origin, species, image, gender, location } = data.results[0];
        const character = { id, status, name: charName, origin, species, image, gender, location };

        return res.status(200).json(character);

    } catch (error) {
        if (error.response) {
            return res
                .status(error.response.status)
                .send(error.response.data.error || "Error fetching character from API.");
        }

        return res.status(500).send("Internal server error.");
    }
};

module.exports = getCharByName;
