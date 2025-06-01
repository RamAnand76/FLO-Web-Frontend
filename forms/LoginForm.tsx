import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function LoginForm() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          required
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-600"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <div className="relative">
          <input
            required
            type={isVisible ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-600"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {isVisible ? <FiEye className="w-5 h-5 text-gray-700" /> : <FiEyeOff className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between my-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <Link href="#" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  );
}