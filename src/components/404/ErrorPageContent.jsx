
import { Link } from "react-router-dom";
import Form from "./Form";


const ErrorPageContent = () => {
  return (
    <div className="error_page footer_apps_widget">
      <img
       
        className="img-fluid img-thumb contain"
        src="/assets/images/resource/error.png"
        alt="error.png"
      />
      <div className="erro_code">
        <h1>Ohh! Page Not Found</h1>
      </div>
      <p>We can’t seem to find the page you’re looking for</p>

      <Form />
      {/* End form */}

      <Link to="/" className="btn btn_error btn-thm">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPageContent;
