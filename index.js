const { inquirerMenu, pause } = require("./helpers/inquirer");

const User = require("./models/User");

console.clear();

const user = new User();

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const streakDays = await user.getStreakDays();
        console.log(`Tu racha actual es de ${streakDays} días`);
        break;

      case "2":
        console.log("Calcular racha máxima");
        break;
    }

    await pause();
    console.log(opt, "option");
    //if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
