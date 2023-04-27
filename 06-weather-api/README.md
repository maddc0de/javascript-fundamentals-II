# A Weather program

## Objectives

To test-drive a program that fetches data from an API.

To work on a program that will display the current weather for a given city by using an API, [OpenWeather API](https://openweathermap.org/api)


## Useful tips and information

<details>
  <summary>Here's a way to exclude the API key from git</summary>

  1. Create a file `apiKey.js` that exports the value:
  ```js
  // file: apiKey.js
  module.exports = 'a3d9eb01d4de82b9b8d0849ef604dbed';
  ```

  2. Import this file from the other file where you need it:
  ```js
  // file: index.js
  const apiKey = require('./apiKey');

  // ...
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}
  ```

  3. Make sure the file `apiKey.js` is added to the `.gitignore` file so git won't commit
     it:
  ```bash
  $ echo "apiKey.js" >> .gitignore
  ```
</details>


[Mocking API Calls pill](https://github.com/makersacademy/javascript-fundamentals/blob/main/pills/mocking_api_calls.md)