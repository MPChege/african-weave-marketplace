
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CURRENCIES, CurrencyCode, useCurrency } from '@/context/CurrencyContext';
import { Label } from "@/components/ui/label";

const CurrencySelector = ({ showLabel = false }: { showLabel?: boolean }) => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center space-x-2">
      {showLabel && <Label htmlFor="currency-select" className="mr-2">Currency</Label>}
      <Select value={currency} onValueChange={(value: CurrencyCode) => setCurrency(value)}>
        <SelectTrigger className="w-[100px]" id="currency-select">
          <SelectValue placeholder="Currency" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(CURRENCIES).map(([code, { name, symbol }]) => (
            <SelectItem key={code} value={code as CurrencyCode}>
              {symbol} {code}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CurrencySelector;
