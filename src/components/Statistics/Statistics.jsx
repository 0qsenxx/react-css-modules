import style from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  const colors = [
    "stat-blue",
    "stat-purple",
    "stat-turquoise",
    "stat-red",
    "stat-green",
    "stat-toxic",
  ];
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.stats__title}>{title}</h2>}
      <ul className={style.stats__list}>
        {stats.map((stat) => {
          const randomColorIdx = Math.floor(Math.random() * colors.length);
          const randomColor = colors[randomColorIdx];
          return (
            <li className={style[randomColor]} key={stat.id}>
              <span className={style.stat__label}>{stat.label}</span>
              <span className={style.stat__percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
