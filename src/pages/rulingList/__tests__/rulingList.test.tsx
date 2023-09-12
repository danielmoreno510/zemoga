import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { RulingList } from "../rulingList";
import { OPTIONS } from "@/types/inputs";
import db from "../../../../db.json"

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe("rulingList component", () => {
  describe("GIVEN a set of valid props", () => {
    const testProps = {
      rulingList: db.data,
      option: OPTIONS.GRID,
      changeOption: jest.fn(),
      fetchVote: jest.fn(),
    };

    describe("WHEN the component is rendered", () => {
      const container = render(<RulingList {...testProps} />);
      const open = container.getAllByTestId("open");
      fireEvent.click(open[0]);

      it("THEN should display a regular Home", () => {
        expect(container.container).toMatchSnapshot();
      });
    });
  });
});
