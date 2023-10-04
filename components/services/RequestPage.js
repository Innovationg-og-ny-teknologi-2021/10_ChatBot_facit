//Sample import fra https://rapidapi.com/rphrp1985/api/open-ai21
// Hunsk at insætte den sample de giver in i en function som jeg har gjort i lijne 5, dernæst ændre content: "hello" til en variable (message her), Husk også at addere en return response
import axios from "axios";

export default async function SendMessage(message) {
  const options = {
    method: "POST",
    url: "https://open-ai21.p.rapidapi.com/conversationgpt35",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "cbc496968fmsh4191adf4200576bp1273efjsn40f86d869350",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      web_access: false,
      stream: false,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response
  } catch (error) {
    console.error(error);
  }
}
