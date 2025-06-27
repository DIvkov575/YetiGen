import Link from 'next/link'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm'
import { Navigation } from '@/components/Navigation'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
          Reset Password
        </h1>
        <ForgotPasswordForm />
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}