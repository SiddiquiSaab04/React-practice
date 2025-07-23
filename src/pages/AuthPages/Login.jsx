import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authStore from "../../store/Auth";

const schema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

function LoginForm() {
  const login = authStore((state) => state.login)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function onSubmit(data) {
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: data.username,
        password: data.password,
      }, {
        headers: {
          'Content-type': 'application/json'
        }
      })
      console.log("Login Successfully");
      console.log(response.data);      
      const { accessToken,...userData } = response.data;
      console.log(accessToken);
      
      login(userData, accessToken)
      navigate('/')

    }
    catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Login with Yup</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-semibold">Username:</label>
          <input
            type="username"
            {...register("username")}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Password:</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
