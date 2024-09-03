import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

export function Nosotros() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 font-museo"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-0 align-middle">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
               style={{
                fontFamily: "MuseoModerno",
              }}>Encontramos la
              casa de tus sueños</p>
              <p className="mt-6 text-lg leading-8 text-black">
              En Niddo, nos dedicamos a crear experiencias inolvidables al ayudarte a encontrar la residencia que refleje tu personalidad y se adapte a tus aspiraciones.
              Nuestro enfoque personalizado se centra en entender tus preferencias y necesidades únicas, guiándote hacia el hogar de tus sueños.
              </p>
              <h2 className="text-base font-semibold leading-7 text-niddoEsmeralda">Con nosotros la casa se adapta a ti, no tú a ella.</h2>
    
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/img/casaAmbar.jpg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}