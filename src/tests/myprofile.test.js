import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import MyProfile from '../components/myprofile';
import store from '../Redux/configureStore';

describe('Test the react component of my profile', () => {
  it('Test react My Profile page', () => {
    const myProfile = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(myProfile).toMatchSnapshot();
  });
});
