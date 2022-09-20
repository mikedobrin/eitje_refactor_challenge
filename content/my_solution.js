const MINUTE = 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    YEAR = DAY * 365;

const TIME_INTERVALS = [
    {label: "year", value: YEAR},
    {label: "day", value: DAY},
    {label: "hour", value: HOUR},
    {label: "minute", value: MINUTE},
    {label: "second", value: 1}
];

const formatDuration = (seconds =>

    seconds === "0" ? "now" :
        TIME_INTERVALS.map(timeInterval => {
            const result = Math.floor(seconds / timeInterval.value);
            seconds = seconds % timeInterval.value;
            return `${result} ${timeInterval.label}${result > 1 ? "s" : ""}`;
        })
        .filter(resultString => resultString[0] !== "0")
        .reduce((prevValue, currentValue, currentIndex, arr) => {
            const separator = currentIndex === arr.length - 1 ? " and" : ",";
            return `${prevValue}${separator} ${currentValue}`;
        })
);

console.log(formatDuration(process.argv[2]));