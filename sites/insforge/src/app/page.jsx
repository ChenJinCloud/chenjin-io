import site from '../../site.json';

export default function Page() {
  return (
    <main>
      <h1>InsForge</h1>
      <p className="intro">InsForge 旗下两个产品的动态、用例与实践。</p>
      <div className="products">
        {site.products.map((product) => (
          <section className="product" key={product.id} aria-labelledby={`${product.id}-title`}>
            <div className="product-heading">
              <h2 id={`${product.id}-title`}><a href={product.origin} target="_blank" rel="noopener noreferrer" aria-label={`${product.domain} 产品官网（新窗口）`}>{product.domain}</a></h2>
            </div>
            <div className="categories">
              {site.sections.map((label) => (
                <div key={label}>
                  <h3>{label}</h3>
                  <p>{site.sectionDescriptions[label]}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
