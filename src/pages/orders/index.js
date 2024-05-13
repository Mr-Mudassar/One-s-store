import React, { useState, useEffect } from "react";
import DataTableComponent from "../../components/dataTable";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Orders = () => {
  const token = Cookies.get("token");
  const decoded = jwtDecode(token);
  const UserId = "08dc169c-2c94-4847-8d34-3b38509863bd";
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const [allOrdersData, setAllOrdersData] = useState([]);
  const [orderDetails, setOrderDetails] = useState();

  // Get all orders data start here
  useEffect(() => {
    GetStoresData();
  }, []);

  const GetStoresData = async () => {
    const formData = new FormData();
    formData.append("UserId", UserId);
    try {
      const response = await axios.post(`${baseUrl}/Order/Orders`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAllOrdersData(response?.data?.data);
    } catch (error) {
      toast.error(error?.response?.data?.Message);
    }
  };
  // Get all orders data end here

  // Order detials getting API call
  const ChangeOrderStatus = async (data) => {
    const formData = new FormData();
    formData.append("UserId", UserId);
    formData.append("StoreId", data.id);
    formData.append("OrderId", data.orderNumber);
    try {
      const response = await axios.post(
        `${baseUrl}/Order/getlineitem`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setOrderDetails(response?.data?.data);
    } catch (error) {
      toast.error(error?.response?.data?.Message);
    }
  };

  // Expending rows, order details showing function
  const ExpandedComponent = ({ data }) => (
    ChangeOrderStatus(data),
    (<pre>{JSON.stringify(orderDetails, null, 2)}</pre>)
  );

  //  Disable rows selection logic
  const rowDisabledCriteria = (row) =>
    row.status == "canceled" || row.status == "delivered";

  // Table heading array
  const tableHeadings = [
    {
      name: "Customer Name",
      selector: (row) => row.customerFirstName,
      sortable: true,
    },
    {
      name: "Store Name",
      selector: (row) => row.storeName,
      sortable: true,
    },
    {
      name: "Order Number",
      selector: (row) => row.orderNumber,
      sortable: true,
    },
    {
      name: "Price (Rs)",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
      sortable: true,
    },

    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) =>
        row.status === "pending" ? (
          <div className="flex gap-2">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={ChangeOrderStatus}
            >
              RTS
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        ) : row.status === "rts" ? (
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            Download Receipt
          </button>
        ) : (
          row.status
        ),
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="flex justify-between m-auto flex-wrap mb-4">
        <div>
          <h5 className="font-bold text-theme-btnBgText text-xl">ORDERS</h5>
          <p className="text-sm font-semibold text-theme-tertiary">
            All your orders displays here
          </p>
        </div>
      </div>

      <DataTableComponent
        allData={allOrdersData}
        tableHeadings={tableHeadings}
        selectableRows={true}
        expandableRows={true}
        selectableRowDisabled={rowDisabledCriteria}
        ExpandedComponent={ExpandedComponent}
      />
    </div>
  );
};

export default Orders;
