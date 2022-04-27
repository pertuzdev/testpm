const inquirer = require("inquirer");
require("colors");

const menuQuestions = [
  {
    type: "list",
    name: "option",
    message: "Seleccione una opción:",
    pageSize: "8",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Dias de racha`,
      },
      {
        value: "2",
        name: `${"2.".green} Calcular máxima racha`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir\n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=============================".green);
  console.log("   Selecciona una opcion".white);
  console.log("=============================".green);

  const { option } = await inquirer.prompt(menuQuestions);

  return option;
};

const pauseQuestions = [
  {
    type: "input",
    name: "keyPressed",
    message: `Presione ${"ENTER".green} para continuar `,
  },
];

const pause = async () => {
  await inquirer.prompt(pauseQuestions);
};

module.exports = {
  inquirerMenu,
  pause,
};
