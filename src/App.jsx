export default function App() {
  const date = new Date();
  const londonHours = String(date.getHours()).padStart(2, "0");
  const tokyoHours = calculateTimeZoneDiff(londonHours, 8)
  const newYorkHours = calculateTimeZoneDiff(londonHours, -5)
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return (
    <>
      <h1>Some Global Time Zones:</h1>
      <p>
        The time in London is: {londonHours}:{minutes}
      </p>
      <p>
        The time in New York is: {newYorkHours}:{minutes}
      </p>
      <p>
        The time in Tokyo is: {tokyoHours}:{minutes}
      </p>
    </>
  );
}

function calculateTimeZoneDiff(standardHours, diff) {
  let parsedHours = parseInt(standardHours)
  if ((parsedHours + diff) < 24 && (parsedHours + diff) >= 0) {
    return parsedHours + diff
  } else if ((parsedHours + diff) >= 24) {
    return parsedHours + diff - 24
  } else if ((parsedHours + diff) < 0) {
    return parsedHours + diff + 24
}
}
