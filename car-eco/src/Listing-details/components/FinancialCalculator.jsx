// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FinancialCalculator = ({ carDetails }) => {
  const [carPrice, setCarPrice] = useState(0);
  const [interest, setInterest] = useState(0);
  const [loan, setLoan] = useState(0);
  const [payment, setPayment] = useState(0);
  const [MonthlyPaymentResult, setMonthlyPaymentResult] = useState(0);
  const CalculateMonthlyPayment = () => {
    const Principle = carPrice - payment;
    const monthlyInterestRate = interest / 1200;

    const monthlyPayment =
      (Principle *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loan)) /
      (Math.pow(1 + monthlyInterestRate, loan) - 1);
    setMonthlyPaymentResult(monthlyPayment.toFixed(2));
    console.log(monthlyPayment);
  };
  return (
    <div className="p-5 rounded-xl border shadow-md mt-5">
      <h2 className="font-medium text-2xl"> Financial Calculator</h2>
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="">Price $</label>
          <Input type="number" onChange={(e) => setCarPrice(e.target.value)} />
        </div>
        <div className="w-full">
          <label htmlFor="">Interest Rate</label>
          <Input type="number" onChange={(e) => setInterest(e.target.value)} />
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label htmlFor="">Loan Term (Months)</label>
          <Input onChange={(e) => setLoan(e.target.value)} />
        </div>
        <div className="w-full">
          <label htmlFor="">Down payment</label>
          <Input onChange={(e) => setPayment(e.target.value)} />
        </div>
      </div>
      {MonthlyPaymentResult > 0 && (
        <h2 className=" font-medium text-2xl mt-5">
          Your Monthly Payment Is :
          <span className="text-3xl text-blue-500">
            {" $ "}
            {MonthlyPaymentResult}
          </span>
        </h2>
      )}
      <Button
        onClick={CalculateMonthlyPayment}
        className="bg-primary w-full  mt-5"
        size="lg"
      >
        {" "}
        Calculate{" "}
      </Button>
    </div>
  );
};
FinancialCalculator.propTypes = {
  carDetails: PropTypes.any,
};
export default FinancialCalculator;
