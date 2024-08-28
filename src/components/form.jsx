import { useForm } from "react-hook-form";
import { useState } from "react";
import Form2 from "./form2";

export default function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [display, setDisplay] = useState([]);

  const onSubmit = (data) => {
    setDisplay([...display, data]);
  };

  const handleClick = (item) => {
    alert(
      `First Name: ${item.firstname}\nEmail: ${item.email}\nMobile: ${item.number}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          User Registration Form
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            First Name:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("firstname", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.firstname && (
            <span className="text-red-500">First name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Mobile:</label>
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("number", { required: true, maxLength: 10 })}
          />
          {errors.number && (
            <span className="text-red-500">Mobile Number is required</span>
          )}
        </div>

        <div className="flex justify-between">
          <input
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
          />
          <input
            type="reset"
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 cursor-pointer"
          />
        </div>
      </form>

      {display.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {display.map((item, index) => (
            <div
              key={index}
              className="bg-orange-600 text-white border border-red-400 p-4 rounded-lg shadow-md cursor-pointer text-center"
              onClick={() => handleClick(item)}
            >
              <Form2
                key={index}
                firstnames={item.firstname}
                mails={item.email}
                numbers={item.number}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
