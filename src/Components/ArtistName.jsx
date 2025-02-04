import PropTypes from "prop-types"
import "./Album.css"

export const ArtistName = ({ artists }) => {
  //Variable for more than 1 artists
  const multipleArtists = artists.length > 1

  //Map artist with the correct url
  return (
    <div className="artist-names">
      {artists.map((artist, index) => (
        <div className="artist-link" key={artist.id}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noreferrer noopener">
            <h3>
              <span>
                {artist.name}
                {index <= artists.length - 2 && (multipleArtists ? "," : "")}
              </span>
            </h3>
          </a>
        </div>
      ))}
    </div>
  )
}

ArtistName.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}
