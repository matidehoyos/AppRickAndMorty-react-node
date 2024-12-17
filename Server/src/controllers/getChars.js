const axios = require("axios");

const getChars = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        if (page < 1 || isNaN(page)) {
            return res.status(400).send("Invalid page number. Page must be a positive integer.");
        }

        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);

        const { results, info } = response.data;
        if (!results || results.length === 0) {
            return res.status(404).send("No characters found for the specified page.");
        }

        return res.status(200).json({ info, results });

    } catch (error) {
        if (error.response) {
            return res
                .status(error.response.status)
                .send(error.response.data.error || "Error fetching characters from API.");
        }
        
        return res.status(500).send("Internal server error.");
    }
};

module.exports = getChars;

