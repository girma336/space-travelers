import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/configureStore';
import Missions from '../components/missions';

describe('Missions tests', () => {
  test('should render', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });
});
