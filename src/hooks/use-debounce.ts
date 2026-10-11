import { useEffect, useState } from "react";

/**
 * Returns a debounced copy of `value`, updated only after `delay` ms
 * have passed without `value` changing.
 *
 * সহজ ভাষায়: value থামার delay ms পর নতুন value ফেরত দেয়।
 *
 * @example
 * const debouncedQuery = useDebounce(query, 500);
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value); // শুরুতে আসল value

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay); // delay ms পরে update

    return () => clearTimeout(timer); // value/delay বদলালে বা unmount হলে আগের timer cancel (এটাই debounce)
  }, [value, delay]);

  return debouncedValue;
}
