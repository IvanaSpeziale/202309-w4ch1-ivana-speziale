import { useEffect, useState } from 'react'; /* 
import { dataPointingGentlemen } from '../data/data'; */

/* type props{
  dataRepo: dataPointingGentlemen;
};  */

export function Button({ dataPointingGentlemen }) {
  console.log('Render Counter');
  const initialCounter = 0;
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    console.log('First Render Counter');
    console.log('Initial count', initialCounter);
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(dataPointingGentlemen.length);
  };

  return (
    <section className="controls">
      <p>{count} gentlemen pointing at you</p>
      <button className="button button--select" onClick={handleClick}>
        Select all
      </button>
    </section>
  );
}
