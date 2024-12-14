import SignUpForm from "./SignUpForm";
import logo from "/public/logo.svg";
import styles from "./AuthPage.module.css";

export default function AuthPage() {
  return (
    <div
      className={`py-4 flex items-center justify-center min-h-screen shadow-xl  ${styles.backgroundImage}`}
    >
      <div className="bg-white py-4 px-7 w-[40%] max-lg:w-[60%] max-md:w-[70%] max-sm:w-[90%] max-w-[700px] rounded-md overflow-y-auto max-h-[95vh]">
        <div className=" flex justify-center">
          <div className="logo w-[100px] h-[100px]">
            <img className="w-full h-full" src={logo} alt="logo" />
          </div>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
