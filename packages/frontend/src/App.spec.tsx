//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>
//-----------------------------------------------------------------------

import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';

import App from '@/App';

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', () => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
  });
  afterEach(() => vi.unstubAllGlobals());

  it('combines store and minimum discount filters and restores all deals', () => {
    render(<App />);
    expect(screen.getAllByRole('article')).toHaveLength(6);
    fireEvent.change(screen.getByLabelText('Store'), { target: { value: 'Oops! Outlet' } });
    expect(screen.getAllByRole('article')).toHaveLength(2);
    fireEvent.change(screen.getByLabelText('Minimum advertised discount'), { target: { value: '50' } });
    expect(screen.getAllByRole('article')).toHaveLength(1);
    expect(screen.getByRole('heading', { name: 'Sock GPS Mini' })).toBeVisible();
    fireEvent.change(screen.getByLabelText('Minimum advertised discount'), { target: { value: '80' } });
    expect(screen.getByText('No deals in this aisle')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Reset filters' }));
    expect(screen.getAllByRole('article')).toHaveLength(6);
  });

  it('lets a shopper play and replay a gadget demo', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Play Wi-Fry Toaster demo' }));
    expect(screen.getByRole('button', { name: 'Replay Wi-Fry Toaster demo' })).toBeVisible();
    expect(screen.getByText(/Toast detected/)).toBeInTheDocument();
  });
});
