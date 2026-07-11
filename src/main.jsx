// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('root')).render(
//   <h1>
//     Hello!!
//   </h1>
// )

const rootElement = document.getElementById('root');

const h1Element = document.createElement("h1")

h1Element.textContent = "Hello World!!";

rootElement.appendChild(h1Element)


