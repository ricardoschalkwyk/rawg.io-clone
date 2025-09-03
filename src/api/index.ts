const API_KEY = import.meta.env.VITE_API_URL;
const BASE_URL = `https://api.rawg.io/api`;

const Api = {
  get<T>(url: string): Promise<T> {
    const split = url.split("?");

    const fetchUrl = `${BASE_URL}${split[0]}?${
      split[1] ? `${split[1]}` : ""
    }&key=${API_KEY}`;

    return new Promise((resolve, reject) => {
      fetch(fetchUrl).then((res) => {
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
