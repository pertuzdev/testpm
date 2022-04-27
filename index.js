const { inquirerMenu, pause } = require("./helpers/inquirer");

const User = require("./models/User");

console.clear();

const main = async () => {
  let opt = "";
  const user = new User();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const streakDays = await user.getStreakDays();
        console.log(`Tu racha actual es de ${streakDays} días`);
        break;

      case "2":
        const maxStrakDays = await user.getMaxStreakDays();
        console.log(`Tu racha máxima ha sido ${maxStrakDays}`);
        break;
    }

    await pause();
    //console.log(opt, "option");
    //if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
