import { Alert, Box, Card, CardContent, Typography } from "@mui/material"
import { JmRankingChart } from "../chart/JmRankingChart"
import { Thumbnail } from "../share/Thumbnail"

export const WebMajoritaire: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', p: 6 }}>
            <Alert severity="info" sx={{ mb: 4 }}>
                Le <strong>jugement majoritaire</strong> est une méthode de vote innovante où chaque électeur attribue une mention (très satisfait, plutôt satisfait, ni satisfait ni insatisfait, plutôt insatisfait, très insatisfait) à chaque candidat.
                <br /><br />
                Le classement final est déterminé par la <strong>mention majoritaire</strong> de chaque candidat, c'est-à-dire la mention qui divise les évaluations en deux parts égales. Cette approche permet d'éviter les votes stratégiques et offre une représentation plus nuancée de l'opinion publique.
            </Alert>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4, width: '100%' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Card sx={{ flex: 1 }}>
                        <Thumbnail sx={{ height: "200px", width: 1 }}>
                            <JmRankingChart />
                        </Thumbnail>
                        <CardContent>
                            <Typography variant="h6">Titre 1</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description de la première carte
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: 1 }}>
                        <Thumbnail sx={{ height: "200px", width: 1 }}>
                            <JmRankingChart />
                        </Thumbnail>
                        <CardContent>
                            <Typography variant="h6">Titre 2</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description de la deuxième carte
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Card sx={{ flex: 1, maxWidth: 'calc(50% - 4px)' }}>
                        <Thumbnail sx={{ height: "200px", width: 1 }}>
                            <JmRankingChart />
                        </Thumbnail>
                        <CardContent>
                            <Typography variant="h6">Titre 3</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description de la troisième carte
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            {/* <Box sx={{ width: "100%", height: "600px" }}>
                <JmRankingChart />
            </Box> */}

        </Box>

    )
}