import { describe, expect, it } from 'vitest';
import { catalog, simulate } from './catalog';

describe('deal simulation', () => {
  it('drops the price and names a new supplier at each scheduled change', () => {
    const gadget = catalog[0];
    expect(simulate(gadget, 0, 11)).toMatchObject({ price: 39.99, supplier: null });
    expect(simulate(gadget, 0, 12)).toMatchObject({ price: 38.74, supplier: 'Basement & Beyond' });
    expect(simulate(gadget, 0, 42)).toMatchObject({ price: 37.49, supplier: 'The Cardboard Co.' });
  });

  it('keeps the inflated reference and never beats the original price', () => {
    catalog.forEach((gadget, index) => {
      const initial = simulate(gadget, index, 0);
      const final = simulate(gadget, index, 3600);
      expect(final.discount).toBeGreaterThan(initial.discount);
      expect(final.price).toBeGreaterThan(gadget.regular);
      expect(final.inflated).toBe(gadget.inflated);
      expect(final.buyers).toBeGreaterThan(initial.buyers);
    });
  });

  it('reveals skeptical reviews at staggered times', () => {
    expect(simulate(catalog[0], 0, 23).skeptical).toBe(false);
    expect(simulate(catalog[0], 0, 24).skeptical).toBe(true);
    expect(simulate(catalog[1], 1, 24).skeptical).toBe(false);
    expect(simulate(catalog[1], 1, 35).skeptical).toBe(true);
  });
});
