// src/app/en/page.tsx
import RootPage from '../page';

/**
 * Lazy Strategy: Re-export the main page.
 * This ensures the /en route stays 100% identical to the root / page.
 */
export default function EnglishPage() {
  return <RootPage />;
}