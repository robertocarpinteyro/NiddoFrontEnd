import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "La primera impresión una pantalla bien estructurada normal, posteriormente al interactuar te va gustando más la dinámica del chat de nidia y los reccorridos.",
    name: "Ricardo Leonardo",
    title: "CEO / Datadrift",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112",
  },
  {
    quote:
      "Me gusto mucho que hubiera una asistente virtual, te hace sentir que vas completamente acompañado en cada paso",
    name: "Gabriel Gutierrez",
    title: "CFO / Dashdash",
    image:
      "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="relative mx-auto grid  max-w-lg grid-cols-1 gap-6 lg:mr-0 lg:gap-10">
      <div className="flex flex-col rounded-3xl overflow-hidden shadow-xl shadow-green-50"></div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-4 md:grid-rows-2 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 rounded-lg bg-niddoAmarillo px-8 py-6 md:gap-6"
              >
                <div className="max-w-md text-center text-black lg:text-lg">
                  {testimonial.quote}
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  

                  <div>
                    <div className="text-center text-sm font-bold text-black sm:text-left md:text-base">
                      {testimonial.name}
                    </div>
                    <div className="flex flex-row space-x-1">
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path
                          fill="#000000"
                          d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453l-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107l-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082c.297-.268.406-.686.278-1.065"
                        />
                      </svg>
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path
                          fill="#000000"
                          d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453l-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107l-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082c.297-.268.406-.686.278-1.065"
                        />
                      </svg>
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path
                          fill="#000000"
                          d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453l-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107l-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082c.297-.268.406-.686.278-1.065"
                        />
                      </svg>
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path
                          fill="#000000"
                          d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453l-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107l-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082c.297-.268.406-.686.278-1.065"
                        />
                      </svg>
                      <svg
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path
                          fill="#000000"
                          d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453l-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107l-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082c.297-.268.406-.686.278-1.065"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
