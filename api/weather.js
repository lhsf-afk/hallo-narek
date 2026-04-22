export default async function handler(req, res) {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.07&longitude=4.30&current=temperature_2m,windspeed_10m&timezone=Europe/Amsterdam'
  );
  const data = await response.json();
  res.json({
    temperature: data.current.temperature_2m,
    windspeed: data.current.windspeed_10m,
  });
}
