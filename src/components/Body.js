import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../helpers/api.js";
import "../assets/css/styles.css";
import { IpcaCalculator } from "../helpers/ipcaCalculator.js";
import { DateHandler } from "../helpers/dateHandler.js";
import dayjs from "dayjs";

const Body = () => {
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [accumulatedTax, setAccumulatedTax] = useState(undefined);
  const [range, setRange] = useState({
    startDate: "01/01/1900",
    endDate: "01/01/2100",
  });

  const callApi = async () => {
    try {
      const handler = new DateHandler(initialDate, finalDate);
      handler.validateRange(initialDate, finalDate);

      const { startDate, endDate } = handler.handleRange();

      const response = await api.get(
        `/dados?formato=json&dataInicial=${startDate}&dataFinal=${endDate}`
      );

      const calculator = new IpcaCalculator(response.data);
      const accumulatedTax = calculator.calculateAccumulatedTax();
      setAccumulatedTax(accumulatedTax);
      setRange({
        startDate,
        endDate,
      });
    } catch (error) {
      setAccumulatedTax(undefined);
    }
  };

  return (
    <>
      <div className="center">
        <div className="form-row align-items-center aux">
          <div className="col-sm-3 my-1">
            <label className="mt-2 mb-2" htmlFor="initital-date">
              Data Inicial
            </label>
            <input
              type="month"
              className="form-control"
              id="initital-date"
              max={dayjs().format("YYYY-MM")}
              onChange={(e) => setInitialDate(e.target.value)}
            />
          </div>

          <div className="col-sm-3 my-1">
            <label className="mt-2 mb-2" htmlFor="end-date">
              Data Final
            </label>
            <input
              type="month"
              className="form-control"
              id="end-date"
              max={dayjs().format("YYYY-MM")}
              onChange={(e) => setFinalDate(e.target.value)}
            />
          </div>

          <div className="col-auto my-1 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => callApi()}
            >
              Calcular IPCA
            </button>
          </div>

          <div className="col-auto my-1 mt-4">
            {accumulatedTax && (
              <h3>
                IPCA Acumulado: <strong>{accumulatedTax}%</strong> entre{" "}
                {range.startDate} e {range.endDate}
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
