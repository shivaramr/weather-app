const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getWeatherData = async (args: { place: string; dispatch?: any }) => {
  const { place, dispatch } = args;
  if (place && place.length > 0) {
    try {
      dispatch({ type: "FETCH_REQUEST" });
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${WEATHER_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      console.log(err);
    }
  }
};
