"use client";

import Script from "next/script";

export default function Insert() {
  return (
    <>
      {/* INSERT */}
      <section className="p-0 m-0 box-border text-main-size pb-4">
        <section className="flex justify-center items-center w-full h-full mt-20">
          <div className="flex justify-center items-center w-full h-auto max-w-insert py-8 px-4 rounded-lg bg-box-bg">
            <div className="flex flex-col justify-center items-center w-full h-full">
              {/* INSERT FORM */}
              <form
                className="w-full"
                id="insertForm"
                action="/insert"
                encType="multipart/form-data"
              >
                <div className="flex flex-col gap-insert h-full">
                  {/* SELECT INSERT */}
                  <div className="flex flex-col">
                    <label htmlFor="select">Selecione qual a tabela</label>
                    <select
                      className="border-2 border-dashed border-text-color bg-transparent rounded-sm py-1 px-4 text-text-color focus:text-text-color"
                      name="select"
                      id="select"
                      onFocus={(e) => (e.target.size = 5)}
                      onBlur={(e) => (e.target.size = 1)}
                      onChange={(e) => {
                        e.target.size = 1;
                        e.target.blur();
                      }}
                      required
                      defaultValue=""
                    >
                      <optgroup label="Tabelas de videos">
                        <option value="" disabled>
                          Selecione uma tabela
                        </option>
                        <option value="primaryslide">Slides Primarios</option>
                        <option value="carouselslide">Slides do Carousel</option>
                        <option value="frontend">Front-End</option>
                        <option value="backend">Back-End</option>
                        <option value="networkstructure">Estrutura de Rede</option>
                        <option value="cloud">Nuvem</option>
                      </optgroup>
                    </select>
                  </div>
                  {/* END SELECT INSERT */}
                  {/* INPUT ID */}
                  <div className="input-id-insert">
                    <label htmlFor="idYoutube">ID do video</label>
                    <input
                      className="input-insert"
                      type="text"
                      name="idYoutube"
                      id="idYoutube"
                      placeholder="Ex: 8uQqaauS5UA"
                      required
                    />
                  </div>
                  {/* END INPUT ID */}
                  {/* INPUT NAMES */}
                  <div className="input-id-insert">
                    <label htmlFor="creators">Nome dos criadores</label>
                    <input
                      className="input-insert"
                      type="text"
                      name="creators"
                      id="creators"
                      placeholder="Ex: Elton Kasesky, Pedro Cler"
                      required
                    />
                  </div>
                  {/* END INPUT NAMES */}
                  {/* INPUT CATALOG IMAGE */}
                  <div className="input-file">
                    <label htmlFor="catalog">Imagem de catálogo</label>
                    <div className="file-drop-insert" id="catalog-drop">
                      <input
                        type="file"
                        name="catalog"
                        id="catalog"
                        className="input-insert input-file-hidden-insert"
                        required
                      />
                      <span className="drop-text-insert">
                        <i className="bx bx-import"></i> Arraste e solte o arquivo aqui
                      </span>
                    </div>
                  </div>
                  {/* END INPUT CATALOG IMAGE */}
                  {/* INPUT BACKGROUND IMAGE */}
                  <div className="input-file">
                    <label htmlFor="background">Imagem de Fundo</label>
                    <div className="file-drop-insert" id="background-drop">
                      <input
                        type="file"
                        name="background"
                        id="background"
                        className="input-insert input-file-hidden-insert"
                        required
                      />
                      <span className="drop-text-insert">
                        <i className="bx bx-import"></i> Arraste e solte o arquivo aqui
                      </span>
                    </div>
                  </div>
                  {/* END INPUT BACKGROUND IMAGE */}
                  <button
                    type="submit"
                    className="border-none rounded-button-insert p-2 font-medium bg-main-color text-text-color transition-opacity duration-50 cursor-pointer hover:opacity-70"
                  >
                    Enviar
                  </button>
                </div>
              </form>
              {/* END INSERT FORM */}
              <div id="message" className="hidden w-full mt-5 p-2 rounded-md"></div>
            </div>
          </div>
        </section>
      </section>
      {/* END INSERT */}

      <Script src="/js/insert.js" strategy="afterInteractive" />
    </>
  );
}