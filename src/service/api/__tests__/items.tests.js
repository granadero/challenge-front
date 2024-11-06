import axios from "axios";
import ItemsService from "../items.service";

describe("ItemsService", () => {
  test("should search items correctly", async () => {
    const mockData = { items: [{ id: 1, name: "Item 1" }] };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await ItemsService.searchItems("test");
    console.log(ItemsService.searchItems.mock);
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith("/items", {
      params: { q: "test", limit: 4 },
    });
  });

  test("should return null if searchItems fails", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    console.error = jest.fn();
    const result = await ItemsService.searchItems("test");

    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(new Error("Network error"));
  });

  test("should get item detail correctly", async () => {
    const mockData = { id: 1, name: "Item 1" };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await ItemsService.getItemDetail(1);

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith("/items/1");
  });

  test("should return null if getItemDetail fails", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    const result = await ItemsService.getItemDetail(1);

    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(new Error("Network error"));
  });
});
