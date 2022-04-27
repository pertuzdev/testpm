const { inquirerMenu, pause } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
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
