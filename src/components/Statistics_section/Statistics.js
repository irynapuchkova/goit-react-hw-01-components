import PropTypes from 'prop-types';



export default function Statistics({ stats}) {
  return (
      <ul class="stat-list">
        {stats.map(stat =>
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        )}
      </ul>
    
  )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}