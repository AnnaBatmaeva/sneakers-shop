import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Products from '../../components/Products/Products'
import styles from "./catalog.module.scss"
import Loader from '../../components/States/Loader';
import ErrorMessage from '../../components/States/ErrorMessage';

import { setBrand, setGender } from '../../slices/filtersSlice'
import { fetchProducts } from '../../slices/productsSlice';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Catalog() {

  const dispatch = useDispatch();
  const productsCount = useSelector(state => state.products.products.length);
  const productsState = useSelector(state => state.products);
  const filters = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [filters, dispatch]);

  if (productsState.error !== null) return (<ErrorMessage errorText={productsState.error} />);
  if (productsState.state === 'loading') return <Loader />;


  return (
    <>
      <div className={styles.introBlock}>
        <h1 className={styles.introBlock__title}>Shop All Sneakers</h1>
      </div>
      <div className={styles.catalogBlock}>
        <div className='content'>
          <div className={styles.catalogContentBlock}>
            <div className={styles.filterBlocks}>
              <h2 className={styles.filterBlocks__title}>Filter:</h2>
              <Accordion
                defaultExpanded
                disableGutters
                elevation={0}
                sx={{
                  borderBottom: '1px solid #e5e5e5',
                  width: '300px',
                  marginBottom: '15px'
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <strong style={{ fontSize: '14px' }}>GENDER</strong>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControlLabel control={<Checkbox
                      checked={filters.gender.includes('Women')}
                      onChange={(e) => {
                        const newGender = e.target.checked
                          ? [...filters.gender, 'Women']
                          : filters.gender.filter(g => g !== 'Women');

                        dispatch(setGender(newGender));
                      }}
                    />} label="Women" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.gender.includes('Men')}
                      onChange={(e) => {
                        const newGender = e.target.checked
                          ? [...filters.gender, 'Men']
                          : filters.gender.filter(g => g !== 'Men');

                        dispatch(setGender(newGender));
                      }}
                    />} label="Men" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.gender.includes('Kids')}
                      onChange={(e) => {
                        const newGender = e.target.checked
                          ? [...filters.gender, 'Kids']
                          : filters.gender.filter(g => g !== 'Kids');

                        dispatch(setGender(newGender));
                      }}
                    />} label="Kids" />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                defaultExpanded
                disableGutters
                elevation={0}
                sx={{
                  borderBottom: '1px solid #e5e5e5',
                  width: '300px',
                  marginBottom: '15px'
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <strong style={{ fontSize: '14px' }}>BRAND</strong>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControlLabel control={<Checkbox
                      checked={filters.brand.includes('Nike')}
                      onChange={(e) => {
                        const newBrand = e.target.checked
                          ? [...filters.brand, 'Nike']
                          : filters.brand.filter(b => b !== 'Nike');

                        dispatch(setBrand(newBrand));
                      }}
                    />} label="Nike" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.brand.includes('Adidas')}
                      onChange={(e) => {
                        const newBrand = e.target.checked
                          ? [...filters.brand, 'Adidas']
                          : filters.brand.filter(b => b !== 'Adidas');

                        dispatch(setBrand(newBrand));
                      }}
                    />} label="Adidas" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.brand.includes('Air Jordan')}
                      onChange={(e) => {
                        const newBrand = e.target.checked
                          ? [...filters.brand, 'Air Jordan']
                          : filters.brand.filter(b => b !== 'Air Jordan');

                        dispatch(setBrand(newBrand));
                      }}
                    />} label="Air Jordan" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.brand.includes('Converse')}
                      onChange={(e) => {
                        const newBrand = e.target.checked
                          ? [...filters.brand, 'Converse']
                          : filters.brand.filter(b => b !== 'Converse');

                        dispatch(setBrand(newBrand));
                      }}
                    />} label="Converse" />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                defaultExpanded
                disableGutters
                elevation={0}
                sx={{
                  borderBottom: '1px solid #e5e5e5',
                  '&:before': { display: 'none' }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <strong style={{ fontSize: '14px', letterSpacing: '1px' }}>PRICE</strong>
                </AccordionSummary>

                <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <span style={{ fontSize: '12px', color: '#888' }}>FROM</span>
                      <input
                        type="number"
                        style={{
                          padding: '10px',
                          border: '1px solid #e5e5e5',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <span style={{ fontSize: '12px', color: '#888' }}>TO</span>
                      <input
                        type="number"
                        style={{
                          padding: '10px',
                          border: '1px solid #e5e5e5',
                          outline: 'none'
                        }}
                      />
                    </div>

                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={styles.productsBlock}>
              <h2 className={styles.productsBlock__title}>Results: <span className={styles.productsCount}>{productsCount}</span></h2>
              <Products />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog