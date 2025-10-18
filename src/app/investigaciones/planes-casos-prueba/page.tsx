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

export default function PlanesCasosPruebaPage() {
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
          Investigación: Planes y casos de prueba
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          02 de agosto de 2025
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            Este trabajo explica la importancia de planificar las pruebas de software para garantizar la calidad del sistema.
          </Typography>

          <Typography variant="body1" paragraph>
            Un plan de prueba define la estrategia, el alcance, los recursos y los criterios de aceptación.
          </Typography>

          <Typography variant="body1" paragraph>
            Los casos de prueba detallan los pasos, datos y resultados esperados de cada verificación.
          </Typography>

          <Typography variant="body1" paragraph>
            Ejemplos:
          </Typography>

          <Box component="div" sx={{ ml: 4, mb: 3 }}>
            <Typography variant="body1" paragraph>
              • <strong>Crear registro</strong> — validar que se guarde correctamente.
            </Typography>
            <Typography variant="body1" paragraph>
              • <strong>Editar registro</strong> — verificar actualización exitosa.
            </Typography>
            <Typography variant="body1" paragraph>
              • <strong>Eliminar registro</strong> — confirmar que se borre del catálogo.
            </Typography>
          </Box>

          <Typography variant="body1" paragraph>
            Con una planificación estructurada, se logra consistencia en los resultados y reducción de errores.
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/docs/planes-casos-prueba.pdf"
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