import React from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../store/reducer';
import { ConnectedTasksList } from '../components/TasksList';

interface InitialProps {
  greeting: string;
}

interface Props extends InitialProps {}

const store = createStore(reducer);

const IndexPage: NextPage<Props, InitialProps> = props => {
  return (
    <Provider store={store}>
      <div>{props.greeting}</div>
      <ConnectedTasksList/>
    </Provider>
  );
};

IndexPage.getInitialProps = async () => ({
  greeting: 'Hello World!'
});

export default IndexPage;
