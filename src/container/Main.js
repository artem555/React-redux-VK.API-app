import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';
import { handleLogin } from '../actions/UserActions';
import '../style.css';

class Main extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props;
    return (
      <div>
        <header>
          <h1>My best photo</h1>
        </header>
        <Page 
          photos={page.photos} 
          year={page.year} 
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}
        />
        <User 
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
    getPhotosAction: year => dispatch(getPhotos(year)),
    // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
    handleLoginAction: () => dispatch(handleLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
