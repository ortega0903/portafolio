"use client";

import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function ProyectosPage() {
  const proyectos = [
    {
      id: 1,
      titulo: "Análisis crítico del aseguramiento de la calidad de software",
      descripcion:
        "Investigación sobre los estándares internacionales ISO/IEC 25010, ISO/IEC/IEEE 29119 y IEEE 730. Compara modelos de calidad y roles QA.",
      enlace: "/investigaciones/aseguramiento-calidad",
    },
    {
      id: 2,
      titulo: "Guía OWASP (Top 10 – 2021)",
      descripcion:
        "Resumen de las diez vulnerabilidades más críticas según OWASP 2021, con mitigaciones y glosario de seguridad.",
      enlace: "/investigaciones/guia-owasp",
    },
    {
      id: 3,
      titulo: "Planes y casos de prueba",
      descripcion:
        "Explicación teórico-práctica sobre la elaboración de planes y casos de prueba, con ejemplos funcionales y criterios de aceptación.",
      enlace: "/investigaciones/planes-casos-prueba",
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Investigaciones y Proyectos
      </Typography>

      <Grid container spacing={4}>
        {proyectos.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: "background.paper",
                p: 2,
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {proyecto.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {proyecto.descripcion}
                </Typography>
              </CardContent>
              <Button
                component={Link}
                href={proyecto.enlace}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Ver investigación
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}