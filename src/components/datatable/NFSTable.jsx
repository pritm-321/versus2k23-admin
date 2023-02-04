import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Bars } from "react-loader-spinner";
import { getGameList } from "../../redux/actions/gameActions";

const Datatable = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    const gameList = useSelector((state) => state.gameList);
    const { games ,loading, error } = gameList;
  console.log(games);

  useEffect(()=>{
    if(!userInfo){
      navigate('/')
    }
    dispatch(getGameList("nfs"))
  },[userInfo, navigate, dispatch])
 
  const userColumns = [
   
    {
      field: "name",
      headerName: "Name",
      width: 400,
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

  const handleSelect = (email,gameName) => {
    // dispatch(updateProjectStatus(email,gameName))
    
  };
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
              onClick={() => handleSelect(params.row.email,"ballpool")}
            >
              Accept Payment
            </div>
          </div>
        );
      },
    },
  ];
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  return (
    <>
    <div className="listHeading mt-5">
        <Typography variant="h3" component="h3">
          NFS Registered Users
        </Typography>
      </div>
      <div className="datatable">
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
        columns={userInfo.role === "admin-super"
        ? userColumns.concat(actionColumn)
        : userColumns}
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
                '& .super-app-theme--header': {
                  backgroundColor: 'rgba(255, 7, 0, 0.55)',
                },
              }}
      />

        )}
      

    </div>
    </>
  );
};

export default Datatable;
