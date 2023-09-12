import { fireEvent, render } from "@testing-library/react";
import InputSelect from "../InputSelect";
import { OPTIONS } from "@/types/inputs";
import React from "react";

describe("InputSelect component", () => {
  describe("GIVEN a set of valid props", () => {
    const testProps = {
      value: OPTIONS.GRID,
      setValue: jest.fn(),
    };

    describe("WHEN the component is rendered", () => {
      const container = render(<InputSelect {...testProps} />);
      const open = container.getAllByTestId("open");
      fireEvent.click(open[0])

      it("THEN should display a regular Home", () => {
        expect(container.container).toMatchSnapshot();
      });
    });

    describe("WHEN the list button is pressed", () => {
      React.useState = jest.fn().mockReturnValue([true, jest.fn()])
      const container = render(<InputSelect {...testProps} />);
      const list = container.getAllByTestId("list");
      fireEvent.click(list[0])

      it('THEN setValue function should be called', () => {
        expect(testProps.setValue).toHaveBeenCalledWith(OPTIONS.LIST);
      });
    });

    describe("WHEN the grid button is pressed", () => {
      React.useState = jest.fn().mockReturnValue([true, jest.fn()])
      const container = render(<InputSelect {...testProps} />);
      const grid = container.getAllByTestId("grid");
      fireEvent.click(grid[0])

      it('THEN setValue function should be called', () => {
        expect(testProps.setValue).toHaveBeenCalledWith(OPTIONS.GRID);
      });
    });
    
  });
});
