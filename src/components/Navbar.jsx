function Navbar(){
    return (
        <nav className="top-0 left-0 right-0 backdrop-blur-lg bg-white/70 border-b border-gray-100 shadow-sm">
            <div className="flex justify-between items-center p-2 max-w-7xl mx-auto">
                <div className="flex items-center gap-8">
                    <img className="w-20 h-auto hover:scale-105 transition-transform" 
                         src="/images/logo.webp" alt="logo" />
                    <ul className="flex gap-8 text-sm font-medium bg-white/50 backdrop-blur-sm px-8 py-3 rounded-full shadow-sm">
                        <li>
                            <a href="#" target="_blank" className="hover:text-amber-600 transition-all relative group">
                                Sobre mí
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-amber-600 transition-all relative group">
                                Mis Servicios
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-amber-600 transition-all relative group">
                                Documentación
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-amber-600 transition-all relative group">
                                API RESTful
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/GaboGabito05/sistema-crm-compina-client" target="_blank" className="text-sm font-medium bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-800 transition-all hover:scale-105 shadow-sm">
                        Repositorio
                    </a>
                    <a href="https://astro-compipro-page.pages.dev/" target="_blank" className="text-sm font-medium bg-amber-300 rounded-xl px-6 py-3 hover:bg-amber-400 transition-all hover:scale-105 shadow-sm">
                        Visitar Web
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;