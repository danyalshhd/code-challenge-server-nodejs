# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm i` - Install dependencies
- `npm start` - Start the application (Port 8081)
- `npm run test` - Test the application

### Highlights
- Separate env file to include following: PORT, TEMPERATURE_SERVICE_URL
- Separate the index.js file to have app.js and server.js to loosely couple in order for the end-end test to be accommodated.
- Async error handling, Not found error handling
- API Versioning
- Response Normalization
- Separate route for the Temperature
- Use async await
- Use typescript for easing the process of writing TDD, incorporating SOLID principles and minimize errors for unknown types.(already defined the library before for error handling)
- Use axios so that in future interceptors could be dfine

### Improvements to be made
- Include authorization middleware
- Write integration tests (check for reponse normalization)
- Add logging to improve monitoring
- Other than websockets to be used for efficient updation of table, one single call to get the temperatur of all sensor would be helpful as well