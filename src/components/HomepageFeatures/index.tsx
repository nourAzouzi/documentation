import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'BeSmartHotel',
    imageUrl: '/img/beSmartHotel.png',
    description: (
      <>
        Booking engine system
      </>
    ),
  },
  {
    title: 'BeSmartConnect',
    imageUrl: '/img/beSmartConnect.png',
    description: (
      <>
        Channel & Provider manager
      </>
    ),
  },
  {
    title: 'BeSmartTrip',
    imageUrl: '/img/beSmartTrip.png',
    description: (
      <>
        OTA & DMC solution
      </>
    ),
  },
  {
    title: 'BeSmartView',
    imageUrl: '/img/beSmartView.png',
    description: (
      <>
        Buisness Barometer solution
      </>
    ),
  },
  {
    title: 'BeSmartObjectif',
    imageUrl: '/img/beSmartObjectif.png',
    description: (
      <>
        CRM & Marketing
      </>
    ),
  },
  {
    title: 'BeSmartFinance',
    imageUrl: '/img/beSmartFinance.png',
    description: (
      <>
        ERP & financial analysis 
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={imageUrl} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
