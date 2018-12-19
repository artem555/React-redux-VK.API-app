import React from 'react';
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = (e) => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year);
  }

  renderTemplate = ()  => {
    const { photos, isFetching, error } = this.props;

    if(error) {
      return <p>An error occured during photo upload</p>
    }

    if(isFetching) {
      return <p>Loading...</p>
    } 
    
    else {
      return photos.map(entry => (
        <div key="entry.id" className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
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
          <h3>
            {year} year [{photos.length}]
          </h3>
          {this.renderTemplate()}
      </div>
      
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
}

