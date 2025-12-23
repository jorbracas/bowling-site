export default function RulesPage() {
  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1>Bowling Rules</h1>

      <p>
        Bowling is a sport in which players roll a heavy ball down a long lane
        to knock down ten pins.
      </p>

      <h2>Basic Rules</h2>
      <ul>
        <li>A standard game consists of 10 frames</li>
        <li>Each frame allows up to two throws</li>
        <li>A strike knocks down all pins on the first throw</li>
        <li>A spare knocks down all pins using both throws</li>
        <li>The highest possible score is 300</li>
      </ul>
    </main>
  );
}
