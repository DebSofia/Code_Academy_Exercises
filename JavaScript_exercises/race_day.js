let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;

if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly) {
  console.log(
    `Your race starts at 9:30 AM and your race number is: ${raceNumber}`
  );
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(
    `Your race starts at 11:00 AM and your race number is: ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(`Your race starts at 12:30 PM and your race number is: 
  ${raceNumber}`);
}
