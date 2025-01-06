import Link from "next/link";

export default function Home() {
  const classes = ["BBA-LLB", "BA-LLB", "LLB", "LLM"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-50 to-gray-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Welcome to the GDG Biometric Class Portal
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-700 font-semibold mb-8 sm:mb-12">
          School of Law - MITWPU
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-12 sm:mb-16">
          Select your class below to access attendance and other details.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-3xl justify-center">
        {classes.map((className) => (
          <Link key={className} href={`/${className}`} passHref>
            <button className="w-full max-w-xs text-sm sm:text-base lg:text-lg font-semibold text-white bg-blue-700 py-2 sm:py-3 px-4 sm:px-6 rounded-md shadow-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-transform duration-300 transform hover:scale-105">
              {className}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
