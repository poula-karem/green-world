import SignUpForm from "./SignUpForm";
import logo from "/public/logo.svg";

export default function AuthPage() {
  return (
    <div className="bg-gradient-to-br from-[#b5d4b5] to-[#a1c4a1] py-4 flex items-center justify-center min-h-screen shadow-xl">
      <div className="bg-white py-4 px-7 w-[40%] max-w-[700px] rounded-md overflow-y-auto  max-h-[95vh] scrollbar-hidden">
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
