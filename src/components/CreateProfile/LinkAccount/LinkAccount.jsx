/**
 * The LinkAccount component is Step 2 of the Create/Update profile form.
 */

import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import LinkAccountConfirmation from './LinkAccountConfirmation';
import Dropdown from '../../../Dropdown';
import {AuthUtil} from '../../../../utility';
import {withRouter} from 'react-router-dom';

class LinkAccount extends Component {
  // Set the initial input values
  state = {
    platform: '',
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({
      platform: value
    });

    this.handleOpen();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.handleClose();
    const platform = this.state.platform;
    AuthUtil.authVia(platform, this.props.location.pathname);
  };

  render() {
    return (
      <>
        <LinkAccountConfirmation open={ this.state.open } platform={ this.state.platform } handleClose={ this.handleClose } submit={ this.handleSubmit } />
        <form className='profileform-two' autoComplete='off' onSubmit={ this.handleSubmit }>
          <span className='profileform-title'>LINK STREAMING AND GAMING ACCOUNTS</span>
          <InputLabel htmlFor='account' className='account-select'>
            Choose your platform
          </InputLabel>
          <FormControl className={ 'account-select' }>
            <Dropdown dropdownList={ ['twitch', 'google', 'facebook'] } handleChange={ this.handleChange } selectedValue={ this.state.platform } />
            <FormHelperText className='profileform__helper'>Select streaming & gaming accounts</FormHelperText>
          </FormControl>
        </form>
      </>
    );
  }
}

export default withRouter(LinkAccount);
