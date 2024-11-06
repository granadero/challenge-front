import React from "react";
import { render } from "@testing-library/react";
import DetailItem from "../detailItem";

describe("DetailItem component", () => {
  const item = {
    picture: { url: "http://example.com/image.jpg" },
    title: "Item Test",
    condition: "Nuevo",
    sold_quantity: 10,
    price: { amount: 100, currency: "ARS", decimals: 0 },
    description: "This is an example item",
  };

  it("renders with the correct structure", () => {
    const { container } = render(<DetailItem item={item} />);
    expect(container.querySelector("section")).toBeInTheDocument();
    expect(container.querySelector("div.container")).toBeInTheDocument();
    expect(container.querySelector("div.imageAndPrice")).toBeInTheDocument();
    expect(container.querySelector("div.priceAndTitle")).toBeInTheDocument();
    expect(container.querySelector("div.description")).toBeInTheDocument();
  });

  it("does not render decimals when they are 0", () => {
    const { container } = render(<DetailItem item={item} />);
    const decimals = container.querySelector("h1.decimals");
    expect(decimals).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<DetailItem item={item} />);
    expect(container).toMatchSnapshot();
  });
});
