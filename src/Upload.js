import { NavLink } from "react-router-dom";

function Upload() {
  return (
    <>
    <div className="upload-logo-grp">
    <NavLink className="nav-link" to="/">
      <img
        src="/playground_assets/image360f3237066646xfxxctzds9oooxmdmsgc1fsomgmgaec1517-shzp-300h.png"
        alt="IMAGE360F3237066646xfXXctzdS9oOOxMdMsGc1FsomGmGaEC1517"
        className="upload-i-m-a-g-e360f3237066646xf-x-xctzd-s9o-o-ox-md-ms-gc1fsom-gm-ga-e-c"
      /></NavLink>
    <span className="upload-text">
      <span className="upload-text01">MRI</span>
      <span>fix</span>
    </span>
  </div>
  <div className="upload-frame8">
  <NavLink className="nav-link" to="/">
    <span className="upload-text03">
      <span>Home</span>
    </span>
    </NavLink>
    {/* <span className="upload-text05">
      <span>Upload</span>
    </span> */}
    {/* <span className="upload-text07">
      <span>My Profile</span>
    </span> */}
  </div>
  <div className="upload-frame9">
    <span className="upload-text09">
      <span>Upload your images here</span>
    </span>
    <img
      src="/playground_assets/rectangle41521-r7ol-600h.png"
      alt="Rectangle41521"
      className="upload-rectangle4"
    />
  </div>
  <div className="upload-dottedbox">
    <div className="upload-group">
      <img
        src="/playground_assets/vector1521-vd6k.svg"
        alt="Vector1521"
        className="upload-vector"
      />
      <img
        src="/playground_assets/vector1521-fw7n.svg"
        alt="Vector1521"
        className="upload-vector1"
      />
    </div>
    <span className="upload-text11">
      <span>Drag and drop files to upload</span>
    </span>
    <span className="upload-text13">
      <span>OR</span>
    </span>
    <div className="upload-signupbutton">
      <span className="upload-text15">
        <span>Browse</span>
      </span>
    </div>
    <span className="upload-text17">
      <span>Supported files PNG, PDF, JPEG</span>
    </span>
  </div>
  <button className="upload-signupbutton1">
    <span className="upload-text19">
      <span>Get Results</span>
    </span>
  </button>
  <span className="upload-text21">
    <span>Uploaded Files</span>
  </span>
  <div className="upload-frame12">
    <img
      src="/playground_assets/vector1626-k1po.svg"
      alt="Vector1626"
      className="upload-vector2"
    />
    <span className="upload-text23">
      <span>patient_mri1.jpg</span>
    </span>
  </div>
  <div className="upload-frame11">
    <img
      src="/playground_assets/vector1626-r3rf.svg"
      alt="Vector1626"
      className="upload-vector3"
    />
    <span className="upload-text25">
      <span>patient_mri2.pdf</span>
    </span>
  </div>
  <div className="upload-frame10">
    <img
      src="/playground_assets/vector1626-td7g.svg"
      alt="Vector1626"
      className="upload-vector4"
    />
    <span className="upload-text27">
      <span>patient_mri3.pdf</span>
    </span>
  </div></>
  );
}

export default Upload;
