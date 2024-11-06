import React from "react";
import { render } from "@testing-library/react";
import ListItems from "../listItems";

describe("ListItems component", () => {
  it("renders empty section when items array is empty", () => {
    render(<ListItems items={[]} />);
    const section = document.querySelector(".section");
    expect(section).toBeInTheDocument();
  });

  it("renders single item correctly", () => {
    const item = {
      id: 1,
      picture: "/_next/image?url=%2Fimage.jpg&w=384&q=75",
      price: { amount: 10, decimals: 0, currency: "USD" },
      title: "Item title",
      condition: "new",
    };
    const { getByRole } = render(<ListItems items={[item]} />);
    const section = document.querySelector(".section");
    expect(section).toBeInTheDocument();
    expect(getByRole("link")).toHaveAttribute("href", `/items/${item.id}`);
    expect(getByRole("img")).toHaveAttribute("src");
    expect(getByRole("img")).toHaveAttribute("alt", "Logo Mercado Libre");
  });

  it("should match snapshot", () => {
    const { container } = render(<ListItems items={[]} />);
    expect(container).toMatchSnapshot();
  });
});
