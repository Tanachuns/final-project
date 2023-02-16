const HomeContainer = () => {
    return ( <>
    <div class="container-fluid banner bg-white">
        <div class="row">
            <div class="col-md-6 d-flex justify-content-center align-items-center flex-column text-center">
                <h1 class="display-4 my-3"><b>Tanarak Insurance Protection</b></h1>
                <p>e vitae, pulvinar eu nibh. Duis tortor erat, interdum ac metus ac, viverra pulvinar nisl. Proin interdum vulputate luctus. Aliquam id turpis a mi auctor placerat. Donec gravida nunc tincidunt orci suscipit congue. Ut in arcu volutpat, tincidunt erat vel, dictum lacus.</p>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <img src="/images/home-header.png" alt="Banner " class="img-fluid h-50" />
            </div>
        </div>
    </div>

    <div className="container py-5 home-container">
        <h2 class="text-center mb-5">Our Partners</h2>
        <div class="row justify-content-center align-items-center home-partners text-center">
            <div class="col-md-2 col-6 mb-4">
                <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLWqMEi8AFBPd8lepAt9MND-6TGNZNBOvcQ&usqp=CAU" alt="Partner Logo 1" class="img-fluid"/>
            </div>
            <div class="col-md-2 col-6 mb-4">
                <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLWqMEi8AFBPd8lepAt9MND-6TGNZNBOvcQ&usqp=CAU" alt="Partner Logo 1" class="img-fluid"/>
            </div>
            <div class="col-md-2 col-6 mb-4">
                <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLWqMEi8AFBPd8lepAt9MND-6TGNZNBOvcQ&usqp=CAU" alt="Partner Logo 1" class="img-fluid"/>
            </div>
            <div class="col-md-2 col-6 mb-4">
                <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLWqMEi8AFBPd8lepAt9MND-6TGNZNBOvcQ&usqp=CAU" alt="Partner Logo 1" class="img-fluid"/>
            </div>
            
        </div>

  <h2 class="text-center mb-5">Our Insurance Plans <sup ><a href="" className="text-blue">more</a></sup></h2>
  <div class="row justify-content-center align-items-center">
    <div class="col-md-4 mb-4">
      <div class="card border-0 shadow">
        <div class="card-body text-center">
          <h3 class="card-title">Basic Plan</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h4 class="mb-4">$9.99/month</h4>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card border-0 shadow">
        <div class="card-body text-center">
          <h3 class="card-title">Standard Plan</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h4 class="mb-4">$19.99/month</h4>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="card border-0 shadow">
        <div class="card-body text-center">
          <h3 class="card-title">Premium Plan</h3>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h4 class="mb-4">$29.99/month</h4>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
    </div>
  </div>

  <div class="about-insurance py-5 m-auto text-center">
    <div class="row">
       <div class="col-md-6">
        <img src="/images/home-footer.png" alt="About Insurance" class="img-fluid"/>
      </div>
      <div class="col-md-6">
        <h2>About Our Insurance</h2>
        <p class="lead">We provide comprehensive insurance coverage to protect you and your loveWe provide comprehensive insurance coverage to protect you and your loveWe provide comprehensive insurance coverage to protect you and your loveWe provide comprehensive insurance coverage to protect you and your loved ones from unexpected events.</p>
       <div className="row">
        <div className="col">
            <h4>6/5</h4>
            <h4>User Reviews</h4>
        </div>
        <div className="col">
            <h4>50,000+</h4>
            <h4>Hospital Partners</h4>
        </div>
       </div>
        <a href="#" class="btn btn-primary mt-4">Learn More</a>
      </div>
     
    </div>
</div>


</div>


    </> );
}
 
export default HomeContainer;