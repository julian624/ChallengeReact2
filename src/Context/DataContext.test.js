import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import DataContext from "./DataContext";

test("renders content", () => {
  const data = {
    content: "this is a test",
    important: true,
  };

  const component = render(<DataContext data={data} />);

  component.getByText("This is a test");
  component.getByText("make not important");
});

/////////// i wanted to train testing with this challenge but i need to send it now
/////////// because i need to go outside, perhaps tomorrow i could return
