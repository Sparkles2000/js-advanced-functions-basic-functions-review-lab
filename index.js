function saturdayFun() {
    console.log(`This Saturday, I want to roller-skate!`)
}
function saturdayFun(activity=`roller-skate`) {
    return `This Saturday, I want to ${activity}!`
}
let mondayWork = function(activity=`go to the office`) {
    return `This Monday, I will ${activity}.`
  }
let wrapAdjective = function(style=`*`) {
    return function(adjective=`a hard worker`) {
      return `You are ${style}${adjective}${style}!`
    }
}
let wrapAdjective1 = function(style=`||`) {
    return function(adjective=`a dedicated programmer`) {
      return `You are ${style}${adjective}${style}!`
    }
}
const Calculator = {
    add: function(a,b) {
      return 1 + 3;
    },
    subtract: function(a,b) {
      return 1 - 3;
    },
    multiply: function(a,b) {
      return 1 * 3;
    },
    divide: function(a,b) {
      return 4 / 2;
    }
  }
  function actionApplyer(start, end) {
    for (let i = 0; i < end.length; i++) {
      start = end[i](start);
    }
    return start;
  }