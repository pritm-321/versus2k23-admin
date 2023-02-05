/* eslint-disable no-unused-vars */
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Bars } from "react-loader-spinner";
import { getGameList, updatePayment } from "../../redux/actions/gameActions";
import { ToastContainer, toast } from "react-toastify";

const Datatable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // console.log(userInfo);
  const gameList = useSelector((state) => state.gameList);
  const { games, loading, error } = gameList;
  // console.log(games);

  const paymentStatus = useSelector((state) => state.paymentUpdate);
  const { msg } = paymentStatus;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
    if (msg){
      toast.success(
        msg,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme:"dark",
        }
      )
    }
    dispatch(getGameList("ballpool"));
  }, [userInfo, navigate, msg, dispatch]);

  const userColumns = [
    {
      field: "name",
      headerName: "Name",
      width: 360,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 400,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 400,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "ballpoolUID",
      headerName: "BallPool UID",
      width: 400,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.paymentStatus}`}>
            {params.row.paymentStatus.toString()}
          </div>
        );
      },
    },
  ];

  const handleSelect = (email, gameName) => {
    dispatch(updatePayment(email, gameName));
  };

  // const handleUnSelect = (github_link) => {
  //   const isSelected = false
  //   dispatch(updateProjectStatus(github_link,isSelected))

  // };

  // useEffect(() => {
  //   if(!userInfo){
  //     navigate('/')
  //   }

  //   dispatch(listProjects());

  // },[navigate,userInfo,dispatch, msg]);

  const actionColumn = [
    {
      field: "select",
      headerName: "Approve Payment",
      width: 160,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="selectButton"
              onClick={() => handleSelect(params.row.email, "ballpool")}
            >
              Accept Payment
            </div>
          </div>
        );
      },
    },
    // {
    //   field: "unselect",
    //   headerName: "UnSelect",
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellAction">
    //         <div
    //           className="unselectButton"
    //           onClick={() => handleUnSelect(params.row.email,"ballpool")}
    //         >
    //           UnSelect
    //         </div>
    //       </div>
    //     );
    //   },
    // },
  ];

  return (
    <>
      <div className="listHeading mt-5">
        <Typography variant="h3" component="h3">
          8 Ball Pool Registered Users
        </Typography>
      </div>
      <div className="datatable">
        <ToastContainer/>
        {loading ? (
          <Bars
            height="80"
            width="80"
            color="#268dcd"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <DataGrid
            className="datagrid"
            rows={games}
            columns={
              userInfo.role === "admin-super"
                ? userColumns.concat(actionColumn)
                : userColumns
            }
            pageSize={20}
            rowsPerPageOptions={[20]}
            // checkboxSelection
            getRowId={(row) => row._id}
            getRowHeight={() => "auto"}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
              "& .super-app-theme--header": {
                backgroundColor: "rgba(255, 7, 0, 0.55)",
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default Datatable;
