import { Card, CardContent, Typography } from '@mui/material'

export function Home() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Welcome Home!
        </Typography>
        <Typography variant="body1">
          This is your MUI full-page application homepage.
        </Typography>
      </CardContent>
    </Card>
  )
}