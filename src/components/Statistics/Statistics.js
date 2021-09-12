import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <div className={s.stats}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.items}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem
            key={id}
            id={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']).isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
