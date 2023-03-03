export const reportColumns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "testid",
      headerName: "Test-Id",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            {params.row.testid}
          </div>
        );
      },
    },
    {
      field: "level",
      headerName: "Level",
      width: 230,
    },
  
    {
      field: "qno",
      headerName: "Question number",
      width: 230,
    },
    // {
    //   field: "status",
    //   headerName: "institution",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.institution}
    //       </div>
    //     );
    //   },
    // },
  ];