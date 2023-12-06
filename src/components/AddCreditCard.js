import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";

const AddCreditCard = ({ onAddCreditCard, lastCardId }) => {
  const clearData = {
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
  };
  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const formDataPosted = () => {
    const { cardNumber, cardHolder, expirationDate, cvv } = formData;

    if (cardNumber && cardHolder && expirationDate && cvv) {
      const creditCardInfo = {
        id: lastCardId + 1,
        cardNumber,
        cardHolder,
        expirationDate,
        cvv,
      };
      onAddCreditCard(creditCardInfo);
      setFormData(clearData);
      setToggleForm(!toggleForm);
    } else {
      alert("Fill in all required fields");
    }
  };

  const renderInputField = (label, type, id, value, placeholder = "") => (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <input
          onChange={(event) => handleInputChange(id, event.target.value)}
          required
          type={type}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          className="max-w-lg block w-full shadow-sm focus:ring-green-500 focus:border-green-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  );

  return (
    <div>
      <button
        onClick={() => setToggleForm(!toggleForm)}
        className={`bg-green-400 text-white px-2 py-3 w-full text-left ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div>
          <FaCreditCard className="inline-block align-text-top" /> Add Credit Card
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-green-500 rounded-b-md pl-4 pr-4 pb-4">
          {renderInputField("Card Number", "text", "cardNumber", formData.cardNumber)}
          {renderInputField("Card Holder", "text", "cardHolder", formData.cardHolder)}
          {renderInputField("Expiration Date", "text", "expirationDate", formData.expirationDate, "MM/YYYY")}
          {renderInputField("CVV", "text", "cvv", formData.cvv)}
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPosted}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCreditCard;
