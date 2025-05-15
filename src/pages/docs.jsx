function Docs() {
  return (
    <section className="flex items-center justify-center w-full h-full p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 p-10 rounded-2xl bg-gray-50/30 backdrop-blur-sm">
          {/* Resumen del Proyecto */}
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 col-span-2 rounded-xl p-12 hover:shadow-xl transition-all group hover:bg-amber-400">
            <div className="space-y-4">
              <span className="text-lg font-medium text-amber-800 block">
                Sistema CRM Compina S.A.C.
              </span>
              <h1 className="text-4xl font-bold leading-tight">
                Documentación del Sistema
              </h1>
              <p className="text-lg text-amber-900">
                Sistema de gestión de clientes que permite acceder y gestionar una base de datos
                de más de 5,900 clientes. Incluye funcionalidades de búsqueda, filtrado y paginación.
              </p>
            </div>
          </div>

          {/* Tabla de Endpoints */}
          <div className="bg-blue-100 rounded-xl p-8 hover:shadow-xl transition-all group hover:bg-blue-200">
            <div className="space-y-4">
              <span className="text-lg font-medium text-blue-700 block">
                API Endpoints
              </span>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="py-2 text-left text-blue-800">Endpoint</th>
                      <th className="py-2 text-left text-blue-800">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-700">
                    <tr className="border-b border-blue-200">
                      <td className="py-2">GET /clientes</td>
                      <td className="py-2">Lista paginada de clientes con filtros opcionales</td>
                    </tr>
                    <tr>
                      <td className="py-2">GET /clientes/buscar</td>
                      <td className="py-2">Búsqueda por ID, RUC o nombre del cliente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="bg-green-100 rounded-xl p-8 hover:shadow-xl transition-all group hover:bg-green-200">
            <div className="space-y-4">
              <span className="text-lg font-medium text-green-700 block">
                Tecnologías Utilizadas
              </span>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-800">Frontend</h3>
                  <ul className="list-disc list-inside text-green-700">
                    <li>React.js</li>
                    <li>Tailwind CSS</li>
                    <li>React Router</li>
                    <li>Vite</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-800">Backend</h3>
                  <ul className="list-disc list-inside text-green-700">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>JSON Storage</li>
                    <li>RESTful API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Docs;