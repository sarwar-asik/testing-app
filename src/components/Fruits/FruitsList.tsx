const FruitsList = ({ fruits }: { fruits: string[] }) => {
  return (
    <div>
      <p>Fruits List </p>
      <ul>
        {fruits?.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
