import React from 'react'

function page() {
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="min-w-full">
            {/* Le tableau existant... */}
            </table>
        </div>

        <div className="mt-6 mx-auto max-w-screen-lg">
            <h2 className="text-xl font-semibold mb-2">Ajouter une entrée</h2>
            <form>
            <div className="mb-4">
                <label htmlFor="nom" className="block text-gray-600 font-medium">Nom</label>
                <input type="text" id="nom" className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Nom" required />
            </div>
            <div className="mb-4">
                <label htmlFor="prenom" className="block text-gray-600 font-medium">Prénom</label>
                <input type="text" id="prenom" className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Prénom" required />
            </div>
            <div className="mb-4">
                <label htmlFor="projet" className="block text-gray-600 font-medium">Projet</label>
                <input type="text" id="projet" className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Projet" required />
            </div>
            <div>
                <button type="submit" className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Ajouter</button>
            </div>
            </form>
        </div>
    </div>

  )
}

export default page