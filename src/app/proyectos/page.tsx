'use client';

import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import Link from 'next/link';

const researchProjects = [
  {
    id: 'aseguramiento-calidad',
    title: 'Análisis crítico del aseguramiento de la calidad de software',
    description: 'Investigación sobre los estándares internacionales de calidad de software ISO/IEC 25010, ISO/IEC/IEEE 29119 y IEEE 730. Analiza los modelos de McCall y Boehm, los roles del equipo QA y los riesgos de no aplicar aseguramiento de calidad.',
    date: '25/07/2025',
    route: '/investigaciones/aseguramiento-calidad',
  },
  {
    id: 'guia-owasp',
    title: 'Guía OWASP (Top 10 – 2021)',
    description: 'Resumen claro de las diez vulnerabilidades más críticas de OWASP 2021, con definiciones, mitigaciones y glosario. Incluye temas como control de acceso defectuoso, fallos criptográficos, inyección y diseño inseguro.',
    date: '25/07/2025',
    route: '/investigaciones/guia-owasp',
  },
  {
    id: 'planes-casos-prueba',
    title: 'Planes y casos de prueba',
    description: 'Explicación teórica y práctica sobre la elaboración de planes y casos de prueba. Incluye ejemplos de verificación funcional, criterios de aceptación y estructura formal de pruebas.',
    date: '02/08/2025',
    route: '/investigaciones/planes-casos-prueba',
  },
];

export default function ProyectosPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Investigaciones y Proyectos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Trabajos realizados en el curso de Aseguramiento de la Calidad de Software — Universidad Mariano Gálvez, sede Chiquimulilla.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {researchProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id} component="div">
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) =>
                    theme.palette.mode === 'dark'
                      ? '0 8px 25px rgba(0, 0, 0, 0.5)'
                      : '0 8px 25px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>

                <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                  {project.date}
                </Typography>

                <Button
                  component={Link}
                  href={project.route}
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 'auto',
                    textTransform: 'none',
                    fontWeight: 500,
                  }}
                >
                  Ver investigación
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}