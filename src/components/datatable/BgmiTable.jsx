import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Bars } from "react-loader-spinner";
import { getGameList, updatePayment } from "../../redux/actions/gameActions";

const Datatable = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

    const gameList = useSelector((state) => state.gameList);
    const { games ,loading, error } = gameList;
  console.log(games);

  const paymentStatus = useSelector((state) => state.paymentStatus);
  const { msg} = paymentStatus;

  useEffect(()=>{
    if(!userInfo){
      navigate('/')
    }
    dispatch(getGameList("bgmi"))
  },[userInfo, navigate, msg, dispatch])
 
  const userColumns = [
   
    
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
    },
    {
        field: "phone",
        headerName: "Phone",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
    },
    {
        field: "teamName",
        headerName: "Team Name",
        width: 150,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player1Name",
        headerName: "Player1",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player1ID",
        headerName: "Player1 ID",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player2Name",
        headerName: "Player2",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player2ID",
        headerName: "Player2 ID",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player3Name",
        headerName: "Player3",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player3ID",
        headerName: "Player3 ID",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player4Name",
        headerName: "Player4",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player4ID",
        headerName: "Player4 ID",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player5Name",
        headerName: "Player5",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "player5ID",
        headerName: "Player5 ID",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
    {
        field: "paymentStatus",
        headerName: "Payment Status",
        width: 200,
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

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const handleSelect = (email,gameName) => {
    dispatch(updatePayment(email,gameName))
    
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
  ]

  return (
    <>
    <div className="listHeading mt-5">
        <Typography variant="h3" component="h3">
          BGMI Registered Users
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
