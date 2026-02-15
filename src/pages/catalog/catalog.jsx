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
                      checked={filters.genders.includes('Women')}
                      onChange={(e) => {
                        const newGenders = e.target.checked
                          ? [...filters.genders, 'Women']
                          : filters.genders.filter(g => g !== 'Women');

                        dispatch(setGender(newGenders));
                      }}
                    />} label="Women" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.genders.includes('Men')}
                      onChange={(e) => {
                        const newGenders = e.target.checked
                          ? [...filters.genders, 'Men']
                          : filters.genders.filter(g => g !== 'Men');

                        dispatch(setGender(newGenders));
                      }}
                    />} label="Men" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.genders.includes('Kids')}
                      onChange={(e) => {
                        const newGenders = e.target.checked
                          ? [...filters.genders, 'Kids']
                          : filters.genders.filter(g => g !== 'Kids');

                        dispatch(setGender(newGenders));
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
                      checked={filters.brands.includes('Nike')}
                      onChange={(e) => {
                        const newBrands = e.target.checked
                          ? [...filters.brands, 'Nike']
                          : filters.brands.filter(b => b !== 'Nike');

                        dispatch(setBrand(newBrands));
                      }}
                    />} label="Nike" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.brands.includes('Addidas')}
                      onChange={(e) => {
                        const newBrands = e.target.checked
                          ? [...filters.brands, 'Addidas']
                          : filters.brands.filter(b => b !== 'Addidas');

                        dispatch(setBrand(newBrands));
                      }}
                    />} label="Addidas" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.brands.includes('Air Jordan')}
                      onChange={(e) => {
                        const newBrands = e.target.checked
                          ? [...filters.brands, 'Air Jordan']
                          : filters.brands.filter(b => b !== 'Air Jordan');

                        dispatch(setBrand(newBrands));
                      }}
                    />} label="Air Jordan" />
                    <FormControlLabel control={<Checkbox
                      checked={filters.brands.includes('Converse')}
                      onChange={(e) => {
                        const newBrands = e.target.checked
                          ? [...filters.brands, 'Converse']
                          : filters.brands.filter(b => b !== 'Converse');

                        dispatch(setBrand(newBrands));
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