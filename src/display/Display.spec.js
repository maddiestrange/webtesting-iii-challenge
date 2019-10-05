// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

import Display from './Display'

describe("<Display />", () => {
    it('renders at all', () => {
        render(<Display />)
    });
})