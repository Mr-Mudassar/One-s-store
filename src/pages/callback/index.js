import React from "react";
import Cookies from "js-cookie";
import {
  Navigate,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Callback = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const codeInUrl = useLocation();
  console.log("codeInUrl", codeInUrl);
  const codeFromDaraz = codeInUrl.search.slice(6);

  if (token && codeInUrl.search !== "") {
    const token = Cookies.get("token");
    // const decoded = jwtDecode(token);
    const UserId = "08dc169c-2c94-4847-8d34-3b38509863bd";
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const AddStores = async () => {
      const formData = new FormData();
      formData.append("UserId", UserId);
      formData.append("Code", codeFromDaraz);
      try {
        const response = await axios.post(
          `${baseUrl}/Store/addstoredetail`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        const clientId = "501142"; // Replace with your actual client ID
        const redirectUri = "https://member.eskout.com/daraz/callback";
        const url = `https://api.daraz.pk/oauth/authorize?response_type=code&force_auth=true&redirect_uri=${redirectUri}&client_id=${clientId}`; // Replace with your authentication URL
        window.close(url, "/pop.html", "Popup Test", "width=auto, height=auto");


        console.log(response.data);
        toast.success(response.data);

        navigate("/stores");
      } catch (error) {
        toast.error(error?.data);
        console.log(error?.response?.data?.Message);
      }
    };
    AddStores();
    return null;
  } else {
    return <Navigate to={"/stores"} />;
  }
};

export default Callback;
