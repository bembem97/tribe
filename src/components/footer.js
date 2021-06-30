import React from "react"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"

const Footer = () => {
  const tuig = new Date().getFullYear()

  return (
    <>
      <footer>
        <Box py={3}>
          <Container maxWidth="md">
            <Typography variant="body2" align="center">
              &#169; Copyright {tuig} - Bembem
            </Typography>
          </Container>
        </Box>
      </footer>
    </>
  )
}

export default Footer
