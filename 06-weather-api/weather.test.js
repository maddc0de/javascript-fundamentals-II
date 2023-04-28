const Weather = require('./weather');

describe('Weather class', () => {
  
  it('returns the weather data of Singapore', async () => {
    // mocking weatherClient
    const mockWeatherClient = {
      fetchWeatherData: jest.fn(), // <- a jest mock function
    };
    // set resolved value of mock function
    // .mockResolvedValueOnce is used for mocking asynchronous method, which returns a promise
    mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'Singapore',
      description: 'broken clouds',
      temperature: 27.54,
      minTemp: 26.72,
      maxTemp: 28.41
    })

    const weather = new Weather(mockWeatherClient);
    await weather.load('Singapore');
    expect(mockWeatherClient.fetchWeatherData).toHaveBeenCalledWith('Singapore');
    expect(weather.getWeatherData()).toEqual({"name": "Singapore", 
                                              "description": "broken clouds", 
                                              "temperature": 27.54,
                                              "minTemp": 26.72,
                                              "maxTemp": 28.41});
  })
})


