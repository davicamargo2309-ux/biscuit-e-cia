const supabase = window.supabase.createClient('SUA_URL_AQUI', 'SUA_CHAVE_ANON_AQUI');

async function carregarProdutosDoBanco() {
  const { data, error } = await supabase.from('produtos').select('*');
  if (!error && data) {
    products = data;
    renderProducts();
  }
}