import './App.module.css';
import styles from './App.module.css';
import { Title } from './Title/Title';
import { TitleContent } from './Title/TitleContent';
import { Price } from './Price/Price';


export const App = () => {
  return (
    <div className={styles.container}>
      <Title/>
      <TitleContent/>
      <Price/>
    </div>
  );
}


