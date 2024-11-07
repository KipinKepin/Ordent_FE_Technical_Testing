//  Task #4
/*
    In nearly every company each employee has a certain acronym containing the first 
    characters of his first and last name(s). 
    Your task is to write an acronym generator which generates an acronym for a given name. 
    You don't have to care about duplicate acronyms (someone else will do this for you). Note 
    that names can be given in upper or in lower case. The acronym shall always be upper case. 
    Normally the acronym is always the first letter of your first and the first letter of the last name 
    in upper case.

    Example:
        Thomas Meyer => TM
        martin schmidt => MS
        Jan-Erich Schmidt => JES Jan Erich Mueller => JEM
        Paul von Lahnstein => PvL
        Martin von Lahnstein-Meyer => MvLM
*/
const createInitialName = (a) => {
  const names = a.split(" ");
  let initial = "";

  for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase() === "von") {
      initial += "v";
    } else {
      const part = names[i].split("-");
      for (let j = 0; j < part.length; j++) {
        initial += part[j][0].toUpperCase();
      }
    }
  }
  return initial;
};

console.log(createInitialName("Martin von Lahnstein-Meyer"));
