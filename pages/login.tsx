"use client";

import Link from 'next/link';
import LoginForm from '../forms/LoginForm';
import SocialLogin from '../components/SocialLogin';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600">FLO</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow flex flex-col gap-4">
          <LoginForm />
          <SocialLogin />
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Need to create an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}