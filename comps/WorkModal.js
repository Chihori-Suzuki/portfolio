import { Box, Typography, Link, IconButton } from "@mui/material"
import React, { useEffect } from "react"
import { colors } from "../src/theme"

export default function WorkModal({ work, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [onClose])

  if (!work) return null

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1300,
        opacity: 1,
        animation: "fadeIn 0.2s ease",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          backgroundColor: colors.bg,
          maxWidth: 700,
          width: "90%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "48px",
          position: "relative",
          animation: "slideUp 0.2s ease",
          "@keyframes slideUp": {
            from: { opacity: 0, transform: "translateY(8px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            fontSize: "1.5rem",
            color: colors.textSub,
          }}
        >
          ✕
        </IconButton>

        {work.image && (
          <Box
            component="img"
            src={work.image}
            alt={work.title}
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              marginBottom: "24px",
            }}
          />
        )}

        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.8rem",
            fontWeight: 400,
            color: colors.text,
            marginBottom: "16px",
          }}
        >
          {work.title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            lineHeight: 1.8,
            fontSize: "0.95rem",
            color: colors.text,
            marginBottom: "24px",
          }}
        >
          {work.details}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: colors.textSub,
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Tech Stack
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "0.95rem",
            color: colors.text,
            marginBottom: "24px",
          }}
        >
          {work.stacks}
        </Typography>

        {work.link && (
          <>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                color: colors.textSub,
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Live Site
            </Typography>
            <Link
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "0.95rem",
                color: colors.text,
                textDecoration: "none",
                borderBottom: `1px solid ${colors.text}`,
                "&:hover": {
                  color: colors.primary,
                  borderBottomColor: colors.primary,
                },
              }}
            >
              {work.link}
            </Link>
          </>
        )}
      </Box>
    </Box>
  )
}
