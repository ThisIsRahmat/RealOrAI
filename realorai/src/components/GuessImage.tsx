import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface ImageProps {
  imageUrl: string;
}

const getaiURL= async () => {
  try {
    // list all files in a bucket
    const { data, error } = await supabase
      .storage
      .from('AI_midjourney')
      .list();

    if (error) {
      console.error("Error fetching AI files:", error.message);
      return "https://mwznmprprboxtwasdxke.supabase.co/storage/v1/object/public/AI_midjourney/Irregular_Apocalypse_Delhi_Damsel_Amid_the_architectural_marvel_407a918c-c037-423e-8bdd-8c145e99c3d3.png"
    }

    if (!data) {
      console.error("No data returned");
      return "https://mwznmprprboxtwasdxke.supabase.co/storage/v1/object/public/AI_midjourney/Irregular_Apocalypse_Delhi_Damsel_Amid_the_architectural_marvel_407a918c-c037-423e-8bdd-8c145e99c3d3.png"
    }
  

    // Assuming you want the URL of the first file in the list
    //To-do: randomise the data
    const choosenFile = data[8];
    const url = await supabase.storage.from('AI_midjourney').getPublicUrl(choosenFile.name);

    const aiURL = url.data.publicUrl;
    console.log("this is the ai URL", url.data.publicUrl)
    console.log("this is the ai URL", aiURL)
    return aiURL
  } catch (error) {
    console.error("Error fetching AI files:", error.message);
    return "https://mwznmprprboxtwasdxke.supabase.co/storage/v1/object/public/AI_midjourney/Irregular_Apocalypse_Delhi_Damsel_Amid_the_architectural_marvel_407a918c-c037-423e-8bdd-8c145e99c3d3.png"
  }
};


  const GuessImage: React.FC<ImageProps> = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
  
    const fetchAIUrl = async () => {
      try {
        const aiURL = await getaiURL();
        if (aiURL !== null) {
          setImageUrl(aiURL);
          console.log("This is aiURL", aiURL);
        } else {
          // Handle the case where getaiURL returns null
          console.error("getaiURL returned null");
        }
      } catch (error) {
        console.error("Error fetching AI files:", error.message);
      }
    };
  
    useEffect(() => {
      fetchAIUrl();
    }, []); // Call fetchAIUrl only once when the component mounts
  
    return (
      <div>
        {imageUrl !== 'this is a test' ? (
          <>
            <img src={imageUrl} alt="An image to guess" />
            <p className='text-4xl text-red-600'> This is it {imageUrl}</p>
          </>
        ) : (
          <p className='text-2xl'>Loading...</p>
        )}
      </div>
    );
  };
  
  export default GuessImage;
  