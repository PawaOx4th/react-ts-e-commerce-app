import clsx from "clsx"
import React from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

type Props = {}

function PleaseConfirmPage({}: Props) {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  return (
    <div className='relative'>
      <div
        className={clsx(
          "absolute -z-10 ",
          "w-full min-h-screen",
          "bg-gradient-to-t from-[#00a8d6]/50 to-[#00997d]/50",
        )}
      >
        <div className='bg_grid' />
      </div>
      <div className={clsx("z-[2]", "w-full min-h-screen", "flex justify-center items-center")}>
        <div className={clsx("p-6 ", "bg-main-white rounded-md", "w-[500px]", "text-center")}>
          <p className={clsx("font-bold text-2xl ")}>Great !!!</p>
          <p className='mb-0'>
            Your email address <strong>{searchParams.get("email")}</strong> appears to be valid.
            Please check your inbox for a confirmation email with further instructions. Thank you🤟
            !
          </p>
          <button
            className={clsx(
              "font-bold",
              "bg-main-primary px-3 py-2 rounded-md",
              "hover:text-white   hover:ring-2 hover:ring-main-secondary ring-offset-1",
              "active:scale-95",
              "transition-all",
              "mt-5",
            )}
            onClick={() => {
              navigate("/sign-in")
            }}
          >
            Go to SignIn
          </button>
        </div>
      </div>
    </div>
  )
}

export default PleaseConfirmPage
