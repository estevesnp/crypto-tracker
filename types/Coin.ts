export interface Coin {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  marketCapUsd: number;
}

export interface DropdownCoin {
  name: string;
  id: string;
}
