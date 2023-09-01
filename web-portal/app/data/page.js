import Link from 'next/link';

export default function Home() {
  return (
    <div class="overflow-x-auto">
        <table class="min-w-full">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Projet</th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            {/* <!-- Lignes du tableau ici --> */}
                <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">1</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Doe</td>
                    <td class="px-6 py-4 whitespace-no-wrap">John</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Projet A</td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                    <button class="text-red-500 hover:text-red-700" title="Supprimer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                    </td>
                </tr>
                {/* <!-- Ajoutez d'autres lignes de données ici --> */}
                <tr>
                    <td class="px-6 py-4 whitespace-no-wrap">2</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Rivera</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Maria</td>
                    <td class="px-6 py-4 whitespace-no-wrap">Projet B</td>
                    <td class="px-6 py-4 whitespace-no-wrap">
                    <button class="text-red-500 hover:text-red-700" title="Supprimer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex justify-start mt-4">
            <Link href="/ajouter"><button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Ajouter
            </button></Link>
        </div>
    </div>
    


  )
}