const Navbar = () => {
  return (
    <header className="bg-main-orange h-16 w-full flex items-center justify-between px-8 shadow-lg z-10">
      <div className="flex items-center gap-3">
        <div className="bg-white p-1 rounded-md">
          <span className="text-main-orange font-bold text-xl">ICE</span>
        </div>
        <h1 className="text-white font-bold text-xl tracking-wide">
          Gestor de Órdenes
        </h1>
      </div>

      <div className="flex items-center gap-4 text-white">
        <span className="text-sm font-medium">Administrador</span>
        <div className="w-10 h-10 bg-orange-800 rounded-full flex items-center justify-center border-2 border-white/30">
          <span className="font-bold">A</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;