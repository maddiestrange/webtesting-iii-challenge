// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

import Dashboard from './Dashboard';

describe("<Dashboard />", () => {
    it('renders at all', () => {
        render(<Dashboard />)
    });
})