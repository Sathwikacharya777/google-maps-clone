import Link from 'next/link';

// API 1: Fetch all products
async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=12');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function ProductPage() {
  const data = await getProducts();
  const products = data.products;

  return (
    <div style={{ padding: '40px', fontFamily: 'Roboto, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#202124' }}>Store Products</h1>
        <Link href="/" style={{ color: '#1a73e8', textDecoration: 'none' }}>← Back to Maps</Link>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {products.map((product: any) => (
          <Link 
            href={`/product/${product.id}`} 
            key={product.id} 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              border: '1px solid #dadce0',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'block'
            }}
          >
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>{product.title}</h3>
              <p style={{ fontWeight: 'bold', color: '#1a73e8' }}>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}