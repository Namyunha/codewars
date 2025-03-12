function formatDuration(seconds) {
  if (seconds === 0) return "";

  const timeUnits = [
    { unit: "year", value: 365 * 24 * 3600 },
    { unit: "day", value: 24 * 3600 },
    { unit: "hour", value: 3600 },
    { unit: "minute", value: 60 },
    { unit: "second", value: 1 },
  ];

  let parts = [];

  for (const { unit, value } of timeUnits) {
    const amount = Math.floor(seconds / value);
    if (amount > 0) {
      parts.push(`${amount} ${unit}${amount > 1 ? "s" : ""}`);
      seconds %= value;
    }
  }

  return parts.length > 1
    ? parts.slice(0, -1).join(", ") + " and " + parts.slice(-1)
    : parts[0];
}

console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(31536000)); // "1 year"
