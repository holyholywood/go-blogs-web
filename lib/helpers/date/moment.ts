import moment from "moment";

const getRelativeTime = (timeStamp: string) => {
  moment.locale("id");

  // Customize relative time strings for Bahasa Indonesia
  moment.updateLocale("id", {
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lalu",
      s: "beberapa detik",
      ss: "%d detik",
      m: "semenit",
      mm: "%d menit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      w: "seminggu",
      ww: "%d minggu",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun",
    },
  });
  const parsedDatetime = moment(timeStamp);

  return parsedDatetime.fromNow();
};

export { getRelativeTime };
