import React, { useEffect, useState } from "react";
import DataTableComponent from "../../components/dataTable";
import { MdOutlineAddHome } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";

const Stores = () => {
  const token = Cookies.get("token");
  // const decoded = jwtDecode(token);
  const UserId = "08dc169c-2c94-4847-8d34-3b38509863bd";
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const [allStoresData, setAllStoresData] = useState([]);

  //  Daraz authorization popup start here
  const openPopup = () => {
    const clientId = "501142";
    const redirectUri = "https://member.eskout.com/daraz/callback";
    const url = `https://api.daraz.pk/oauth/authorize?response_type=code&force_auth=true&redirect_uri=${redirectUri}&client_id=${clientId}`; // Replace with your authentication URL
    window.open(url, "/pop.html", "Popup Test", "width=auto, height=auto");
  };
  //  Daraz authorization popup end here

  // Get all stores data start here
  useEffect(() => {
    getStoresData();
  }, []);

  const getStoresData = async () => {
    const formData = new FormData();
    formData.append("UserId", UserId);
    try {
      const response = await axios.post(
        `${baseUrl}/Store/storedetail`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAllStoresData(response?.data?.data);
    } catch (error) {
      toast.error(error?.response?.data?.Message);
    }
  };
  // Get all stores data end here

  // Table heading array
  const tableHeadings = [
    {
      name: "Store Name",
      selector: (row) => row.storeName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.storeEmail,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.storeLocation,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.storeStatus,
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="flex justify-between m-auto flex-wrap mb-4">
        <div>
          <h5 className="font-bold text-theme-btnBgText text-xl">STORES</h5>
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

      <DataTableComponent
        allData={allStoresData}
        tableHeadings={tableHeadings}
        selectableRows={false}
      />
    </div>
  );
};

export default Stores;
