import s from './Statistics.module.css';

export default function StatisticsItem({ id, label, percentage }) {
  const labelType = label.slice(1);
  return (
    <li className={s[labelType]}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}
