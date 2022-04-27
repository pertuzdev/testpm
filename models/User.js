var dayjs = require("dayjs");

const { meditationSessions } = require("../services/meditationSessions");

/**
 * No use ningún método para odenar porque verifique que la lista ya estaba ordenada,
 * sin embargo de no ser así seria uno de los primeros pasos, ordernar por fecha
 */

class User {
  // Solo nos interesa los objetos que tengan la sesión completada asi que filtramos la lista
  getCompletedSessions(sessions) {
    return sessions.filter((session) => session.isSessionCompleted === true);
  }

  // Para ambos ejercicios solo nos interesa las fechas de los obj con la sesión completada,
  // y según la lógica planteada solo nos interesa el día en si no la hora
  getDatesArr(sessions) {
    return sessions.map((session) =>
      dayjs(session.dateSession).format("YYYY/MM/DD")
    );
  }

  // Como dice en el documento, tener varias sesiones en un mismo día no aumenta la racha
  removeDuplicatedDates(datesArr) {
    return datesArr.filter((date, index) => datesArr.indexOf(date) === index);
  }

  //  Comparamos la fecha del dia siguiente con el anterior para saber si son dias consecutivos,
  //   el último número de las variables pairs/consecutives corresponden a la racha actual
  // guardamos en un array todas las rachas
  countConsecutivesDays(datesArr) {
    const pairsInitialValue = 1;
    const consecutivesArr = [];
    const consecutives = datesArr.reduce((pairs, start, i, dates) => {
      const end = dates[i + 1];
      if (end !== undefined) {
        if (start.add(1, "day") - end === 0) pairs++;
        else {
          consecutivesArr.push(pairs);
          pairs = 1;
        }
      }

      return pairs;
    }, pairsInitialValue);

    return { consecutives, consecutivesArr };
  }

  // Necesitamos preparar la data para que sea más fácil su manipulación, me deshago de todo lo que no
  // necesitaré o lo que me pueda complicar el algoritmo
  prepareData(sessions) {
    const completedSessions = this.getCompletedSessions(sessions);
    const datesArr = this.getDatesArr(completedSessions);
    const dates = this.removeDuplicatedDates(datesArr);

    return dates;
  }

  async getStreakDays() {
    const sessions = await meditationSessions();

    const dates = this.prepareData(sessions);

    const { consecutives } = this.countConsecutivesDays(
      dates.map((date) => dayjs(date))
    );

    return consecutives;
  }

  async getMaxStreakDays() {
    const sessions = await meditationSessions();

    const dates = this.prepareData(sessions);

    const { consecutivesArr } = this.countConsecutivesDays(
      dates.map((date) => dayjs(date))
    );

    return Math.max(...consecutivesArr);
  }
}

module.exports = User;
