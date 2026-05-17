function Navbar({ onLogout }) {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/*Sol Taraf*/}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            N
          </div>
          <h1 className="text-xl font-bold tracking-wider text-slate-100">
            NovaStore <span className="text-blue-400 font-medium text-sm border border-blue-400/30 px-2 py-0.5 rounded-full ml-2">DB-ADMIN</span>
          </h1>
        </div>

        {/* Sağ Taraf*/}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-300 border-r border-slate-700 pr-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Sistem Aktif</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-medium text-slate-200 flex items-center gap-2">
              👤 Yönetici
            </span>
            <button 
               onClick={onLogout}
                className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-4 py-1.5 rounded-md transition-colors border border-red-500/20 whitespace-nowrap font-medium">
                Çıkış
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;