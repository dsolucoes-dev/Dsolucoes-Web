import {
  MenuIcon,
  XIcon,
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Desenvolvimento de Sites.",
    description:
      "Faça com que todos vejam suas ideias por meio de um site. Alcance novos públicos, leve sua ideia longe e expanda seus projetos conosco.",
    icon: GlobeAltIcon,
  },
  {
    name: "Desenvolvimento de Sistemas.",
    description:
      "Precisando gerenciar seu negócio? Crie conosco um sistema totalmente a sua cara. Desenvolvemos e atendemos todas as suas necessidades.",
    icon: ScaleIcon,
  },
  {
    name: "Desenvolvimento de aplicativos.",
    description:
      "Qual tal levar aquela ideia fenomenal para os celulares de todos,hein!?Leve suas ideias para qualquer lugar e tenha seus projetos na palma da mão..",
    icon: LightningBoltIcon,
  },
  {
    name: "Desenvolvimento de filtro p/ social midia.",
    description:
      "Entre nas redes sociais com uma ótima identidade visual. Crie um filtro para espalhar sua marca(com um pouco de humor ou não) e alcance mais engajamento.",
    icon: AnnotationIcon,
  },
];




export default function Main() {
  return (
    <div className="bg-white">

<div className="bg-white" id="solucoes">
        <div className=" py-10 px-4 grid items-center grid-cols-1 gap-y-10 gap-x-8 sm:px-6 sm:py-5 xl:max-w-max lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-base text-indigo-600 mb-5 font-semibold tracking-wide uppercase">
             <s> Nossos Serviços</s> <br /> Nossas soluções
            </h2>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Soluções que proporcionamos a você.</h2>
            <p className="mt-4 text-gray-500">
            Procuramos construir um ecossistema completo. Pensamos em diversas situações para que não você encontre tudo em um único lugar:
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden grid grid-cols-2 grid-rows-2 gap-4 lg:grid sm:gap-6 lg:gap-8 " id="marketplace">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className=" rounded-lg p-10 "
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className=" rounded-lg p-10"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className=" rounded-lg p-10"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className=" rounded-lg p-10"
            />
          </div>
        </div>
      </div>




      <div className=" px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Fábrica de ideias 
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Somos os melhores para alavancar seus projetos.
          </p>
          <p className="mt-4 text-gray-500">
          Chegou a hora de tirar os projetos do papel e colocar em prática conosco! Proporcionamos a melhor experiência, do início ao fim. Oferecemos ao cliente:
            </p>
        </div>

        <div className="mt-10 pb-10 pt-5">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Atendimento Personalizado
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
              Nosso time de atendimento é altamente capacitado para atender e esclarecer quaisquer dúvidas e ajudar em diversas situações.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Garantia de Entrega:
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
              Somos totalmente transparentes em nossos projetos para com prazos e nos empenhamos 110% para com o bem-estar de nossos clientes.🚀
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Suporte Campeão
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
              Nossa equipe de suporte está sempre a postos para agilizar a resolução de qualquer contratempo e garantir seu sucesso.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Satisfação completa.
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
              Satisfação completa. Garantimos todos esses pontos anteriores por um único objetivo: Assegurar sua satisfação e bem estar com nossos serviços. Pois sabemos que: Seu sucesso também é nosso
              </dd>
            </div>
          </dl>
        </div>
      </div>

      



    </div>
  );
}
