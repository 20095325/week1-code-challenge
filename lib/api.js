
export async function apiCall(formData) {
    'use server'
    const axios = require('axios');
    let imageLinks = [];
 
    const options = {
      method: 'POST',
      url: 'https://ai-image-generator3.p.rapidapi.com/generate',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '2eeeb4375amshff76ff1cb910b1cp1bbc02jsne19d468e40a3',
        'X-RapidAPI-Host': 'ai-image-generator3.p.rapidapi.com'
      },
      data: {
        prompt: formData.get('prompt'),
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        imageLinks = response.data.results.images
    } catch (error) {
        console.error(error);
    }
    return imageLinks
}

