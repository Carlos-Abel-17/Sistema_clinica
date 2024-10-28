import { useState, useEffect } from "react";
import { GiHeartOrgan, GiLiver, GiStomach } from "react-icons/gi";
import { PiBrainDuotone } from "react-icons/pi";
import { MdPregnantWoman } from "react-icons/md";

const Login = () => {
  const icons = [GiHeartOrgan, GiLiver, GiStomach, PiBrainDuotone, MdPregnantWoman];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5 flex flex-col items-center md:items-stretch">
      <div className="flex flex-col md:flex-row md:min-h-screen rounded shadow-xl bg-white w-full ">
        
   
        <div className="flex-1 bg-blue-100 p-8 flex flex-col justify-center items-center">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-800 mb-2">
              We at MediCare are
            </h2>
            <p className="text-blue-600 text-sm md:text-base">
              always fully focused on helping your child.
            </p>
          </div>
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex justify-center items-center rounded-full bg-purple-400">
            {icons.map((Icon, index) => (
              <Icon
                key={index}
                className={`absolute text-white transition-opacity duration-500 ${
                  index === visibleIndex ? "opacity-100 w-12 h-12 md:w-16 md:h-16" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
        
     
        <div className="flex-1 p-8 flex flex-col justify-center rounded-r bg-white">
          <div className="w-full mx-auto max-w-sm md:max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">Create Account</h2>
            <div className="space-y-4">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 md:py-3 rounded">
                Sign up with Google
              </button>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 md:py-3 rounded">
                Sign up with Facebook
              </button>
              <div className="relative py-3">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or</span>
                </div>
              </div>
              <input placeholder="Full Name" className="w-full px-4 py-2 md:py-3 border rounded" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 md:py-3 border rounded" />
              <input type="password" placeholder="Password" className="w-full px-4 py-2 md:py-3 border rounded" />
              <button className="w-full bg-secondary hover:bg-blue-600 text-white py-2 md:py-3 rounded">
                Create Account
              </button>
            </div>
            <p className="text-center mt-4 text-xs md:text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
