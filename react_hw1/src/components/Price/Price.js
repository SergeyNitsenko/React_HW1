import styles from './Price.module.css'
import { price } from '../../data/priceData/price'

export const Price = () => {
    return (
        <div className={styles.container}>
            {
                price.map(item => {
                    return (
                        <div key={item.id} className={styles.containerPrice}>
                            <h5>{item.title}</h5>
                            <span><sup>{item.currency}</sup>{item.price}</span>
                            <p>{item.products}</p>
                            <p>{item.downloads}</p>
                            <p>{item.memory}</p>
                            <button>{item.button}</button>
                        </div>
                    )
                })
            }

        </div >
    )
}