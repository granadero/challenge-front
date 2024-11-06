import axios from "axios";

const apiUrl = process.env.API_URL;
class ItemsService {
  axiosInstance;

  constructor() {
    if (!ItemsService.instance) {
      ItemsService.instance = this;
    }

    const connection = axios.create({
      baseURL: apiUrl + "/api",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    this.axiosInstance = connection;

    return ItemsService.instance;
  }

  async searchItems(busqueda, limit = 4) {
    try {
      const params = {
        q: busqueda,
        limit: limit,
      };
      const result = await this.axiosInstance.get("/items", { params });

      if (result.data) {
        return result.data;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getItemDetail(id) {
    try {
      const result = await this.axiosInstance.get(`/items/${id}`);
      if (result.data) {
        return result.data;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
const instance = new ItemsService();
Object.freeze(instance);
export default instance;
