import { fireEvent, render } from "@testing-library/react";
import Home from "../home";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(() => ({ data: [] })),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});

describe("Home component", () => {
  describe("GIVEN a set of valid props", () => {
    const testProps = {
      rulingList: [],
      fetchVote: jest.fn(),
    };

    describe("WHEN the component is rendered", () => {
      const { container } = render(<Home {...testProps} />);

      it("THEN should display a regular Home", () => {
        expect(container).toMatchSnapshot();
      });
    });

    describe("WHEN the upButton and downButton button is pressed", () => {
      const container = render(<Home {...testProps} />);
      const upButton = container.getAllByTestId("upButton");
      const downButton = container.getAllByTestId("downButton");
      fireEvent.click(upButton[0])
      fireEvent.click(downButton[0])

      it('THEN fetchVote function should be called 2 times', () => {
        expect(testProps.fetchVote).toBeCalledTimes(2);
      });
    });
    
  });
});
