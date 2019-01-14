import React from 'react'

const HomeComponent = ({
  filteredSongs,
  isLoading,
  errorMessage,
  onCardClick,
  onFavouriteToggle
}) => {
  if (isLoading) {
    // Show loader
    return (
      <div className="pt-spinner .modifier">
        <div className="pt-spinner-svg-container">
          <svg viewBox="0 0 100 100">
            <path
              className="pt-spinner-track"
              d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"
            />
            <path
              className="pt-spinner-head"
              d="M 94.5 50 A 44.5 44.5 0 0 0 50 5.5"
            />
          </svg>
        </div>
      </div>
    )
  }

  // show error message
  if (errorMessage || !filteredSongs.length) {
    return <h1>{errorMessage || 'No Songs Found'}</h1>
  }

  // display song list
  return (
    <div className="row middle-xs around-xs">
      {filteredSongs.map((songInfo, i) => (
        <div key={i} className="col-xs-4">
          <div
            onClick={() => onCardClick(songInfo)}
            className="box pt-card pt-elevation-2 pt-interactive margin-5"
            style={{ textAlign: 'center' }}
          >
            <span
              className={`pt-icon-large pt-icon-star${
                songInfo.isFavourite ? '' : '-empty'
              } favSpan`}
              onClick={e => {
                e.stopPropagation()
                onFavouriteToggle(songInfo.song)
              }}
            />
            <span
              className="pt-icon-large pt-icon-download downSpan"
              onClick={e => {
                e.stopPropagation()
                window.open(songInfo.url)
              }}
            />
            <div className="box">
              <img
                src={songInfo.cover_image}
                alt={songInfo.song}
                style={{ maxHeight: 100, maxWidth: 100 }}
              />
            </div>
            <div className="box">
              <b>Song : </b> {songInfo.song}
            </div>
            <div className="box">
              <b>Artists : </b> {songInfo.artists}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default HomeComponent
