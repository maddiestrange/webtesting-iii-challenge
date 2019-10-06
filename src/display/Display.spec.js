// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from './Display'

describe("<Display />", () => {
    it('renders at all', () => {
        render(<Display />)
    });
    it('initial state is open unlocked', () => {
        const { getByText } = render(<Display />);
        expect(getByText('Unlocked'));
        expect(getByText('Open'));
    }) 
    it('accept state props', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);
        expect(getByText('Locked'));
        expect(getByText('Closed'));
    })
})

describe("Displays and maintains correct state", () => {
    it('is unlocked/open', () => {
        const display = render(<Display locked={false} closed={false}/>)
        expect(display.getByText('Unlocked'))
        expect(display.getByText('Open'))

        const unlocked = display.getByText('Unlocked');
        const open = display.getByText('Open');
        expect(unlocked.className).toMatch('led green-led')
        expect(open.className).toMatch('led green-led')
    }) 
    it(' is unlocked/closed', () => {
        const display = render(<Display locked={false} closed={true}/>)
        expect(display.getByText('Unlocked'))
        expect(display.getByText('Closed'))

        const unlocked = display.getByText('Unlocked');
        const closed = display.getByText('Closed');
        expect(unlocked.className).toMatch('led green-led')
        expect(closed.className).toMatch('led red-led')
    }) 
    it('is locked/closed', () => {
        const display = render(<Display locked={true} closed={true}/>)
        expect(display.getByText('Locked'))
        expect(display.getByText('Closed'))

        const locked = display.getByText('Locked');
        const closed = display.getByText('Closed');
        expect(locked.className).toMatch('led red-led')
        expect(closed.className).toMatch('led red-led')
    }) 
    it('is not locked/open', () => {
        const display = render(<Display locked={true} closed={true}/>)
        expect(display.queryByText('Locked')).toBeTruthy()
        expect(display.queryByText('Open')).toBeFalsy()
    }) 
})
