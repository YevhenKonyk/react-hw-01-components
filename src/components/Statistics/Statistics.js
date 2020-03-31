import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statstics.module.css';

const Statistics = ({ title, stats }) => (
  <>
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      {stats.length > 0 && (
        <ul className={styles.list}>
          {stats.map(item => (
            <li key={item.id} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  </>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
