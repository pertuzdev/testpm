var dayjs = require("dayjs");

const { meditationSessions } = require("../services/meditationSessions");

const ELEMENTS = [
  {
    id: "-MrrLmGYekZt7IurwvU9",
    dateSession: "2021-12-26T12:28:03-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:46:39",
    idSession: "n0fffccc003",
  },
  {
    id: "-MrtYliMPQWj4Cl3hbTc",
    dateSession: "2021-12-26T22:44:03-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:28:30",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mrw0VktOfuFmWadMXeY",
    dateSession: "2021-12-27T10:13:12-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:36:33",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mrynd0vg3R327MfDRIP",
    dateSession: "2021-12-27T23:11:27-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:26:52",
    idSession: "n0fffccc003",
  },
  {
    id: "-Ms0CW0R3EBpNFjpvkep",
    dateSession: "2021-12-28T10:23:45-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:32:25",
    idSession: "n0fffccc003",
  },
  {
    id: "-Ms318fCYe9MrEWs8GJX",
    dateSession: "2021-12-28T23:32:59-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:28:05",
    idSession: "n0fffccc003",
  },
  {
    id: "-Ms7srmnabGdUgtuSvkz",
    dateSession: "2021-12-29T22:10:32-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:26:25",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsD7x1ZRL-EVTphj5bP",
    dateSession: "2021-12-30T22:38:54-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:42:27",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsHdCeDThcEuUqkQFUH",
    dateSession: "2021-12-31T19:38:20-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:06:33",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsNKyCQzaNm6asDnKXW",
    dateSession: "2022-01-01T22:11:59-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:25:22",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsPn5r-0QKeyW22hjpj",
    dateSession: "2022-01-02T09:38:31-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:53:08",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsSXm8Z8MPilfUsOoxp",
    dateSession: "2022-01-02T22:26:03-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:25:50",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsUpNj1VKeAAwCgddr-",
    dateSession: "2022-01-03T09:06:34-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:30:17",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsVX1SZM5OCT2aQQckm",
    dateSession: "2022-01-03T12:21:39-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:02:06",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsVXOu-FsK0x2Q4LJ03",
    dateSession: "2022-01-03T12:23:15-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:01:11",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsXiscvMgAutzHv8XQx",
    dateSession: "2022-01-03T22:37:00-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:49:02",
    idSession: "n0fffccc003",
  },
  {
    id: "-Ms_3x6L3I-2Seytl2SY",
    dateSession: "2022-01-04T09:32:40-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:28:18",
    idSession: "n0fffccc003",
  },
  {
    id: "-Msa9fB-DZOl-zkrOl8j",
    reproductionTime: "08:52",
    isSessionCompleted: true,
    dateSession: "2022-01-04T14:37:17-03:00",
    feedback: {
      comments:
        "REVISAR\\nla pausa del primer minuto fue muy larga. en el final también se notó poco fluida la sugerencia para el día con unas pequeñas pausas un poco largas",
      rating: 5,
    },
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "4b77sznyj",
  },
  {
    id: "-MsbnHsbkfoP592YvOVM",
    dateSession: "2022-01-04T22:14:22-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:25:11",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mse8E1M5Ebjg_MwCYUb",
    dateSession: "2022-01-05T09:09:30-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:43:26",
    idSession: "n0fffccc003",
  },
  {
    id: "-MshC336EuolulAzV-tb",
    dateSession: "2022-01-05T23:25:05-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:22:12",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsjBwflTMfDKpW1Fet4",
    dateSession: "2022-01-06T08:43:49-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:47:46",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsoSErS4egJ_SyeGd_C",
    dateSession: "2022-01-07T09:13:07-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:40:30",
    idSession: "n0fffccc003",
  },
  {
    id: "-MsretSaNl7xDk6Ngh0q",
    dateSession: "2022-01-08T00:11:37-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:28:02",
    idSession: "n0fffccc003",
  },
  {
    id: "-MstyuCITwIpHOdYg9tg",
    dateSession: "2022-01-08T10:58:17-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:30:17",
    idSession: "n0fffccc003",
  },
  {
    id: "-MszHkO132ujMogk5NQ0",
    dateSession: "2022-01-09T11:43:08-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:43:54",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mt0asXcpekQvbQSe-qo",
    dateSession: "2022-01-09T22:30:18-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:08:38",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mt2kyYDiWlFEN8G3jpV",
    dateSession: "2022-01-10T08:33:38-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:48:28",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mt3aen18T9pp7czG5q5",
    dateSession: "2022-01-10T12:28:13-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:02:16",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mt5Z-2dELIG8CdiFhcH",
    dateSession: "2022-01-10T21:35:48-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:45:07",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mt7uzgg8-53vqZpDEbI",
    dateSession: "2022-01-11T08:35:30-03:00",
    idUser: "-LLPtkBoQwVRpsenFA-k",
    isSessionCompleted: true,
    reproductionTime: "00:38:46",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtAlpo8AbriTLYHjmCk",
    reproductionTime: "00:50:18",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-11T21:54:22-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtD0ewA1JyFVfEpG8cs",
    reproductionTime: "00:56:22",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-12T08:22:46-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtIG2tHDMrxIFWIISlb",
    reproductionTime: "00:42:16",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-13T08:48:06-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtLEeU6dJ_U8B6Y43rk",
    reproductionTime: "00:33:30",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-13T22:40:53-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtNJTUDh6WiMpJCRuER",
    reproductionTime: "00:17:32",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-14T08:21:09-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtQP5OIEvuZZeI35IXj",
    reproductionTime: "00:29:02",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-14T22:44:34-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtSWd0rPXoGNkXBTf0X",
    reproductionTime: "01:09:13",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-15T08:36:46-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtXyI75lpbnEg0nTJ_K",
    reproductionTime: "01:13:17",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-16T10:00:04-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mt_cKCIl6ZBpLLBkNZN",
    reproductionTime: "00:38:23",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-16T22:22:56-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtbndSgme3gtVogoQkZ",
    reproductionTime: "00:45:39",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-17T08:31:37-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtcctojaYX2_meDxoqJ",
    reproductionTime: "00:05:13",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-17T12:24:18-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mtf-tfhybFGs4lAw2ZQ",
    reproductionTime: "00:30:19",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-17T23:28:25-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mth2A6111uwOAlC6HWg",
    reproductionTime: "00:50:41",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-18T08:57:35-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mtk21aNXizNiK0otxrh",
    reproductionTime: "00:38:20",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-18T22:55:51-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mtm5kxwW3I-P67o18rp",
    reproductionTime: "01:01:15",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-19T08:31:22-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mtnz3ftFv3WyhklLrYT",
    reproductionTime: "00:03",
    kind: "GUIDED_MEDITATION",
    dateSession: "2022-01-19T17:17:01-03:00",
    isSessionCompleted: false,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "i281i0m81",
  },
  {
    id: "-MtpC8qZrOzM5LPlOWxB",
    reproductionTime: "00:30:34",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-19T22:58:08-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtrIKYEwXet_QieCWAK",
    reproductionTime: "00:57:05",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-20T08:44:25-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtuQlUjeNYoOrsI96Jn",
    reproductionTime: "00:35:56",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-20T23:20:08-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtwO3srrd6-3WMyevou",
    reproductionTime: "00:54:44",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-21T08:27:34-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MtzILiGgyvQPieJjk3V",
    reproductionTime: "00:33:25",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-21T22:01:26-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mu0qErDKijUXvF2kdA0",
    reproductionTime: "01:02:48",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-22T09:53:08-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mu6ZgdyJuW-37Lc7qn0",
    reproductionTime: "00:55:00",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-23T12:34:11-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-Mu8cgTdn1aIzfRAJJ-v",
    reproductionTime: "00:57:07",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-23T22:10:53-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MuAvi6wC41U9AhSbmTo",
    reproductionTime: "00:51:11",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-24T08:53:15-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MuGV64WNQVuOSfIxes_",
    reproductionTime: "00:41:05",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-25T10:50:20-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
  {
    id: "-MuJ0DFhvYqtAOTH-Hmd",
    reproductionTime: "00:20:46",
    kind: "UNGUIDED_MEDITATION",
    dateSession: "2022-01-25T22:34:14-03:00",
    isSessionCompleted: true,
    idUser: "-LLPtkBoQwVRpsenFA-k",
    idSession: "n0fffccc003",
  },
];

class User {
  // Solo nos interesa los objetos que tengan la sesión completada asi que filtramos la lista
  getCompletedSessions(sessions) {
    return sessions.filter((session) => session.isSessionCompleted === true);
  }

  // Para ambos ejercicios solo nos interesa las fechas de los obj con la sesión completada,
  // y según la lógica planteada solo nos interesa el día en si no la hora asi que formateamos la fecha para
  // que sea más fácil la manipulación en los siguients pasos
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
