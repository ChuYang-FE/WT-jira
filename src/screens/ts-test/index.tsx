import { useArray, useMount } from '../../utils';

interface Person {
  name: string;
  age: number;
}

export const TsReactTest = () => {
  const persons: Person[] = [
    { name: 'John', age: 24 },
    { name: 'Lily', age: 22 },
  ];

  const { value, add, removeIndex, clear } = useArray(persons);

  useMount(() => {
    console.log('useArray test');
  });

  return (
    <div>
      <button onClick={() => add({ name: 'John', age: 24 })}>add John</button>
      <button onClick={() => removeIndex(0)}>remove index 0</button>
      <button onClick={() => clear()}>clear</button>
      {value.map((person: Person, index: number) => (
        <div key={person.name + index}>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
