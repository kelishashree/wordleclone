function Board() {
  const rowIndices = [0, 1, 2, 3, 4, 5];
  const letterIndices = [0, 1, 2, 3, 4];

  return (
    <div className="board">
      {rowIndices.map((row) => (
        <div className="row" key={row}>
          {letterIndices.map((col) => (
            <Letter key={col} letterPos={col} attemptVal={row} />
          ))}
        </div>
      ))}
    </div>
  );
}