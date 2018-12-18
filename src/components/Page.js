import React from 'react';
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = (e) => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year);
  }

  render() {
    const { year, photos, isFetching } = this.props;
    return (
      <div className="ib page">
        <button className="btn" onClick={this.onBtnClick}>2018</button>{' '}
        <button className="btn" onClick={this.onBtnClick}>2017</button>{' '}
        <button className="btn" onClick={this.onBtnClick}>2016</button>{' '}
        <button className="btn" onClick={this.onBtnClick}>2015</button>{' '}
        <button className="btn" onClick={this.onBtnClick}>2014</button>{' '}
        <p>You have {photos.length} from {year} year</p>
        <p>
          <h3>{year} year</h3>
          {isFetching ? <p>Loading...</p> : <p>You have {photos.length} photos</p>}
        </p>
      </div>
      
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
}

