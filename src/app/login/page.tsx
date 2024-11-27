"use client";

import Script from "next/script";

export default function Login() {
  return (
    <>
      {/* LOGIN */}
      <section className="p-0 m-0 box-border text-main-size pb-4">
        <section className="flex justify-center items-center w-full h-full mt-20">
          <div className="flex justify-center items-center w-full h-auto max-w-insert py-8 px-4 rounded-lg bg-box-bg">
            <div className="flex flex-col justify-center items-center w-full h-full">
              {/* LOGIN FORM */}
              <form
                className="w-full"
                id="loginForm"
                action="/login"
                method="POST"
              >
                <div className="flex flex-col gap-insert h-full">
                  {/* EMAIL INPUT */}
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      className="border-2 border-dashed border-text-color bg-transparent rounded-sm py-1 px-4 text-text-color focus:text-text-color"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Digite seu email"
                      required
                    />
                  </div>
                  {/* END EMAIL INPUT */}
                  
                  {/* PASSWORD INPUT */}
                  <div className="flex flex-col">
                    <label htmlFor="password">Senha</label>
                    <input
                      className="border-2 border-dashed border-text-color bg-transparent rounded-sm py-1 px-4 text-text-color focus:text-text-color"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Digite sua senha"
                      required
                    />
                  </div>
                  {/* END PASSWORD INPUT */}
                  
                  {/* LOGIN BUTTON */}
                  <button
                    type="submit"
                    className="border-none rounded-button-insert p-2 font-medium bg-main-color text-text-color transition-opacity duration-50 cursor-pointer hover:opacity-70"
                  >
                    Entrar
                  </button>
                </div>
              </form>
              {/* END LOGIN FORM */}
              
              <div id="message" className="hidden w-full mt-5 p-2 rounded-md"></div>
            </div>
          </div>
        </section>
      </section>
      {/* END LOGIN */}

      {/* Custom Script (Opcional) */}
      <Script src="/js/login.js" strategy="afterInteractive" />
    </>
  );
}
