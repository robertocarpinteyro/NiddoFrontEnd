import React from "react";
import Head from "next/head";
import Script from "next/script";

interface MarkProps {
  children: React.ReactNode;
}

const Mark: React.FC<MarkProps> = ({ children }) => {
  return (
    <mark className="mx-1 text-black bg-niddoEsmeralda rounded-md ring-niddoEsmeralda ring-4 dark:ring-niddoEsmeralda dark:bg-niddoEsmeralda dark:text-black">
      {children}
    </mark>
  );
};

const ThreeColTestimonials: React.FC = () => {
  const data = [
    {
      content: (
        <>
          La primera impresión una pantalla bien estructurada normal,
          posteriormente al interactuar te va gustando más la dinámica del{" "}
          <Mark>chat de nidia</Mark> y los recorridos.
        </>
      ),
      author: "Ricardo Leonardo",
      title: "",
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100",
    },
    {
      content: (
        <>
          Me gusto mucho que hubiera una <Mark> virtual</Mark>, te hace sentir
          que vas completamente acompañado en cada paso.
        </>
      ),
      author: "Gabriel Gutierrez",
      title: " ",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&crop=faces&fit=crop&w=100&h=100&q=80",
    },
    {
      content: (
        <>
          Me sorprendió lo eficiente que puede ser la <Mark>inteligencia artificial.</Mark> 
        </>
      ),
      author: "Alejandro Zarazua",
      title: "",
      avatar:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&q=80&w=100&h=100",
    },
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com/" />
      </Head>
      <Script
        strategy="lazyOnload"
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js"
        integrity="sha512-qw2bX9KUhi7HLuUloyRsvxRlWJvj0u0JWVegc5tf7qsw47T0pwXZIk1Kyc0utTH3NlrpHtLa4HYTVUyHBr9Ufg=="
        crossOrigin="anonymous"
      ></Script>
      <div className="pb-5">
        <div className="container p-6 mx-auto mb-10 xl:px-0">
          <div className="flex flex-col gap-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <p className="text-lg leading-relaxed mb-4">{item.content}</p>
                <div className="flex items-center">
       
                    <svg
                
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="24px"
                      height="24px"
                    >
                      <path
                        fill="#000000"
                        d="M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m256 16a72 72 0 1 0 0-144a72 72 0 1 0 0 144"
                      />
                    </svg>
             
                  <div className="ml-4">
                    <div className="text-lg font-semibold">{item.author}</div>
                    <div className="text-gray-600 dark:text-gray-400">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColTestimonials;
