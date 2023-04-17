import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="자주 하는 질문" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            병원 이름 적을 시 지역이름까지 작성해야 하나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            작성하지 않아도 되지만, 작성하지 않을 시 지금 위치의 주변 병원으로
            인식됩니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            캘린더에서는 병원에 관련된 일정만 기록 가능한가요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            아니요. 병원에 관련된 일정 외에도 기록이 가능합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            캘린더에서 시간 설정하여 일정을 기록하고 싶은데 어떻게 해야 합니까?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            캘린더의 week 버튼을 누르거나 day 버튼을 눌러서 원하는 시간부터
            드래그하여 작성하실 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
