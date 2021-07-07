// Test away
import React from 'react';
import { render, fireEvent } from "@testing-library/react";

import Dashboard from './Dashboard';

describe("<Dashboard />", () => {
    it('renders at all', () => {
        render(<Dashboard />)
    });
})

describe('Dashboard display and controls', () => {
    it('default state is unlocked and open', () => {
      const { getByText, queryByText } = render(<Dashboard />);
      expect(getByText('Unlocked'));
      expect(getByText('Open'));
      expect(getByText('Lock Gate'));
      expect(getByText('Close Gate'));
      
        
      const closeButton = queryByText('Close Gate');
      expect(closeButton);
      fireEvent.click(closeButton);
      expect(getByText('Unlocked'));
      expect(getByText('Closed'));
      expect(getByText('Lock Gate'));
      expect(getByText('Open Gate'));

      const lockButton = queryByText('Lock Gate');
      expect(lockButton);
      fireEvent.click(lockButton);
      expect(getByText('Locked'));
      expect(getByText('Closed'));
      expect(getByText('Unlock Gate'));
      expect(getByText('Open Gate'));

      const unlockButton = queryByText('Unlock Gate');
      expect(unlockButton);
      fireEvent.click(unlockButton);
      expect(getByText('Unlocked'));
      expect(getByText('Closed'));
      expect(getByText('Lock Gate'));
      expect(getByText('Open Gate'));

      const openButton = queryByText('Open Gate');
      expect(openButton);
      fireEvent.click(openButton);
      expect(getByText('Unlocked'));
      expect(getByText('Open'));
      expect(getByText('Lock Gate'));
      expect(getByText('Close Gate'));
     });
});