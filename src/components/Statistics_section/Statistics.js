import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ stats, title = 'Upload stats' }) {
  return (
    <div className={s.stats}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.items}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={`${s.item} ${s.label}`}
            key={id}
            style={{
              backgroundColor:
                label === '.pdf'
                  ? 'red'
                  : label === '.docs'
                  ? 'blue'
                  : label === '.mp3'
                  ? 'green'
                  : label === '.psd'
                  ? 'yellow'
                  : 'orange',
            }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
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
