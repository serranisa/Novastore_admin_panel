function Login({ onLogin }) {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-blue-500/50">N</div>
          <h1 className="text-3xl font-bold text-white tracking-wider">NovaStore DB</h1>
          <p className="text-slate-400 mt-2">Merkezi Envanter Yönetim Sistemi</p>
        </div>
        <form onSubmit={onLogin} className="space-y-6">
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

export default Login;