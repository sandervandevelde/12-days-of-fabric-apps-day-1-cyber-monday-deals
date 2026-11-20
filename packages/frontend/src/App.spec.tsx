//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>
//-----------------------------------------------------------------------

import { act, fireEvent, render, screen } from '@testing-library/react';
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
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it('combines store and minimum discount filters and restores all deals', () => {
    render(<App />);
    expect(screen.getAllByRole('article')).toHaveLength(16);
    fireEvent.change(screen.getByLabelText('Store'), { target: { value: 'Oops! Outlet' } });
    expect(screen.getAllByRole('article')).toHaveLength(5);
    fireEvent.change(screen.getByLabelText('Minimum advertised discount'), { target: { value: '50' } });
    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByRole('heading', { name: 'Sock GPS Mini' })).toBeVisible();
    fireEvent.change(screen.getByLabelText('Minimum advertised discount'), { target: { value: '80' } });
    expect(screen.getByText('No deals in this aisle')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Reset filters' }));
    expect(screen.getAllByRole('article')).toHaveLength(16);
  });

  it('shows three scenes in order and lets a shopper pause, replay, and close a film', () => {
    vi.useFakeTimers();
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Watch Wi-Fry Toaster film' }));
    expect(screen.getByText(/Pair breakfast/)).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Pause Wi-Fry Toaster film' }));
    act(() => vi.advanceTimersByTime(3400));
    expect(screen.getByText(/Pair breakfast/)).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Resume Wi-Fry Toaster film' }));
    act(() => vi.advanceTimersByTime(3400));
    expect(screen.getByText(/phone gets the news first/)).toBeVisible();
    act(() => vi.advanceTimersByTime(3400));
    expect(screen.getByText(/leaves you on read/)).toBeVisible();
    act(() => vi.advanceTimersByTime(3400));
    fireEvent.click(screen.getByRole('button', { name: 'Replay Wi-Fry Toaster film' }));
    expect(screen.getByText(/Pair breakfast/)).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Close Wi-Fry Toaster film' }));
    expect(screen.queryByText(/Pair breakfast/)).not.toBeInTheDocument();
  });
});
