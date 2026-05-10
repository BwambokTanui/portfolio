import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Fragment, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { fonts, fontWeights } from "../theme/typography";
import { projectList } from "../utils/projects";
import { socials } from "utils/constants";
import Iconify from "components/Iconify";
import PortfolioPDF from "components/PortfolioPDF";

const ImageThumb = styled("img")(() => ({
  width: "100%",
  height: "100%",
}));

export default function FeaturedSection({
  children,
}: {
  children?: ReactNode;
}) {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    if (generating || !pdfRef.current) return;
    setGenerating(true);

    const html2canvas = (await import("html2canvas")).default;
    const { default: jsPDF } = await import("jspdf");

    const canvas = await html2canvas(pdfRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdf = new jsPDF("p", "mm", "a4");
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();
    }

    pdf.save("Dominic Bwambok - Portfolio.pdf");
    setGenerating(false);
  }, [generating]);

  return (
    <Fragment>
      <Box sx={{ position: "absolute", left: -9999, top: 0 }}>
        <PortfolioPDF ref={pdfRef} />
      </Box>
      <Container sx={{ py: 4, overflow: "hidden" }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="h3" fontFamily={fonts.primary}>
            Portfolio
          </Typography>
          <Typography
            variant="caption"
            fontFamily={fonts.mono}
            color="grey.600"
          >
            ~ Featured projects
          </Typography>
          <div style={{ flexGrow: 1 }} />

          <Button
            color="primary"
            onClick={handleDownload}
            sx={{ cursor: "pointer" }}
            variant="text"
            startIcon={<Iconify icon={socials.portfolio.icon} />}
          >
            Worksamples
          </Button>
        </Stack>

        {children}

        <Grid container marginTop={2} spacing={2}>
          {projectList.map((project, index) => {
            return (
              <FeaturedItem key={project.key} project={project} index={index} />
            );
          })}
        </Grid>
      </Container>
    </Fragment>
  );
}

const ImageComponent = ({
  project: { images, name, techs },
}: {
  project: (typeof projectList)[number];
  index: number;
}) => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box
        position="absolute"
        paddingLeft={2}
        paddingRight={2}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        <Typography
          variant="h4"
          fontFamily={fonts.mono}
          fontWeight={fontWeights.mono[700]}
          sx={verticalText}
          color="grey.800"
        >
          {name}
        </Typography>
        <Box flexGrow={1} />
        <Typography
          variant="caption"
          // fontFamily={fonts.mono}
          fontWeight={fontWeights.primary[600]}
          sx={verticalText}
          color="grey.900"
          // color="primary.main"
        >
          {techs.join("/").toUpperCase()}
        </Typography>
      </Box>

      <ImageThumb src={images[0]} sx={{ height: "100%", width: "100%" }} />
    </Box>
  );
};

const FeaturedItem = ({
  project,
  index,
}: {
  project: (typeof projectList)[number];
  index: number;
}) => {
  const disableAnimations = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && !disableAnimations) controls.start("show");
  }, [controls, inView, disableAnimations]);

  const even = index % 2 === 0;

  return (
    <Grid
      ref={ref}
      item
      sm={12 / 2}
      md={12 / 3}
      position="relative"
      display="flex"
      component={motion.div}
      initial="hidden"
      overflow="hidden"
      {...(!disableAnimations && {
        animate: controls,
        variants: even ? gridItemVariants : gridItemVariantsOdd,
      })}
    >
      <ImageComponent project={project} index={index} />
    </Grid>
  );
};

const gridItemVariants = {
  hidden: { opacity: 0, translateX: -100, transition: { duration: 1 } },
  show: { opacity: 1, translateX: 0, transition: { duration: 1 } },
};
const gridItemVariantsOdd = {
  ...gridItemVariants,
  hidden: {
    ...gridItemVariants.hidden,
    opacity: 0,
    translateX: 100,
  },
};

const verticalText = {
  writingMode: "vertical-lr",
  paddingTop: 3,
  paddingLeft: 1,
  letterSpacing: 1,
};
