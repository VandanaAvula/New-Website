// // componentsNextPage.js
// // import React from 'react';

// // import { useSelector } from 'react-redux';
// // //import { selectUserName } from './store/userSlice';

// // const NextPage = () => {
// //   //const userName=useSelector(selectUsername);
// //   const userName = useSelector((state)=>state.user.name);
// //   console.log('nect page rendered from nextpage');
// //   return (
// //     <div>
     
// //       <p>Hey {userName}! Welcome to Next Page</p>
// //     </div>
// //   );
// // };

// // export default NextPage;
// // NextPage.js
// // NextPage.js
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getWeatherDataForCity } from './weatherAPI'; // Import the function for fetching weather data for a specific city

// const NextPage = () => {
//   const user = useSelector((state) => state.user);
//   const weather = useSelector((state) => state.weather);

//   const [cityInput, setCityInput] = useState('');
//   const [cityWeather, setCityWeather] = useState(null);

//   const handleGetCityWeather = async () => {
//     try {
//       // Fetch weather data for the input city
//       const cityWeatherData = await getWeatherDataForCity(cityInput);
//       setCityWeather(cityWeatherData);
//     } catch (error) {
//       // Handle error
//       console.error('Error fetching weather data for the city:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Existing content */}

//       <div>
//         <h1>hello! {user.name}</h1>
//         <h3>Get Weather for Another City:</h3>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={cityInput}
//           onChange={(e) => setCityInput(e.target.value)}
//         />
//         <button onClick={handleGetCityWeather}>Get Weather</button>
//       </div>

//       {cityWeather && (
//         <div>
//           <h3>Weather Details for {cityInput}:</h3>
//           <p>City: {cityWeather.name}</p>
//           <p>Temperature: {cityWeather.main.temp}Â°C</p>
//           {/* Add more weather details as needed */}
//         </div>
//       )}

//       {/* Other content of the next page */}
//     </div>
//   );
// };

// export default NextPage;