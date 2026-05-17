import { useState } from "react";
import Navbar from "./Components/Navbar";
import { initialProducts } from "./Interfaces/Product";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hardwareList, setHardwareList] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [newModule, setNewModule] = useState({ name: "", category: "", stock: "", price: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const registerComponent = () => {
    if (!newModule.name || !newModule.category) {
      alert("Sisteme kayıt için modül adı ve kategori zorunludur.");
      return;
    }
    const componentEntry = {
      id: Date.now(),
      name: newModule.name,
      category: newModule.category,
      stock: Number(newModule.stock) || 0,
      price: Number(newModule.price) || 0
    };
    setHardwareList([...hardwareList, componentEntry]);
    setNewModule({ name: "", category: "", stock: "", price: "" });
  };

  const discardComponent = (id, name) => {
    const isConfirmed = window.confirm(`"${name}" adlı donanımı sistemden tamamen silmek istediğinize emin misiniz?\n\nBu işlem geri alınamaz.`);
    
    if (isConfirmed) {
      setHardwareList(hardwareList.filter(item => item.id !== id));
    }
  };

  const updateStock = (id, change) => {
    setHardwareList(hardwareList.map(item => {
      if (item.id === id) {
        const newStock = item.stock + change;
        return { ...item, stock: newStock >= 0 ? newStock : 0 };
      }
      return item;
    }));
  };

  const filteredHardware = hardwareList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/50">N</div>
            <h1 className="text-3xl font-bold text-white tracking-wider">NovaStore DB</h1>
            <p className="text-slate-400 mt-2">Merkezi Envanter Yönetim Sistemi</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-slate-300 text-sm mb-2">Yönetici Kimliği</label>
              <input type="text" defaultValue="admin" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-2">Güvenlik Anahtarı (Şifre)</label>
              <input type="password" defaultValue="12345" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-colors mt-4">
              Sisteme Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar onLogout={() => setIsAuthenticated(false)} />

      <main className="p-4 md:p-10 flex-grow">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Ürünler</h2>
            <div className="relative">
              <input type="text" placeholder="Modül ara..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-4 pr-10 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-72 shadow-sm bg-white text-slate-700" />
              <span className="absolute right-3 top-3 text-gray-400">🔍</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8 border border-gray-200">
            <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2"><span>⚙️</span> Yeni Komponent Kaydı</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <input type="text" placeholder="Devre Elemanı Adı" value={newModule.name} onChange={(e) => setNewModule({...newModule, name: e.target.value})} className="col-span-2 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="text" placeholder="Kategori" value={newModule.category} onChange={(e) => setNewModule({...newModule, category: e.target.value})} className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="number" placeholder="İlk Stok" value={newModule.stock} onChange={(e) => setNewModule({...newModule, stock: e.target.value})} className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="number" placeholder="Fiyat (TL)" value={newModule.price} onChange={(e) => setNewModule({...newModule, price: e.target.value})} className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mt-5 flex justify-end">
              <button onClick={registerComponent} className="bg-slate-900 text-white px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors font-semibold shadow-md">+ Sisteme İşle</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-semibold border-b border-gray-200">
                  <tr>
                    <th className="p-5">Donanım Adı</th>
                    <th className="p-5">Kategori</th>
                    <th className="p-5 text-center">Hızlı Stok Güncelleme</th>
                    <th className="p-5">Birim Fiyat</th>
                    <th className="p-5 text-center"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredHardware.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 font-semibold text-slate-800">{item.name}</td>
                      <td className="p-5"><span className="bg-gray-100 text-slate-600 px-3 py-1 rounded-full text-sm">{item.category}</span></td>
                      
                      <td className="p-5">
                        <div className="flex items-center justify-center bg-slate-100 p-1.5 rounded-lg border border-slate-200 w-max mx-auto shadow-inner">
                          <button onClick={() => updateStock(item.id, -1)} className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-red-500 hover:bg-red-50 hover:text-red-600 font-bold text-lg shadow-sm border border-slate-200 transition-all active:scale-95">-</button>
                          <span className={`font-bold w-14 text-center text-lg tracking-wide ${item.stock < 10 ? 'text-red-600' : 'text-slate-800'}`}>{item.stock}</span>
                          <button onClick={() => updateStock(item.id, 1)} className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 font-bold text-lg shadow-sm border border-slate-200 transition-all active:scale-95">+</button>
                        </div>
                      </td>

                      <td className="p-5 font-bold text-slate-700">{item.price} ₺</td>
                      <td className="p-5 text-center">
                        {/* BUTON GÜNCELLEMESİ: Artık fonksiyona ürünün adını da gönderiyoruz ki uyarı mesajında gösterebilelim */}
                        <button onClick={() => discardComponent(item.id, item.name)} className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded transition-colors text-sm font-medium border border-transparent hover:border-red-200">
                          Sistemden Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredHardware.length === 0 && (
              <div className="p-16 text-center text-slate-500 text-lg">Donanım bulunamadı.</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;