import { Card, CardContent, Typography } from '@mui/material'

export function InfoDetails() {
  return (
    <Card>
      <CardContent sx={{ bgcolor: 'grey.100' }}>
        <Typography variant="h5" gutterBottom>
          Details Section
        </Typography>
        <Typography variant="body1">
          This is the details section inside Info page!
        </Typography>
      </CardContent>
    </Card>
  )
}