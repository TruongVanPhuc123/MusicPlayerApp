import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

export default function TypographyTheme() {
    return <Typography variant="h6" gutterBottom>
        Copyright ©CoderSchool 2024
    </Typography>
}