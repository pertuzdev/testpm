const { inquirerMenu, pause } = require("./helpers/inquirer");
const { meditationSessions } = require("./services/meditationSessions");
const User = require("./models/User");

console.clear();

const user = new User();

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        await meditationSessions();
        console.log("Dias de racha");
        break;

      case "2":
        console.log("Calcular racha");
        break;
    }

    await pause();
    console.log(opt, "option");
    //if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
