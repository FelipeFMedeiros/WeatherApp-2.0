import PropTypes from 'prop-types';

function List({ day }) {
  return (
        <li className="weather-prevision">
          <div className="list-title">
            <p>Dia { day }</p>
          </div>
          <i className="bx bxs-chevron-down-circle"></i>
        </li>
  );
}

List.propTypes = {
    day: PropTypes.number.isRequired,
  };

export default List;