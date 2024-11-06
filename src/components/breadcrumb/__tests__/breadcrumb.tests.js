import { render, screen } from "@testing-library/react";
import Breadcrumb from "../breadcrumb";

describe("Breadcrumb", () => {
  const categories = [
    { name: "Category 1" },
    { name: "Category 2" },
    { name: "Category 3" },
  ];

  it("renders the correct number of breadcrumb items", () => {
    render(<Breadcrumb categories={categories} />);
    const breadcrumbItems = screen.getAllByRole("listitem");
    expect(breadcrumbItems).toHaveLength(categories.length);
  });

  it("displays the separator between breadcrumb items", () => {
    render(<Breadcrumb categories={categories} />);
    const separator = screen.getAllByText(">");
    expect(separator[0]).toBeInTheDocument();
  });

  it("displays the correct breadcrumb names", () => {
    render(<Breadcrumb categories={categories} />);
    const breadcrumbNames = screen.getAllByText(/Category \d+/);
    expect(breadcrumbNames).toHaveLength(categories.length);
  });

  it("should match snapshot", () => {
    const { container } = render(<Breadcrumb categories={categories} />);
    expect(container).toMatchSnapshot();
  });
});
