import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import { data } from './App';
 
afterEach(() => {
jest.restoreAllMocks();
});

describe('<App />', () => {

    const renderedApp = render(<App />);

    it('renders without errors', () => {
        expect(renderedApp.container).toBeTruthy();
    });   
});

// Dynamic as the List of Beers increase by refering to data
data.forEach( (beerData) => {
    describe(`Testing Beer ${beerData.id} ( ${beerData.name})`, ()=> {
        const mockResponse = beerData;
        it(`Shows ${beerData.name}`, async () => {
            jest.spyOn(global, 'fetch').mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce(mockResponse)
            });
            render(<App />);
            await waitFor(() => screen.getByText(mockResponse.name));
            expect(screen.getByText(mockResponse.name)).toBeInTheDocument();
        });
    })
});


