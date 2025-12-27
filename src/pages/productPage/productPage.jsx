import { useParams } from "react-router-dom";

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchProduct } from '../../slices/productSlice';

import Products from '../../components/Products/Products'

import Loader from "../../components/States/Loader";
import ErrorMessage from "../../components/States/ErrorMessage";

import styles from "./productPage.module.scss"


function ProductPage() {
    const { id } = useParams();
    const productState = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!productState.product.id || +productState.product.id !== +id) {
            dispatch(fetchProduct(id));
        }
    }, []);

    useEffect(() => {
        document.title = id ? `Product #${id}` : 'Product';
    }, [id]);

    if (productState.error !== null) return (<ErrorMessage errorText={productState.error} />);

    if (productState.state === 'loading') return <Loader />;

    if (+productState.product.id !== +id) {
        return <Loader />;
    }
    return (
        <>
            <div className={styles.productPageBlock}>
                <div className="content">
                    <div className={styles.productPageContentBlock}>
                        <div className={styles.productPageContentBlock__image}>
                            <img src={productState.product.image}></img>
                        </div>
                        <div className={styles.productPageContentBlock__info}>
                            <h3 className={styles.brand}>{productState.product.brand}</h3>
                            <h1 className={styles.title}>{productState.product.title}</h1>
                            <button className={styles.button}>BUY NOW - ${productState.product.price}</button>
                            <div className={styles.aboutProduct}>
                                <h2 className={styles.aboutProduct__title}>About this product</h2>
                                <p className={styles.aboutProduct__description}>{productState.product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.recommendedBlock}>
                <div className="content">
                    <h1 className={styles.recommendedBlock__title}>Recommended For You</h1>
                    <Products filter="recommended" limit={10} brand={productState.product.brand} category={productState.product.category} excludeId = {Number(id)} />
                </div>
            </div>
        </>
    )
}

export default ProductPage