import React from "react";
import DataTableComponent from "./components/dataTable";
import { MdOutlineAddHome } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const Stores = () => {
  const token = Cookies.get("token");
  const decoded = jwtDecode(token);
  const UserId = "08dc169c-2c94-4847-8d34-3b38509863bd";
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const AuthenticToken = "54565454344342434343";

  const AddStores = async () => {
    const formData = new FormData();
    formData.append("UserId", UserId);
    formData.append("Code", AuthenticToken);
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
      console.log(response.data.data);
    } catch (error) {
      toast.error(error?.response?.data?.Message);
      console.log(error?.response?.data?.Message);
    }
  };

  const openPopup = () => {
    const clientId = "501142";
    const redirectUri = "https://member.eskout.com/daraz/callback";
    const url = `https://api.daraz.pk/oauth/authorize?response_type=code&force_auth=true&redirect_uri=${redirectUri}&client_id=${clientId}`; // Replace with your authentication URL
    window.open(url, "/pop.html", "Popup Test", "width=auto, height=auto");
  };

  return (
    <div>
      <div className="flex justify-between m-auto flex-wrap mb-4">
        <div>
          <h5 className="font-semibold text-theme-primary text-xl">Stores</h5>
          <p className="text-sm font-semibold text-theme-tertiary">
            All your stores shows here
          </p>
        </div>

        <div className="my-auto space-x-4">
          <button
            onClick={openPopup}
            className="flex bg-theme-btnBg p-3  rounded-md text-theme-btnColor text-sm font-semibold"
          >
            <MdOutlineAddHome className="text-xl text-center my-auto mr-2" />
            Add Store
          </button>
        </div>
      </div>

      <DataTableComponent />
    </div>
  );
};

export default Stores;
