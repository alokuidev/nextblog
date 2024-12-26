export default function page(){
    return(
        <>
            
  <main className="blog-container">
    <div className="blog-card">
      <img src="https://via.placeholder.com/300x200" alt="Blog Image" className="blog-image"/>
      <div className="blog-content">
        <h2>Blog Title 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae magna ut lectus vehicula faucibus.</p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>

    <div className="blog-card">
      <img src="https://via.placeholder.com/300x200" alt="Blog Image" className="blog-image"/>
      <div className="blog-content">
        <h2>Blog Title 2</h2>
        <p>Aliquam eget turpis id libero pretium mollis a at urna. Sed luctus orci id quam dictum convallis.</p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>

    <div className="blog-card">
      <img src="https://via.placeholder.com/300x200" alt="Blog Image" className="blog-image"/>
      <div className="blog-content">
        <h2>Blog Title 3</h2>
        <p>Donec aliquam urna a volutpat gravida. Morbi eu augue sed erat placerat lacinia vel a erat.</p>
        <a href="#" className="read-more">Read More</a>
      </div>
    </div>
  </main>
        </>
    )
}