import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Inscription</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 font-medium">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Nom d'utilisateur"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Adresse e-mail"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium">Mot de passe</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Mot de passe"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              <Link href="/data">S'inscrire</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
