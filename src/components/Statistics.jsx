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
        {stats.map(el => (
          <li
            className={`${css.item}`}
            key={el.id}
            style={{
              background: randomiseBackgroundColor(),
            }}
          >
            <span className={`${css.label}`}>{el.label}</span>
            <span className={`${css.percentage}`}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
