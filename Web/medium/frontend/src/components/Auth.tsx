import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@nalindalal/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
//imported the types from the common package

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
    //type of state variable defined
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs,
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      //alert user that request failed
      console.log(e);
    }
    return (
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">
                {type === "signup"
                  ? "Create an Account"
                  : "Sign In to Your Account"}
              </div>
              <div className="text-slate-400">
                {type === "signin"
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <Link
                  className="pl-2 underline"
                  to={type === "signin" ? "/signup" : "/signin"}
                >
                  {type === "signin" ? "Sign Up" : "Sign In"}
                </Link>
              </div>
            </div>
            <div className="pt-8">
              {type === "signup" && (
                <LabelledInput
                  label="Name"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setpostInputs({ ...postInputs, name: e.target.value });
                  }}
                />
              )}
            </div>
            <div>
              <LabelledInput
                label="Email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setpostInputs({ ...postInputs, username: e.target.value });
                }}
              />
              <LabelledInput
                label="password"
                type={"password"}
                placeholder="Enter your password"
                onChange={(e) => {
                  setpostInputs({ ...postInputs, password: e.target.value });
                }}
              />
              <button
                onClick={sendRequest}
                type="button"
                className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus: ring-4 focus: ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark: hover: bg-gray-700
dark: focus: ring-gray-700 dark: border-gray-700"
              >
                {(type = "signup" ? "Sign up" : "Sign in")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
  }
  function LabelledInput({
    label,
    placeholder,
    onChange,
    type,
  }: LabelledInputType) {
    return (
      <div>
        <label className="block mb-2 text-sm text-black text-semibold">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2g focus: ring-blue-500 focus:border-blue-500 block w-full p-2.5 pt-2"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
};
