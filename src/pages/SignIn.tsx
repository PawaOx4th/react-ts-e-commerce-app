import clsx from "clsx";
import FormTemplate from "components/FormTemplate";
import { useGlobalLoading } from "hook/useGlobalLoading";
import useUserAuth from "hook/useUserAuth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthenticationStore from "src/store/authentication/authentication.store";

function SignIn() {
  const { onSubmitForm, informationForm, onHandleChangeInformationForm } =
    useUserAuth();
  const jwtToken = useAuthenticationStore((state) => state.jwt);
  const navigate = useNavigate();
  const { onUpdateIsOpen } = useGlobalLoading();

  useEffect(() => {
    if (jwtToken) {
      navigate("/");
    }
    return () => {};
  }, [jwtToken]);

  const handleSignIn = async (...params: Parameters<typeof onSubmitForm>) => {
    onUpdateIsOpen();
    const [data, errorMsg] = await onSubmitForm(params[0], params[1], "signIn");

    if (errorMsg) {
      toast.error(errorMsg);
    }
    if (data) {
      toast.success("Sign in successfully");
      navigate("/");
    }
    onUpdateIsOpen();
  };

  return (
    <div
      className={clsx(
        "min-h-screen w-full relative",
        "grid grid-flow-row grid-cols-12",
      )}
    >
      <div
        className={clsx(
          "col-span-full sm:col-span-3 lg:col-span-6",
          "absolute -z-10 sm:relative sm:z-0",
          "w-full min-h-screen",
          "bg-gradient-to-t from-[#0093E9]/50 to-[#80D0C7]/50",
          "flex items-center justify-center",
        )}
      >
        <div className='bg_grid' />
        {/* <img src={ShoppingBg} alt='' className='aspect-square hidden lg:block' /> */}
      </div>

      <div
        className={clsx(
          "col-span-full sm:col-span-9 lg:col-span-6",
          "md:bg-sign-in-bg bg-cover",
        )}
      >
        <FormTemplate
          buttonText='sign in'
          onSubmit={(email: string, password: string) =>
            handleSignIn(email, password, "signIn")
          }
          email={informationForm.email}
          password={informationForm.password}
          onChange={(value, type) => {
            onHandleChangeInformationForm(value, type);
          }}
        />
      </div>
    </div>
  );
}

export default SignIn;
