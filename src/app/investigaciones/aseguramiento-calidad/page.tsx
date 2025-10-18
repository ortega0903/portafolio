'use client';

import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';
import Link from 'next/link';
import DownloadIcon from '@mui/icons-material/Download';

export default function AseguramientoCalidadPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Análisis crítico del aseguramiento de la calidad de software
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          25 de julio de 2025
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            Este trabajo analiza los estándares internacionales ISO/IEC 25010, ISO/IEC/IEEE 29119 y IEEE 730, que definen modelos y procesos de calidad en el desarrollo de software.
          </Typography>

          <Typography variant="body1" paragraph>
            Se comparan los modelos de McCall y Boehm, destacando cómo el primero se enfoca en la calidad técnica interna y el segundo en la experiencia del usuario.
          </Typography>

          <Typography variant="body1" paragraph>
            También se describen los roles del Analista QA, Ingeniero de Automatización y QA Lead, enfatizando la importancia del trabajo en equipo y la trazabilidad.
          </Typography>

          <Typography variant="body1" paragraph>
            En su análisis crítico, se concluye que la ausencia de un proceso formal de aseguramiento de calidad puede provocar pérdida de confianza, aumento de costos, tensiones laborales y daño reputacional.
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/docs/aseguramiento-calidad.pdf"
          target="_blank"
          variant="outlined"
          startIcon={<DownloadIcon />}
          sx={{
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          Descargar PDF
        </Button>
      </Paper>
    </Container>
  );
}