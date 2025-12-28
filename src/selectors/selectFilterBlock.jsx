import { createSelector } from '@reduxjs/toolkit';

export const selectNewCollection = createSelector(
  [(state) => state.products.products, (_, limit) => limit],
  (products, limit) => {
    const newProducts = products.filter(p => p.isNew);
    return limit ? newProducts.slice(0, limit) : newProducts;
  }
);

export const selectRecommendedProducts = createSelector(
  [
    (state) => state.products.products,
    (_, limit) => limit,
    (_, __, brand) => brand,
    (_, __, ___, category) => category,
  ],
  (products, limit, brand, category) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (brand) {
      filtered = filtered.filter(p => p.brand === brand);
    }


    return limit ? filtered.slice(0, limit) : filtered;
  }
);
