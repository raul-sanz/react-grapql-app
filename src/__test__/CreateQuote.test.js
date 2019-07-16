import React from 'react';
import ReactDOM from 'react-dom';
import CreateQuote from '../components/quoteComponents/CreateQuote'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  renderer.create(<CreateQuote />);
});
