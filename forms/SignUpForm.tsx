import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function SignUpForm() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/login');
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            required
            type="text"
            placeholder="Enter your username"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-600"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-600"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <div
              onClick={toggleVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {isVisible ? <FiEye className="w-5 h-5 text-gray-700" /> : <FiEyeOff className="w-5 h-5 text-gray-700" />}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              required
              type={isConfirmVisible ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-600"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
            <div
              onClick={toggleConfirmVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {isConfirmVisible ? <FiEye className="w-5 h-5 text-gray-700" /> : <FiEyeOff className="w-5 h-5 text-gray-700" />}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 py-4">
          <input type="checkbox" required className="rounded border-gray-300" />
          <span className="text-sm text-gray-600">
            I agree with the{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms
            </Link>
            {' '}and{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log In
        </Link>
      </p>
    </>
  );
}