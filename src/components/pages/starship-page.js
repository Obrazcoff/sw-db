import React, { Component } from 'react'
import Row from '../row'
import { StarshipList, StarshipDetails } from '../sw-components'

export default class StarshipPage extends Component {
  
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem })
  }

  render() {

    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.selectedItem} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    )
  }
}