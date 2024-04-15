import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'Department Of Education',
        href: '#',
        imageSrc: 'https://tucded.edu.np/image/cache/data/Department-845x395.jpg',
        imageAlt: "DOE",
        price: '$35',
        color: 'Black',
        link: 'google.com',
    },
    {
        id: 2,
        name: 'Department Of Health',
        href: '#',
        imageSrc: 'https://publichealthupdate.com/wp-content/uploads/2020/07/DOHS-scaled.jpg',
        imageAlt: "DOH",
        price: '$35',
        color: 'Black',
        link: 'google.com'
    },
    {
        id: 3,
        name: 'Department Of Transport',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dpqvbxdpf/image/upload/h_720,c_scale,f_auto/v1610533529/uploads/CoverPic/oihkhmfxatkhsu0fq1ng.jpg',
        imageAlt: "DOT",
        price: '$35',
        color: 'Black',
        link: 'google.com'
    },
    {
        id: 4,
        name: 'Department Of Passport',
        href: '#',
        imageSrc: 'https://nepalpassport.gov.np/storage/FX4LeBP27B7bDzDMRWV0nd2dzNzhWB-metaZG9wLmpwZw==-.jpg',
        imageAlt: "DOP",
        price: '$35',
        color: 'Black',
        link: 'https://nepalpassport.gov.np/'
    },
    // More products...
]

export default function Card() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most visited</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-4">
                                <PrimaryButton className="mr-4">View</PrimaryButton>
                                <a href={product.link} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Visit website
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
