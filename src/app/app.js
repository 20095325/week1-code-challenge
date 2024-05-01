'use client'
import Image from "next/image";
import { useState } from "react";
import React from 'react';

const axios = require('axios');
let imagesArray = []

export default function Home() {
  
  const [imageLinks, setImageLink] = useState([])

  async function apiCall(formData) {
    
 
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
        imagesArray = response.data.results.images
    } catch (error) {
        console.error(error);
    }

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row z-10 max-w-5xl w-full items-center justifiy-left font-mono text-sm lg:flex h-24 bg-cover bg-cat-hoodie rounded">

      <form action={apiCall} className="w-full">
        <input type="text" id="prompt" name="prompt" className="text:black dark:text-white bg-white dark:bg-black w-4/5 mx-6 rounded"/>
        <button type="submit" className="m-2 p-2 rounded-md text-white dark:text-black hover:text-black dark:hover:text-white bg-black dark:bg-white hover:bg-white dark:hover:bg-black transition duration-150 ease-in-out">Generate</button>
      </form>

      </div>

      <div className="relative flex flex-col m-6 place-items-center">
        {imageLinks.map((link, index) => (
          <a href={link} key={index} className="dark:text-white">Image {index + 1}</a>
        ))}

        <Image
        src="/images/abstract-art.jpeg"
              alt="Focus Image"
              className=""
              width={400}
              height={400}
              priority>
        </Image>

      </div>  

      <div className="flex flex-row gap-6 mb-6">
      <Image
        src="/images/cat-hoodie.jpeg"
              alt="Dummy Images"
              className=""
              width={100}
              height={100}
              priority>
        </Image>

        <Image
        src="/images/pastel-robot.jpeg"
              alt="Dummy Images"
              className=""
              width={100}
              height={100}
              priority>
        </Image>

        <Image
        src="/images/sketti-cat.jpeg"
              alt="Dummy Images"
              className=""
              width={100}
              height={100}
              priority>
        </Image>

        <Image
        src="/images/statue-hoodie.jpeg"
              alt="Dummy Images"
              className=""
              width={100}
              height={100}
              priority>
        </Image>
        <Image
        src="/images/swirl-cloud.jpeg"
              alt="Dummy Images"
              className=""
              width={100}
              height={100}
              priority>
        </Image>
      </div>
      <div>
        <h1>Powered by AI Image Generator by Sohail Ahmed</h1>
    </div>
    </main>
  );
}
