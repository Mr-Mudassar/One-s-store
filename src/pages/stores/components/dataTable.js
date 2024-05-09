import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";

import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdError } from "react-icons/md";

const DataTable = () => {
  const token = Cookies.get("token");
  const decoded = jwtDecode(token);
  const UserId = "08dc169c-2c94-4847-8d34-3b38509863bd";
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const [allStoresData, setAllStoresData] = useState([]);

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

  return (
    <div className="p-2 rounded-lg bg-theme-primaryBg">
      <Table className="bg-theme-primaryBg rounded-lg text-theme-primary">
        <Thead className="bg-theme-secondaryBg">
          <Tr className="h-auto sm:h-16 border-b border-theme-primaryBorder">
            <Th>Store Name</Th>
            <Th>Email</Th>
            <Th>Location</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>

        <Tbody>
          {allStoresData == [] ? (
            <Tr>
              <Td>No data found</Td>
            </Tr>
          ) : (
            allStoresData.map((item, index) => (
              <Tr
                key={index}
                className="text-center border-b border-theme-primaryBorder h-auto sm:h-16"
              >
                <Td>{item.storeName}</Td>
                <Td>{item.storeEmail}</Td>
                <Td>{item.storeLocation}</Td>
                <Td className="rounded-md">
                  <div className="flex justify-center">
                    {item.storeStatus === "ACTIVE" ? (
                      <IoCheckmarkDoneCircle className="text-3xl text-green-600" />
                    ) : (
                      <MdError className="text-3xl text-red-600" />
                    )}
                  </div>
                  <p className="text-sm">{item.storeStatus}</p>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </div>
  );
};

export default DataTable;
