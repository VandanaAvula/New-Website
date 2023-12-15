import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './uni.css';

const UniversityInfo = () => {
  const apiLink = 'http://universities.hipolabs.com/search?country=United+States';
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiLink);
        const data = await response.json();
        setUniversities(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiLink]);

 

  return (
    <div className="box">
      <div className="welcome">
        <h1> Hi, Welcome {user.name}</h1>
        <h3>Following is the Information Regarding Universities</h3>
      </div>
      <div className="down">
        {loading ? (
          <p>Please wait, data is fetching...</p>
        ) : (
          universities.map((university, index) => (
            <div key={index} className="university-container">
              <div className="university-background">
                <h2>{university.name}</h2>
              </div>
              <p>alpha_two_code: {university.alpha_two_code}</p>
              <p>domains: {university.domains}</p>
              <p>Country: {university.country}</p>
              <p>
                <button
                  className="button"
                  onClick={() => window.open(university.web_pages[0], '_blank')}
                >
                  Visit the full site
                </button>
                
              </p>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};

export default UniversityInfo;
