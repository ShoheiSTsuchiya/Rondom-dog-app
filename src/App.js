import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DogPictureComponent() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using Axios to fetch data from the dog API
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setDogImageUrl(response.data.message); // Extracting the image URL
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Function to render the dog image
  function renderDogImage() {
    if (dogImageUrl) {
      return <img src={dogImageUrl} alt="Random Dog" />;
    }
    return null; // Return null if no image URL is present
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Random Dog Picture</h1>
      {renderDogImage()} {/* Call the function to render the dog image */}
    </div>
  );
}

export default DogPictureComponent;
