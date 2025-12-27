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
    (_, __, ___, ____, excludeId) => excludeId
  ],
  (products, limit, brand, category, excludeId) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (brand) {
      filtered = filtered.filter(p => p.brand === brand);
    }

    if (excludeId) {
      filtered = filtered.filter(p => Number(p.id) != Number(excludeId));
    }

    return limit ? filtered.slice(0, limit) : filtered;
  }
);
