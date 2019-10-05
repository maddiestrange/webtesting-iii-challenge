// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render } from "@testing-library/react";

import Controls from './Controls'

describe("<Controls />", () => {
    it('renders at all', () => {
        render(<Controls />)
    });
})