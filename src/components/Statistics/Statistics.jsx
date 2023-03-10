import PropTypes, { string } from "prop-types";
import css from './Statistics.module.css';

const randomiseBackgroundColor = () => {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')'
  );
};

const Statistics = ({ title = false, stats }) => {
  return (
    <section className={`${css.statistics}`}>
      {title && <h2 className={`${css.title}`}>{title}</h2>}

      <ul className={`${css.statList}`}>
        {stats.map(stats => (
          <li
            className={`${css.item}`}
            key={stats.id}
            style={{
              background: randomiseBackgroundColor(),
            }}
          >
            <span className={`${css.label}`}>{stats.label}</span>
            <span className={`${css.percentage}`}>{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired, label:string.isRequired, percentage:PropTypes.number.isRequired})).isRequired,
};

export default Statistics;
