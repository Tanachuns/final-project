const FooterContainer = () => {
    return ( 
        <footer class="bg-blue text-light text-center text-lg-start">
  <div class="container p-4 ">
    <div class="row m-auto">
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <img src="/images/footer-logo.png" alt="logo" class="img-fluid" width={200}/>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Agent/Broker</h5>
        <ul class="list-unstyled mb-0">
          <li>
            <a href="/about">Agent/Broker</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">About</h5>
        <ul class="list-unstyled mb-0">
          <li>
            <a href="/about">Our Company</a>
          </li>
          <li>
             <a href="https://storyset.com/people">
            People illustrations by Storyset
            </a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Contact Us</h5>
        <ul class="list-unstyled mb-0">
          <li>
            <h1 className="text-red">1234</h1>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>);
}
 
export default FooterContainer ;