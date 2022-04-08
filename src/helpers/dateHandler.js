import dayjs from "dayjs";

export class DateHandler {
  constructor(initialDate, finalDate) {
    this.initialDayjs = dayjs(initialDate) ? initialDate : dayjs("01/01/1900");
    this.finalDayjs = dayjs(finalDate) ? finalDate : dayjs("01/01/2100");
    this.hasInitialDate = false;
    this.hasFinalDate = false;
    this.initialDate = initialDate;
    this.finalDate = finalDate;
  }

  handleRange() {
    if (!this.hasFinalDate && !this.hasInitialDate) {
      return {
        startDate: dayjs()
          .subtract(1, "month")
          .subtract(1, "year")
          .startOf("month")
          .format("DD/MM/YYYY"),
        endDate: dayjs()
        .subtract(1, "month")
        .startOf("month")
        .format("DD/MM/YYYY")
      };
    }

    if (!this.hasFinalDate) {
      return {
        startDate: "01/" + this.initialDate.split("-").reverse().join("/"),
        endDate: dayjs()
          .subtract(1, "month")
          .startOf("month")
          .format("DD/MM/YYYY"),
      };
    }

    if (!this.hasInitialDate) {
      return {
        startDate: dayjs(this.finalDate)
          .subtract(1, "year")
          .format("DD/MM/YYYY"),
        endDate: "01/" + this.finalDate.split("-").reverse().join("/"),
      };
    }

    return {
      startDate: "01/" + this.initialDate.split("-").reverse().join("/"),
      endDate: "01/" + this.finalDate.split("-").reverse().join("/"),
    };
  }

  validateRange() {
    this.hasInitialDate = this.initialDate ? true : false;
    this.hasFinalDate = this.finalDate ? true : false;

    if (this.hasInitialDate && this.hasFinalDate) {
      if (dayjs(this.initialDayjs).isAfter(this.finalDayjs)) {
        throw new Error("Data inicial não pode ser maior que a data final");
      }
    }
  }
}
