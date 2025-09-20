import { describe, expect } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import Count from "./Count";

describe("Counter Component Test cases", () => {
    test("Initial Rendering test", () => {
        render(<Count />);
        // selections
        const countText = screen.getByText("Count is 0");
        const plusButton = screen.getByText("+");
        const minusButton = screen.getByText("-");
        const header = screen.getByText("Counter");
        const mismatchtext = screen.queryByText("Count12");

        // assertions
        expect(countText).toBeInTheDocument();
        expect(plusButton).toBeInTheDocument();
        expect(minusButton).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(mismatchtext).not.toBeInTheDocument();

    });

    test("Increemnt COunter test case", () => {
        render(<Count />);
        const plusButton = screen.getByText("+");
        const isZeropresent = screen.getByText("Count is 0");
        expect(isZeropresent).toBeInTheDocument();
        fireEvent.click(plusButton);
        const isOnePresent = screen.getByText("Count is 1")
        expect(isOnePresent).toBeInTheDocument();

    });

    test("Decrement COunter test case", () => {
        render(<Count />);
        const minusButton = screen.getByText("-");
        const isZeropresent = screen.getByText("Count is 0");
        expect(isZeropresent).toBeInTheDocument();
        fireEvent.click(minusButton);
        const isminuspresent = screen.getByText("Count is -1")
        expect(isminuspresent).toBeInTheDocument();

    });

})