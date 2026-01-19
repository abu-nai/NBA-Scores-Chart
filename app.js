// warriorGames is an array of objects, whose KEYS have VALUES that are ALSO objects.

const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// to make the code reusable, put it all into a function declaration that we can call again.
const makeChart = (games) => {
    // create the parent element to which we will append game information to
  const ulParent = document.createElement('ul');

  // loop over each of the games using a "for... of..." loop. "for... of..." loops work with ITERABLES (arrays/strings), which warriorsGames is one of. they will not work with objects. since we are creating a function intended to be reused, do not hardcode warriorGames, but set it to the parameter that the function will take when called later.
  for (let game of games) {
    // destructure each game object in the warriorsGames array into homeTeam and awayTeam objects
    const {homeTeam, awayTeam} = game;
    // make an li for each game
    const gameLi = document.createElement('li');
    // destructure team names and points out of homeTeam and awayTeam objects to create variables with information that we want displayed. use : syntax to rename variable names so that there aren't duplicates variable names for home and away.
    const {team:hTeam, points:hPoints} = homeTeam;
    const {team:aTeam, points:aPoints} = awayTeam;
    // create text that we want to add to each gameLi
    const teamNames = `${aTeam} @ ${hTeam}`;
    // here we use let instead of const because we need to update the value in the following if else conditional
    let scoreLine;

    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    } else {
        scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }

    // create a reference to the team (away or home) objects whose team name is strictly equal to 'Golden State Warriors' using a ternary operator. this ternary operator will set the variable warriors to the homeTeam object or awayTeam object from the warriorsGames array depending on if the statement (hTeam === 'Golden State') evaluates to true or false.
    const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;

    // use another ternary operator to evaluate whether or not the Golden State Warriors (variable const warriors) have won or not and then apply the win or loss class appropriately, which at this point will highlight the scoreline green or red, respectively.
    gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');

    // add innerHTML to each gameLi
    gameLi.innerHTML = `${teamNames} ${scoreLine}`;

    // need to append the new lis to an existing object on the document in order for it to show up!
    ulParent.append(gameLi);
  }
  // this ulParent will contain all of the data 
  return ulParent;
};

// call the function makeChart() on a set of data (in this case, warriorsGames) and set it to a variable 
const chart1 = makeChart(warriorsGames);
// need to connect chart1 to the body for it and its children to exist.
// do not need to use .querySelector for the body!
document.body.prepend(chart1);