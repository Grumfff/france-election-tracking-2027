import { Card, CardContent, Typography } from '@mui/material'

export function About() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          Hello from the About page! This is built with Material-UI.
        </Typography>
      </CardContent>
    </Card>
  )
}