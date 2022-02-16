import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --title: #fffcf9;
  --subtitle: #b3b3b3;
  --bg-button: #e9e6e3;
  --background: linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%);

  font-family: 'Poppins', sans-serif;;
}

html { 
      background: var(--background) no-repeat center fixed; 
      background-size:cover;
}

* {
      margin: 0;
      padding: 0;

      box-sizing: border-box;
  }

 
    `;
