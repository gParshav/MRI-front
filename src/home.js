
function home() {
  return (
    <>
    {/* <div className="home-logo-grp">
      <img
        src="/playground_assets/image360f3237066646xfxxctzds9oooxmdmsgc1fsomgmgaec9110-j4bj-300h.png"
        alt="IMAGE360F3237066646xfXXctzdS9oOOxMdMsGc1FsomGmGaEC9110"
        className="home-i-m-a-g-e360f3237066646xf-x-xctzd-s9o-o-ox-md-ms-gc1fsom-gm-ga-e-c" />
      <span className="home-text">
        <span className="home-text01">MRI</span>
        <span>fix</span>
      </span>
    </div> */}
    <div className="home-frame3">
        <span className="home-text03">
          <span>Deliver accurate and timely healthcare</span>
        </span>
        <span className="home-text05">
          <span>
            A trustworthy website that you can rely on for fixing complex
            MRIs with improved imaging
          </span>
        </span>
      </div><button className="home-signupbutton">
        <span className="home-text07">
        <NavLink className="nav-link" to="/upload">
          <span>Upload</span>
          </NavLink>
        </span>
      </button><div className="home-frame4">
        <span className="home-text09">
          <span>What do we do?</span>
        </span>
        <span className="home-text11">
          <span>
            We are a team of software engineers that built and effcetive
            platform for doctors, who are confused while reading MRIs and
            find them difficult to diagnose. MRIfix will help you to, not
            only enhance the image, but also highlight the areas which
            reflect water. We transfer styles in MRI using Generative
            Adversarial Networks and convert the MRI into T1 weighted and
            T2 weighted images.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }} />
          </span>
        </span>
      </div><div className="home-frame5">
        <img
          src="/playground_assets/line71517-frdb.svg"
          alt="Line71517"
          className="home-line7" />
        <span className="home-text13">
          <span>Contact Us at: mrifix@gmail.com or +91 9876543210</span>
        </span>
      </div><div className="home-frame2">
        <span className="home-text15">
          <span>Home</span>
        </span>
        <span className="home-text17">
          <span>Upload</span>
        </span>
        <span className="home-text19">
          <span>My Profile</span>
        </span>
      </div><div className="home-frontpagevector">
        <img
          src="/playground_assets/frame71075-a08y.svg"
          alt="Frame71075"
          className="home-frame7" />
      </div></>
  );
}

export default home;
