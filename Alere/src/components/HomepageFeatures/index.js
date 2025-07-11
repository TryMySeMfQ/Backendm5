import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Entenda mais sobre a Alere',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Alere é uma API desenvolvida para facilitar o acesso a informações.
        Acesse a documentação para entender como funciona a API e como utilizá-la.
      </>
    ),
  },
  {
    title: 'Explore a API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Sintasse a vontade para explorar as funcinalidades e recursos da API.
      </>
    ),
  },
  {
    title: 'Ferramentas de Desenvolvimento',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Informamos as técnologias e ferramentas utilizadas para desenvolver a Alere,
        garantindo que você tenha uma boa experiência ao testar a API em sua maquina!
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
