import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/userActions";
import { Typography } from "@mui/material";
import { Bars } from "react-loader-spinner";

const Datatable = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userList = useSelector((state) => state.userList);
  const { users,loading, error } = userList;
  // console.log(users);

  useEffect(()=>{
    if(!userInfo){
      navigate('/')
    }
    dispatch(getAllUsers())
  },[userInfo, navigate, dispatch])
 
  const userColumns = [
    {
      field: "uniqueCode",
      headerName: "UID",
      width: 90,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
      field: "ballpoolIsRegistered",
      headerName: "8BallPool-Reg",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.ballpoolIsRegistered}`}>
            {params.row.ballpoolIsRegistered.toString()}
          </div>
        );
      },
    },
    {
      field: "ballpoolPaymentStatus",
      headerName: "8BallPool-Pay",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.ballpoolPaymentStatus}`}>
            {params.row.ballpoolPaymentStatus.toString()}
          </div>
        );
      },
    },
    {
      field: "bgmiIsRegistered",
      headerName: "BGMI-Reg",
      width: 150,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.bgmiIsRegistered}`}>
            {params.row.bgmiIsRegistered.toString()}
          </div>
        );
      },
    },
    {
      field: "bgmiPaymentStatus",
      headerName: "BGMI-Pay",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.bgmiPaymentStatus}`}>
            {params.row.bgmiPaymentStatus.toString()}
          </div>
        );
      },
    },
    {
      field: "csIsRegistered",
      headerName: "CS-Reg",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.csIsRegistered}`}>
            {params.row.csIsRegistered.toString()}
          </div>
        );
      },
    },
    {
      field: "csPaymentStatus",
      headerName: "CS-Pay",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.csPaymentStatus}`}>
            {params.row.csPaymentStatus.toString()}
          </div>
        );
      },
    },
    {
      field: "nfsIsRegistered",
      headerName: "NFS-Reg",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.nfsIsRegistered}`}>
            {params.row.nfsIsRegistered.toString()}
          </div>
        );
      },
    },
    {
      field: "nfsPaymentStatus",
      headerName: "NFS-Pay",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.nfsPaymentStatus}`}>
            {params.row.nfsPaymentStatus.toString()}
          </div>
        );
      },
    },
    {
      field: "valorantIsRegistered",
      headerName: "Valo-Reg",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.valorantIsRegistered}`}>
            {params.row.valorantIsRegistered.toString()}
          </div>
        );
      },
    },
    {
      field: "valorantPaymentStatus",
      headerName: "Valo-Pay",
      width: 100,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.valorantPaymentStatus}`}>
            {params.row.valorantPaymentStatus.toString()}
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
          All Registered Users
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
        rows={users}
        columns={userColumns}
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
