export interface SearchResult {
    id: string;
    name: string;
    type: 'Room' | 'City' | 'Building';
    city: string;
  }