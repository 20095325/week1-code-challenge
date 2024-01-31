
const axios = require('axios');

export async function apiCall(formData)
{
    const prompt = formData.get('prompt') 
    
    const options = {
      method: 'POST',
      url: 'https://ai-image-generator3.p.rapidapi.com/generate',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '2eeeb4375amshff76ff1cb910b1cp1bbc02jsne19d468e40a3',
        'X-RapidAPI-Host': 'ai-image-generator3.p.rapidapi.com'
      },
      data: {
        prompt: prompt,
        page: 1
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    return response
}

