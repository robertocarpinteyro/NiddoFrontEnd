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
      "This is a section of some simple filler text, also known as placeholder text.",
    name: "John McCulling",
    title: "CEO / Datadrift",
    image:
      "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112",
  },
  {
    quote:
      "This is a section of some simple filler text, also known as placeholder text.",
    name: "Kate Berg",
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
                className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-8 py-6 md:gap-6"
              >
                <div className="max-w-md text-center text-white lg:text-lg">
                  {testimonial.quote}
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <img
                      src={testimonial.image}
                      loading="lazy"
                      alt={testimonial.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                      {testimonial.title}
                    </p>
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
