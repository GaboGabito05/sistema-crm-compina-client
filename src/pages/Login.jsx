function Login(){
    return (
        <section className="flex items-center justify-center w-full h-full p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 gap-0 p-10 rounded-2xl bg-gray-50/30 backdrop-blur-sm">
                    {/* Formulario */}
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-bl-2xl rounded-tl-2xl  p-10 hover:shadow-2xl transition-all">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3 bg-white/40 p-2 rounded-lg w-fit">
                                <img src="/images/logocompina.webp" alt="Compina Logo" className="w-10 h-10 object-contain" />
                                <span className="text-lg font-medium text-amber-800">
                                    Iniciar Sesión
                                </span>
                            </div>
                            
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
                                        Usuario
                                    </label>
                                    <input
                                        type="text"
                                        id="usuario"
                                        name="usuario"
                                        className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                        placeholder="Ingresa tu usuario"
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                        placeholder="Ingresa tu contraseña"
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white px-8 py-4 text-lg font-medium rounded-xl hover:bg-amber-900 transition-all hover:scale-[1.02] shadow-lg hover:shadow-amber-900/20"
                                    >
                                        Ingresar al Sistema
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-br-2xl rounded-tr-2xl p-10 hover:shadow-2xl transition-all flex items-center justify-center">
                        <img 
                            src="/images/Mobile-login-rafiki.svg" 
                            alt="Ilustración de login" 
                            className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;