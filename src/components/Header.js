import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {EtherIcon, AdtIcon, ProfileIcon} from './icons/Icons';
import './Header.css';

class Header extends Component {
  render () {
    const { tokens, ethers, fetching } = this.props;
    return (
      <Toolbar className='Header'>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text='AdChain' className='HeaderTitle' />
        </ToolbarGroup>
        <ToolbarGroup>
          <EtherIcon />
          <ToolbarTitle className='HeaderText' text={fetching ? '...' : ethers + ' ETH'} />
          <ToolbarSeparator className='Separator' />
          <AdtIcon />
          <ToolbarTitle className='HeaderText' text={fetching ? '...' : tokens + ' ADT'} />
          <ToolbarSeparator className='Separator' />
          <ProfileIcon />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

Header.propTypes = {
  // Sometimes web3 returns numbers as strings because they're greater than 2^53
  tokens: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ethers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fetching: PropTypes.bool.isRequired
};

export default Header;
