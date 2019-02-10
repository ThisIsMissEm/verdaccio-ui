/**
 * @prettier
 */

import React, { Component } from 'react';

import { DetailContextConsumer } from '../../pages/version/index';
import Readme from '../Readme';
import Versions from '../Versions';
import { preventXSS } from '../../utils/sec-utils';
import Tabs from '@material-ui/core/Tabs/index';
import Tab from '@material-ui/core/Tab/index';
import { Content } from './styles';
import Dependencies from '../Dependencies';
import UpLinks from '../UpLinks';

class DetailContainer extends Component<any, any> {
  state = {
    tabPosition: 0,
  };

  render() {
    return (
      <DetailContextConsumer>
        {context => {
          return this.renderTabs(context);
        }}
      </DetailContextConsumer>
    );
  }

  renderTabs = ({ readMe }) => {
    const { tabPosition } = this.state;

    return (
      <React.Fragment>
        <Tabs indicatorColor={'primary'} onChange={this.handleChange} textColor={'primary'} value={tabPosition} variant={'fullWidth'}>
          <Tab label={'Readme'} />
          <Tab label={'Dependencies'} />
          <Tab label={'Versions'} />
          <Tab label={'Uplinks'} />
        </Tabs>
        <Content>
          {tabPosition === 0 && this.renderReadme(readMe)}
          {tabPosition === 1 && <Dependencies />}
          {tabPosition === 2 && <Versions />}
          {tabPosition === 3 && <UpLinks />}
        </Content>
      </React.Fragment>
    );
  };

  renderReadme = (readMe: string) => {
    const encodedReadme = preventXSS(readMe);

    return <Readme description={encodedReadme} />;
  };

  handleChange = (event: any, tabPosition: number) => {
    event.preventDefault();
    this.setState({ tabPosition });
  };
}

export default DetailContainer;
