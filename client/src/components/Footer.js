import React from 'react';
import {
  Segment,
  Grid,
  List,
  Header,
  Icon,
} from 'semantic-ui-react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return(
      <Segment inverted vertical>
        <FooterContainer>
          <Grid divided inverted style={{ height: '20vh'}}>
            <Grid.Row>
              <Grid.Column mobile={8} tablet={8} computer={5}>
                <List link inverted>
                  <List.Item as='a' href="https://github.com/d-actor" target="_blank" rel='noopener noreferrer'><Icon color='teal' name='github'/>
                    Dan Actor
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column mobile={8} tablet={8} computer={5}>
                <Header inverted as='h4' content='' />
                <List link inverted>
                  <List.Item as='a' href=''>New Mixoff</List.Item>
                  <List.Item as='a' href=''>Account Settings</List.Item>
                  <List.Item as='a' href=''>Register Now!</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </FooterContainer>
      </Segment>
    )
  }
}

// styled components
const FooterContainer = styled.div`
  style={{ padding: '2em 0em', position: 'absolute', bottom: '0', width: '100%'}}
`

export default Footer;

