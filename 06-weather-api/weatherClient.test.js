const WeatherClient = require('./weatherClient')

// jest.mock(‘./weather’);

describe('WeatherClient', () => {
  let client;
  
  beforeEach(() => {
    client = new WeatherClient();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('fetchWeatherData', () => {
    it('should return the weather data for a given city', async () => {
      const weatherData = {
        name: 'Singapore',
        description: 'broken clouds',
        temperature: 27.54,
        minTemp: 26.72,
        maxTemp: 28.41
      };

      const mockFetch = jest.fn().mockResolvedValueOnce({
        json: () => Promise.resolve(weatherData)
      });

      client.fetch = mockFetch;
      const result = await client.fetchWeatherData('Singapore').mockFetch;
      
      expect(mockFetch).toHaveBeenCalledWith( expect.stringContaining('Singapore'));

      expect(result).toBe({ name: 'Singapore',
                            description: 'broken clouds',
                            temperature: 27.54,
                            minTemp: 26.72,
                            maxTemp: 28.41
                          });
    });
    })
  })