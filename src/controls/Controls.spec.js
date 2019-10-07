// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Controls from './Controls'

describe("<Controls />", () => {
    it('renders at all', () => {
        render(<Controls />)
    });
})

describe("Control buttons", () => {
    it('is open and unlocked', () => {
        const closeSpy = jest.fn();
        const { queryByText } = render(<Controls locked={false} closed={false} toggleClosed={closeSpy}/>);
        const lockButton = queryByText('Lock Gate');
        expect(lockButton);
        expect(lockButton.disabled).toBe(true);

        const closeButton = queryByText('Close Gate');
        expect(closeButton);
        expect(closeButton.disabled).toBe(false);
        fireEvent.click(closeButton);
        expect(closeSpy).toBeCalled();
      });

      it('is closed and unlocked', () => {
        const openSpy = jest.fn(), lockSpy = jest.fn();
        const { queryByText } = render(<Controls locked={false}
                                                 closed={true}
                                                 toggleClosed={openSpy}
                                                 toggleLocked={lockSpy}/>);
        const lockButton = queryByText('Lock Gate');
        expect(lockButton);
        expect(lockButton.disabled).toBe(false);
        fireEvent.click(lockButton);
        expect(lockSpy).toBeCalled();
        
        const openButton = queryByText('Open Gate');
        expect(openButton);
        expect(openButton.disabled).toBe(false);
        fireEvent.click(openButton);
        expect(openSpy).toBeCalled();
        
      });
      it('is closed and locked', () => {
        const unlockSpy = jest.fn();
        const { queryByText } = render(<Controls locked={true} closed={true} toggleLocked={unlockSpy} />);
        const unlockButton = queryByText('Unlock Gate');
        expect(unlockButton);
        expect(unlockButton.disabled).toBe(false);
        
        const openButton = queryByText('Open Gate');
        expect(openButton);
        expect(openButton.disabled).toBe(true);
        fireEvent.click(unlockButton);
        expect(unlockSpy).toBeCalled();
      });
})