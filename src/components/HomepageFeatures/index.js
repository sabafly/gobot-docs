import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import language from '@site/static/img/language.svg';
import maintenance from '@site/static/img/maintenance.svg';
import application from '@site/static/img/application-window.svg';

const FeatureList = [
  {
    title: '簡単操作',
    Svg: application,
    description: (
      <>
        スラッシュコマンドやアプリを使って簡単に操作することができます。
      </>
    ),
  },
  {
    title: '自動モデレート',
    Svg: maintenance,
    description: (
      <>
        サーバー管理に便利な多くの機能があります。
      </>
    ),
  },
  {
    title: '多言語対応',
    Svg: language,
    description: (
      <>
        利用者に合わせて自動で言語を選択します。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
