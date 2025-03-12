function formatDuration(seconds) {
  const result = [];
  if (seconds === 0) return "now";
  const timeTable = [
    { unit: "year", value: 3600 * 24 * 365 },
    { unit: "day", value: 3600 * 24 },
    { unit: "hour", value: 3600 },
    { unit: "minute", value: 60 },
  ];
  for (const { unit, value } of timeTable) {
    const time = Math.floor(seconds / value);
    time > 0 && result.push(`${time} ${unit}${time > 1 ? "s" : ""}`);
    seconds %= value;
  }
  seconds > 0 && result.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
  return result.length > 1
    ? result.slice(0, -1).join(", ") + " and " + result.slice(-1)
    : result[0];
}

console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(31536000)); // "1 year"
