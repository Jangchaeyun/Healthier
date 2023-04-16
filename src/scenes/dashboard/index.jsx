import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="대시보드"
          subtitle="나의 HEALTHIER 대시보드에 오신것을 환영합니다."
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
