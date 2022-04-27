const axios = require("axios");

const meditationSessions = async () => {
  try {
    const instance = axios.create({
      baseURL: `https://gist.githubusercontent.com/nahuelb/0af04ce9aadab10afe2f37ba566070c2/raw/47effc9a678e9616369b56eeeb4ee54f22763b21/sessions.json`,
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
    const response = await instance.get();

    //console.log(response.data[0], "response");

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports = { meditationSessions };
