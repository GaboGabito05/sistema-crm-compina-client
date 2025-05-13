import Warning from "../icons/Warning";
import LinkedIn from "../icons/LinkedIn";
import GitHub from "../icons/GitHub";

function Bento() {
    return (
        <section className="flex items-center justify-center justify-self-center w-full h-full p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 grid-rows-2 gap-8 p-10 rounded-2xl bg-gray-50/30 backdrop-blur-sm">
                    <div className="bg-amber-300 col-span-1 row-span-2 rounded-xl p-12 hover:shadow-xl transition-all flex flex-col justify-between group hover:bg-amber-400">
                        <div className="space-y-4">
                            <span className="text-lg font-medium text-amber-800 block">
                                Sistema CRM
                            </span>
                            <h1 className="text-5xl font-bold leading-tight">
                                Bienvenido al sistema de gestión de clientes
                            </h1>
                        </div>
                        <a href="#" className="inline-block bg-black text-white px-8 py-4 text-lg font-medium rounded-xl hover:bg-amber-900 transition-all hover:scale-105 w-fit">
                            Ingresar
                        </a>
                    </div>
                    <div className="bg-red-100 p-10 rounded-xl hover:shadow-xl transition-all flex flex-row items-center justify-between group hover:bg-red-200">
                        <div className="space-y-3">
                            <span className="text-lg font-medium text-red-700 block">
                                Este sistema es solo para personal autorizado
                            </span>
                            <h2 className="text-3xl font-bold">
                                Advertencia
                            </h2>
                        </div>
                        <div className="w-16 h-16 text-red-500 flex-shrink-0">
                            <Warning />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <a href="https://www.linkedin.com/in/gabriel-polack-castillo/" target="_blank" 
                           className="block bg-blue-100 p-8 rounded-xl hover:shadow-xl transition-all group hover:bg-blue-200">
                            <div className="space-y-3">
                                <span className="text-lg font-medium text-blue-700 block">
                                    Conoce mi trabajo
                                </span>
                                <h2 className="text-3xl font-bold">
                                    LinkedIn
                                </h2>
                            </div>
                            <div className="mt-4 w-12 h-12 text-blue-600">
                                <LinkedIn />
                            </div>
                        </a>
                        <a href="https://github.com/GaboGabito05" target="_blank" 
                           className="block bg-gray-100 p-8 rounded-xl hover:shadow-xl transition-all group hover:bg-gray-200">
                            <div className="space-y-3">
                                <span className="text-lg font-medium text-gray-700 block">
                                    Mira mis proyectos
                                </span>
                                <h2 className="text-3xl font-bold">
                                    GitHub
                                </h2>
                            </div>
                            <div className="mt-4 w-12 h-12 text-gray-600">
                                <GitHub />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bento;