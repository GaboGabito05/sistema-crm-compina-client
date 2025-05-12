function MobileMessage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center p-6 font-sans text-gray-800">
      <img src="/images/Compipro_Logo.webp" alt="Logo" className="w-[20rem] mb-8" />
      <h1 className="text-2xl font-bold mb-4">
        Sistema no disponible para celulares
      </h1>
      <p className="text-base leading-relaxed">
        Este sistema no está disponible para dispositivos móviles. Por favor, accede desde una computadora de escritorio o portátil.
      </p>
      <img src="/images/Mobile-login-rafiki.svg" alt="icon" className="w-[24rem] h-[18rem] mt-6" />
    </div>
  );
}

export default MobileMessage;