import Link from 'next/link';

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    // If the API fails, it will show this error on the screen
    throw new Error(`Product with ID ${id} not found`);
  }
  return res.json();
}

// Update: Mark the component as async and await the params
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // STEP 1: Await the params object (Crucial for Next.js 15/16)
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // STEP 2: Fetch the data using the resolved ID
  const product = await getProduct(id);

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', fontFamily: 'Roboto, sans-serif' }}>
      <Link href="/product" style={{ color: '#1a73e8', textDecoration: 'none', display: 'block', marginBottom: '20px' }}>
        ← Back to all products
      </Link>

      <div style={{ display: 'flex', gap: '40px', border: '1px solid #dadce0', padding: '30px', borderRadius: '12px', backgroundColor: 'white' }}>
        <div style={{ flexShrink: 0 }}>
           <img 
            src={product.thumbnail} 
            alt={product.title} 
            style={{ width: '300px', height: '300px', objectFit: 'contain', backgroundColor: '#f8f9fa', borderRadius: '8px' }} 
          />
        </div>
        
        <div>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '28px', color: '#202124' }}>{product.title}</h1>
          <p style={{ color: '#5f6368', fontSize: '14px', marginBottom: '15px', textTransform: 'uppercase', fontWeight: 'bold' }}>
            {product.category}
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#3c4043', marginBottom: '20px' }}>
            {product.description}
          </p>
          <h2 style={{ color: '#1a73e8', fontSize: '32px', margin: '0' }}>${product.price}</h2>
          
          <button style={{ 
            marginTop: '25px', 
            padding: '12px 32px', 
            backgroundColor: '#1a73e8', 
            color: 'white', 
            border: 'none', 
            borderRadius: '24px', 
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '16px',
            boxShadow: '0 1px 3px rgba(60,64,67,0.3)'
          }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}