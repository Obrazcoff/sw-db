import React, { Component } from 'react';

import './people-page.css';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import ErrorIndicator from '../error-indicator';
import SwApiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {

  swapiService = new SwApiService();

  state = {
    selectedPerson: null,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople} 
      >
        {(el) => (
          `${el.name} (${el.birthYear})`
        )}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );
  
    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}
