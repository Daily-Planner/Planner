import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class Planner extends Component {
  constructor(props) {
    super(props);
    this.state= {
      hoopDreams: null
    }
  }
} 

const Jumbo = <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>;
componentDidMount () {
}
render() {



  return (
<Fragment> 
{Jumbo}
</Fragment> 
 )
}