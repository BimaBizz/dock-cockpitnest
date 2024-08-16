import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to styling',
    Svg: require('@site/static/img/tailwindcss.svg').default,
    description: (
      <>
        Flexible Webuilder template designed who want to create dynamic, easier styling Powered by Tailwindcss
      </>
    ),
  },
  {
    title: 'Powerfull Backend',
    Svg: require('@site/static/img/cockpit.svg').default,
    description: (
      <>
        Cockpit CMS powerful and easy to use as a content management system for dynamic content.
      </>
    ),
  },
  {
    title: 'Powered by Nextjs',
    Svg: require('@site/static/img/nextjs.svg').default,
    description: (
      <>
        Nextjs is a React framework for building fast and scalable web applications.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '2rem'}}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
