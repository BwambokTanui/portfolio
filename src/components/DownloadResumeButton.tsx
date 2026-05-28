import Button from "@mui/material/Button";
import Iconify from "./Iconify";
import { socials } from "utils/constants";
import useGlobalContext from "hooks/useGlobalContext";

export default function DownloadResumeButton() {
  const { onResumeDownloaded } = useGlobalContext();

  return (
    <Button
      variant="contained"
      size="small"
      sx={{ px: { xs: 2, sm: 4 } }}
      disableElevation
      href={socials.resume.link}
      startIcon={<Iconify icon={socials.resume.icon} />}
      onClick={onResumeDownloaded}
    >
      Resume
    </Button>
  );
}
