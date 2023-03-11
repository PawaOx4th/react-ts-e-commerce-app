import clsx from "clsx";
import { InformationFormType } from "hook/useUserAuth";
import React, { useId } from "react";
import { Input, Label } from "./atom";

type FormTemplatePropType = {
  title?: string;
  buttonText?: string;
  email: string;
  password: string;
  onChange: (_value: string, _type: keyof InformationFormType) => void;
  onSubmit: (_email: string, _password: string) => void;
};

function FormTemplate({
  title,
  onSubmit,
  email,
  password,
  onChange,
  buttonText,
}: FormTemplatePropType) {
  const emailId = useId();
  const passwordId = useId();

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center gap-8",
        "bg-transparent",
        "h-full w-full p-8 rounded-md",
      )}
    >
      <div
        className={clsx("text-left", "w-full sm:w-[75%]   lg:w-8/12 xl:w-5/12")}
      >
        <h1 className={clsx("font-semibold m-0 text-md")}>
          {title || "Hey, hello 👋"}
        </h1>
        <small className='mt-5 block'>
          Enter the information you entered while sign in.
        </small>
      </div>
      <form
        className={clsx(
          "flex",
          "flex-col",
          "gap-1",
          "w-full sm:w-[75%]  lg:w-8/12 xl:w-5/12",
        )}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(email, password);
        }}
      >
        <div className='block relative'>
          <Input
            type='email'
            name=''
            id={emailId}
            required
            value={email}
            autoFocus
            placeholder='Email are Username'
            onChange={(e) => {
              onChange(e.target.value, "email");
            }}
            className={clsx(
              "peer",
              "py-2 px-3 rounded outline-none mt-5",
              "border-2 border-solid focus:border-main-primary",
              "w-full",
            )}
          />
          <Label
            aria-label='input-email'
            htmlFor={emailId}
            className={clsx(
              "text_small",
              "absolute top-0 left-0",
              "peer-placeholder-shown:font-normal font-medium",
              "transition-all",
              "peer-focus:text-main-primary peer-focus:uppercase",
            )}
          >
            Email &nbsp;
          </Label>
        </div>

        <div className='block relative mt-5'>
          <Input
            type='password'
            name=''
            id={passwordId}
            required
            value={password}
            placeholder='Password'
            onChange={(e) => {
              onChange(e.target.value, "password");
            }}
            className={clsx(
              "peer",
              "py-2 px-3 rounded outline-none mt-5",
              "border-2 border-solid focus:border-main-primary",
              "w-full",
            )}
          />
          <Label
            aria-label='input-password'
            htmlFor={passwordId}
            className={clsx(
              "text_small",
              "absolute top-0 left-0",
              "peer-placeholder-shown:font-normal font-medium",
              "transition-all",
              "peer-focus:text-main-primary peer-focus:uppercase",
            )}
          >
            Password &nbsp;
          </Label>
        </div>

        <button
          type='submit'
          className={clsx(
            "mt-7 py-4",
            "bg-gradient-to-br from-[#22E1FF]  via-[#1D8FE1] to-[#625EB1] rounded-md outline-none",
            "w-full h-auto",
            "hover:bg-main-primary-hover",
            "transition-all",
          )}
        >
          <span
            className={clsx(
              "text-white font-semibold tracking-wider uppercase",
            )}
          >
            {buttonText || "submit"}
          </span>
        </button>
      </form>
    </div>
  );
}

export default FormTemplate;
