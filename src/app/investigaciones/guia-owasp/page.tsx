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

export default function GuiaOwaspPage() {
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
          Guía OWASP Top 10 – 2021
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          25 de julio de 2025
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            Este documento resume las diez vulnerabilidades más críticas según OWASP 2021.
          </Typography>

          <Typography variant="body1" component="div" sx={{ mb: 3 }}>
            <Box component="div" sx={{ ml: 2 }}>
              <Typography variant="body1" paragraph>
                1. <strong>Control de acceso defectuoso</strong> — Falta de restricciones en permisos de usuario.
              </Typography>
              <Typography variant="body1" paragraph>
                2. <strong>Fallos criptográficos</strong> — Datos sin cifrar adecuadamente.
              </Typography>
              <Typography variant="body1" paragraph>
                3. <strong>Inyección</strong> — Ingreso de datos maliciosos que ejecutan comandos no deseados.
              </Typography>
              <Typography variant="body1" paragraph>
                4. <strong>Diseño inseguro</strong> — Falta de medidas de seguridad desde la arquitectura.
              </Typography>
              <Typography variant="body1" paragraph>
                5. <strong>Configuración incorrecta de seguridad</strong> — Uso de contraseñas o ajustes por defecto.
              </Typography>
              <Typography variant="body1" paragraph>
                6. <strong>Componentes vulnerables y obsoletos</strong> — Librerías o frameworks sin actualizar.
              </Typography>
              <Typography variant="body1" paragraph>
                7. <strong>Fallos de autenticación</strong> — Identidades no verificadas correctamente.
              </Typography>
              <Typography variant="body1" paragraph>
                8. <strong>Fallas de integridad de software y datos</strong> — Manipulación de información o despliegues.
              </Typography>
              <Typography variant="body1" paragraph>
                9. <strong>Fallas de registro y monitoreo</strong> — Falta de logs o alertas de incidentes.
              </Typography>
              <Typography variant="body1" paragraph>
                10. <strong>SSRF</strong> — Solicitudes maliciosas del lado del servidor.
              </Typography>
            </Box>
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/docs/guia-owasp.pdf"
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