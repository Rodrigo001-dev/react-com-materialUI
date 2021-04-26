import React from "react";

import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { UserList } from './components/UsersList';

import { Container, CssBaseline, Grid, MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    // qualquer componente que tenha Provider no nome está utilizando a Context
    // API do React que é um recurso nativo do React
    <MuiThemeProvider theme={theme} >
      <CssBaseline />
      {/* o Container é uma div que vai aplicar padding da esquerda e da direita */}
      {/* ele deixa o conteúdo mais centralizado */}
      <Container>
        <Title>React com Material UI</Title>
        <Grid container>
          <Grid item xs={7}>
            <Form />
          </Grid>

          <Grid item xs={5}>
            <UserList />
          </Grid>
        </Grid>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;

//.ts - TypeScript - JSX
//.js - JavaScript

//.jsx

//f(x) => html

//Angular - Framework, arquitetura de modules, injecao de dependencia, formularios, camada http
//React - Biblioteca
