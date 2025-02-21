import React, { useRef, useState, useEffect } from "react";
import { Top } from "./Top/Top";
import { Project } from "./Project/Project";
import { Education } from "./Education/Education";
import { Contact } from "./Contact/Contact";
import { Tabs, Tab, Box, Button, Stack, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MobileContents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTabsMinimized, setIsTabsMinimized] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    index: number
  ) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setActiveTab(index);
    }
  };

  const handleScrollEvent = () => {
    const topPosition = topRef.current?.offsetTop || 0;
    const projectPosition = projectRef.current?.offsetTop || 0;
    const educationPosition = educationRef.current?.offsetTop || 0;
    const contactPosition = contactRef.current?.offsetTop || 0;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= contactPosition - 100) {
      setActiveTab(3);
    } else if (scrollPosition >= educationPosition - 100) {
      setActiveTab(2);
    } else if (scrollPosition >= projectPosition - 100) {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", margin: 0, padding: 0, overflowX: "hidden" }}>
      <div ref={topRef}>
        <Top />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            marginY: "10px",
          }}
        >
          <Button variant="contained" onClick={() => handleScroll(topRef, 0)}>
            トップへ
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileContents;
