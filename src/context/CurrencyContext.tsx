
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define currency types
export type CurrencyCode = 'USD' | 'EUR' | 'KSH';

// Currency symbols and conversion rates (approximate)
export const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar', rate: 1 },
  EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
  KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 129.5 },
};

type CurrencyContextType = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (amount: number) => string;
  convertPrice: (amount: number) => number;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  const convertPrice = (amount: number): number => {
    const rate = CURRENCIES[currency].rate;
    return amount * rate;
  };

  const formatPrice = (amount: number): string => {
    const convertedAmount = convertPrice(amount);
    const symbol = CURRENCIES[currency].symbol;
    
    return `${symbol}${convertedAmount.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
