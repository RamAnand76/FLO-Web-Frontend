"use client";

import React from "react";
import SignUpForm from '../forms/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-600">FLO</h1>
          <p className="text-gray-500 mt-2">Create your account</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow flex flex-col gap-4">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}