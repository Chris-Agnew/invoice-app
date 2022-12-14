import { render } from "@testing-library/react";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("Navbar rendered", () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId("navbar");
    expect(navbar).toBeTruthy();
  });
});
