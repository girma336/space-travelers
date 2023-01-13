import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../Redux/configureStore';
import Rockets from '../components/rocket';

describe('Test snapshot componet of rocket', () => {
  it('Renders correctly of rocket', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
