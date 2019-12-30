import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
      error: false
    };

    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          });
        })
        .catch(this.onError);
    }

    onError = (err) => {
      this.setState({
        error: true,
        loading: false
      })
    }

    render() {
      const { data, error } = this.state;

      const errorMsg = error ? <ErrorIndicator /> : null;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} >
        { errorMsg }
        </View>;
    }
  };
};

export default withData;