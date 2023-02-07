import {render, screen} from '@testing-library/react';
import Beer from './Beer';

describe('<Beer />', () => {

    const beerDataWithAllGoodTemperature = {
            id: '1',
            name: 'Beer',
            minimumTemperature: 4,
            maximumTemperature: 6,
            temperature: 5
    };

    const beerDataWithTooLowTemperature = {
        id: '1',
        name: 'Beer',
        minimumTemperature: 4,
        maximumTemperature: 6,
        temperature: 2
    };

    const beerDataWithTooHighTemperature = {
        id: '1',
        name: 'Beer',
        minimumTemperature: 4,
        maximumTemperature: 6,
        temperature: 7
    };

    it('renders without errors', () => {
        render(<Beer beer={beerDataWithAllGoodTemperature}/>);
        expect(screen).toBeTruthy();
    });

    it('Shows Beer Name', () => {
        render(<Beer beer={beerDataWithAllGoodTemperature}/>);
        expect(screen.getByText(beerDataWithAllGoodTemperature.name)).toBeInTheDocument();
    });
    it('Shows a Numeric Temperature Value', () => {
        render(<Beer beer={beerDataWithAllGoodTemperature}/>);
        expect(screen.getByText(beerDataWithAllGoodTemperature.temperature)).toBeInTheDocument();
    });

    it('Shows all good under Status', () => {
        render(<Beer beer={beerDataWithAllGoodTemperature}/>);
        expect(screen.getByText('all good')).toBeInTheDocument();
    });

    render(<Beer beer={beerDataWithTooLowTemperature}/>);

    it('Shows too low under Status', () => {
        render(<Beer beer={beerDataWithTooLowTemperature}/>);
        expect(screen.getByText('too low')).toBeInTheDocument();
    });

    it('Shows too high under Status', () => {
        render(<Beer beer={beerDataWithTooHighTemperature}/>);
        expect(screen.getByText('too high')).toBeInTheDocument();
    });

});
