import { useState } from 'react';

export function UseTimer() {
  const [data, setData] = useState<any>(null);
  return { data, setData };
}

export default UseTimer;
