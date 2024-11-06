import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/navigation";
import SearchBox from "../searchBox";

const mockRouterReplace = jest.fn();
const mockRouterRefresh = jest.fn();
const mockRouterPush = jest.fn();

jest.mock("next/navigation", () => {
  const originalModule = jest.requireActual("next/navigation");
  return {
    __esModule: true,
    ...originalModule,
    useRouter: jest.fn().mockImplementation(() => {
      return {
        push: mockRouterPush,
        replace: mockRouterReplace,
        refresh: mockRouterRefresh,
      };
    }),
    useSearchParams: jest.fn().mockImplementation(() => {
      return new URLSearchParams(window.location.search);
    }),
    usePathname: jest.fn().mockImplementation((pathArgs) => {
      return pathArgs;
    }),
  };
});

describe("SearchBox", () => {
  afterEach(() => {
    mockRouterRefresh.mockRestore();
    mockRouterReplace.mockRestore();
    mockRouterPush.mockRestore();
  });
  it("updates inputValue when input field changes", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const inputField = getByPlaceholderText("Buscar...");
    fireEvent.change(inputField, { target: { value: "test" } });
    expect(getByPlaceholderText("Buscar...")).toHaveValue("test");
  });

  it("calls onSearch when Enter key is pressed", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const inputField = getByPlaceholderText("Buscar...");
    fireEvent.change(inputField, { target: { value: "test" } });
    fireEvent.keyDown(inputField, { key: "Enter", keyCode: 13 });
    expect(useRouter().push).toHaveBeenCalledTimes(1);
  });

  it("does not call onSearch when input field is empty", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const inputField = getByPlaceholderText("Buscar...");
    fireEvent.keyDown(inputField, { key: "Enter", keyCode: 13 });
    expect(useRouter().push).not.toHaveBeenCalled();
  });

  it("calls router.push with correct URL when onSearch is called", () => {
    const { getByPlaceholderText } = render(<SearchBox />);
    const inputField = getByPlaceholderText("Buscar...");
    fireEvent.change(inputField, { target: { value: "test" } });
    fireEvent.keyDown(inputField, { key: "Enter", keyCode: 13 });
    expect(useRouter().push).toHaveBeenCalledWith("/items/?search=test");
  });

  it("should match snapshot", () => {
    const { container } = render(<SearchBox />);
    expect(container).toMatchSnapshot();
  });
});
