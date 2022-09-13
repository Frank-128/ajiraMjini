import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [type, setType] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-between  m-4">
        <button
          className="bg-green-500 p-4 text-white mb-4  w-96 mr-2"
          onClick={() => setType(false)}
        >
          I am Looking for a job
        </button>
        <button
          className="bg-blue-100 p-4 text-white mb-4  w-96"
          onClick={() => setType(true)}
        >
          I want to hire
        </button>
      </div>
      {!type && (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className=" p-2 border w-50 mb-3  w-96"
          />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="phoneNumber"
            className=" p-2 border w-50 mb-3  w-96"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className=" p-2 border w-50 mb-3  w-96"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className=" p-2 border w-50 mb-4 w-96"
          />

          <button className="bg-green-500 p-4 text-white mb-4  w-96">
            Register
          </button>
        </>
      )}
      {type && (
        <>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
            className=" p-2 border w-50 mb-3  w-96"
          />

          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Company Phone number"
            className=" p-2 border w-50 mb-4 w-96"
          />

          <div className="w-96 flex text-gray-400  flex-row p-2 border ">
            <span className=" pr-3">Logo</span>
            <input type="file" placeholder="logo" />
          </div>
          <div className=" p-2 border w-50 mb-4 w-96 text-gray-400 ">
            <span className="pr-3">Company type</span>
            <select>
              <option></option>
              <option>Accounting</option>

              <option>Bussiness</option>

              <option>Catering</option>
              <option>Transport</option>
              <option>Entertainment</option>
            </select>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Company email address"
            className=" p-2 border w-50 mb-3  w-96"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className=" p-2 border w-50 mb-4 w-96"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Input again the password"
            className=" p-2 border w-50 mb-4 w-96"
          />

          <button className="bg-green-500 p-4 text-white mb-4  w-96">
            Register
          </button>
        </>
      )}
    </div>
  );
}

export default Register;
