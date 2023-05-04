import styles from './Price.module.css'
import { price } from '../../data/priceData/price'

export const Price = () => {
    return (
        <div className={styles.container}>
            {
                price.map(item => {
                    const sale = item.sale ? styles.colorPrise : styles.normalPrice
                    const button = item.sale ? styles.buttonBackground : styles.button
                    const border = item.sale ? styles.containerPriceBorder :styles.containerPrice
                    return (
                        <div key={item.id} className={border}>
                            <p className={styles.titliPrice}>{item.title}</p>
                            <span className={sale}><sup className={styles.colorSup}>{item.currency}</sup>{item.price}</span>
                            <p className={styles.textPrice}>{item.products}</p>
                            <p className={styles.textPrice}>{item.downloads}</p>
                            <p className={styles.memory}>{item.memory}</p>
                            <button className={button}>{item.button}</button>
                        </div>
                    )
                })
            }

        </div >
    )
}