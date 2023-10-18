import "./App.css";
import Course from "./Course.tsx";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CCsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" fontFamily={"inherit"}>
            Kart Projesi
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course image={Angular} 
            title="Angular"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ducimus! Tenetur, ullam. Eveniet facere at autem fugit! Exercitationem soluta cumque temporibus tempora, sit delectus tenetur reprehenderit. Voluptatem impedit natus temporibus?"
       />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ducimus! Tenetur, ullam. Eveniet facere at autem fugit! Exercitationem soluta cumque temporibus tempora, sit delectus tenetur reprehenderit. Voluptatem impedit natus temporibus?"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={CCsharp}
              title="C and C#"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ducimus! Tenetur, ullam. Eveniet facere at autem fugit! Exercitationem soluta cumque temporibus tempora, sit delectus tenetur reprehenderit. Voluptatem impedit natus temporibus?"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Kompleweb}
              title="Full Stack"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, ducimus! Tenetur, ullam. Eveniet facere at autem fugit! Exercitationem soluta cumque temporibus tempora, sit delectus tenetur reprehenderit. Voluptatem impedit natus temporibus?"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
