import "./Selected_characteristic.css";

interface selectedChar {
  selectedChar: string | null;
}

function Selected_characteristic({ selectedChar }: selectedChar) {
  return (
    <div>
      <h1>{selectedChar}</h1>
    </div>
  );
}

export default Selected_characteristic;
