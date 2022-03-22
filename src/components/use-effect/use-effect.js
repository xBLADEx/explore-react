import { useEffect } from 'react';

export default function UseEffect() {
  // Run once, after component mounts, equivalent to componentDidMount
  useEffect(() => {
    console.log('useEffect - Run once, after component mounts');
  }, []);

  // Cleanup, equivalent to componentWillUnmount
  // Great for cleaning up resources, such as setTimeout, Google maps, libraries/plugins etc.
  useEffect(() => {
    console.log('Once after component mounted');

    return () => {
      console.log('Once before component unmounted');
    };
  }, []);

  // Run every re-render, equivalent to componentDidUpdate and componentDidMount
  useEffect(() => {
    console.log('After it mounted the first time and after every re-render');
  });

  // Run only when the value changes, equivalent to componentDidUpdate
  const stateVariable = 0;
  useEffect(() => {
    console.log('Only when `stateVariable` changes.');
  }, [stateVariable]);

  return <div>use-effect</div>;
}
