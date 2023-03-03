export const userColumns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "age",
      width: 100,
    },
    {
      field: "status",
      headerName: "institution",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.institution}
          </div>
        );
      },
    },
  ];