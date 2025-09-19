import { Box, Card, CardContent, Typography, Button } from '@mui/material'
import { Link, Outlet } from '@tanstack/react-router'

export function Info() {
  return (
    <Box>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Info Page
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/info/details"
            sx={{ mt: 1 }}
          >
            View Details
          </Button>
        </CardContent>
      </Card>
      <Outlet />
    </Box>
  )
}