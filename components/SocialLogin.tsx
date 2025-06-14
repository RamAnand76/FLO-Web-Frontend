import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function SocialLogin() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex items-center justify-center my-4">
        <div className="border-t w-full border-gray-300"></div>
        <div className="absolute bg-white px-4 text-sm text-gray-500">OR</div>
      </div>

      <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>

      <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
        <FaGithub className="text-xl" />
        Continue with Github
      </button>
    </div>
  );
}