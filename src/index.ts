import { app } from "./app";
import 'dotenv/config';

const start = async () => {

  app.listen(process.env.PORT || 8081, () => {
    console.log(`SensorTech server at ${process.env.PORT}`);
  });
};

start();

// app.get('/temperature/:id', (req, res) => {
//   fetch(
//     `https://temperature-sensor-service.herokuapp.com/sensor/${req.params.id}`
//   )
//     .then((response) => response.json())
//     .then((response) => res.send(response));
// });