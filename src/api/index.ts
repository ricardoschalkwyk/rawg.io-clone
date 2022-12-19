// MY friend helped with the setup of this API
const API_KEY = import.meta.env.VITE_API_URL;
const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=300`;

// Error Control.
const Api = {
  get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      fetch(BASE_URL + url).then((res) => {
        // Check is res is ok
        return res.ok
          ? // If it is then resolve
            res.json().then((res) => resolve(res as T))
          : //  If not then reject
            res.json().then((res) => reject(res));
      });
    });
  },
};

export default Api;
