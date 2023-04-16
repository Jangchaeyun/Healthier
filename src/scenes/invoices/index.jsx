import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import PhoneIcon from "@mui/icons-material/Phone";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "doc_name",
      headerName: "의사 이름",
      cellClassName: "name-column-cell",
      flex: 1,
    },
    {
      field: "team",
      headerName: "소속 병원",
      headerAlign: "left",
      flex: 1,
      align: "left",
    },
    { field: "dep", headerName: "부서", flex: 1 },
    {
      field: "phone",
      headerName: "예약 및 상담",
      flex: 1,
      renderCell: ({ row: { phone } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="7px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[600]}
            borderRadius="4px"
          >
            <PhoneIcon />
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {phone}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="의사 목록" subtitle="유명 의사 목록" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScrollbar": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
