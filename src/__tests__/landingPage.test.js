import LandingPage from '../components/pages/Landing/RenderLandingPage';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
describe('<LandingPage /> test suite', () => {
    afterEach(() => {
    // cleanup mocking after each test runs.
    jest.clearAllMocks();
  });
  test('the graph section is visable', async () => {
    const { getByText } = render(<LandingPage/>);
    const graph1 = getByText('Search Grant Rates By Office');
    expect(graph1.textContent).toBe('Search Grant Rates By Office');

    const graph2 = getByText('Search Grant Rates By Nationality');
    expect(graph2.textContent).toBe('Search Grant Rates By Nationality');

    const graph3 = getByText('Search Grant Rates Over Time');
    expect(graph3.textContent).toBe('Search Grant Rates Over Time');

    const button = getByText('Download the Data');
    expect(button.textContent).toBe('Download the Data');
  });

  test('the bottom section is visable', async () => {
    const { getByText } = render(<LandingPage/>);
    const title = getByText('Systemic Disparity Insights');
    expect(title.textContent).toBe('Systemic Disparity Insights');

    const title1 = getByText('36%');
    expect(title1.textContent).toBe('36%');
    const text1 = getByText('By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.');
    expect(text1.textContent).toBe('By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.');

    const title2 = getByText('5%');
    expect(title2.textContent).toBe('5%');
    const text2 = getByText('The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.');
    expect(text2.textContent).toBe('The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.');

    const title3 = getByText('6x Lower');
    expect(title3.textContent).toBe('6x Lower');
    const text3 = getByText(`Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was six times Lower than the San Francisco asylum office.`);
    expect(text3.textContent).toBe(`Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was six times Lower than the San Francisco asylum office.`);

    const button = getByText('Read More');
    expect(button.textContent).toBe('Read More');
  });
});