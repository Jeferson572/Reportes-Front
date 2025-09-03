## Tecnologias utilizadas 


### Frontend

- React 18
- react-scripts (CRA)
- CSS personalizado (`app.css`)
- Fetch API para consumir el backend
  
## Configuración 

Clonar repositodrio: 
- git clone https://...
- cd frontend
- npm intall

## Ejecutar el frontend
npm start

##Crear build 

- npm run build

##Imagen formulario 

<img width="1910" height="868" alt="image" src="https://github.com/user-attachments/assets/1cb5b95c-70d9-437c-acd3-5006b16f4d2d" />

## Estructura del proyecto

```bash
Reportes-Trans/
├──node_modules
├── ── src/
│   │   ├── server.js        # Punto de entrada del backend
│   │   ├── app.js           # Configuración de Express y middlewares
│   │   ├── routes/          # Rutas API (ej: test, reportes)
│   │   └── db.js            # Configuración de conexión a PostgreSQL
│   └── package.json
│
├── frontend/
│   ├── public/              # Recursos estáticos (imágenes, favicon, etc.)
│   ├── src/
│   │   ├── App.js           # Componente principal
│   │   ├── App.css          # Estilos personalizados
│   │   └── components/      # Componentes reutilizables (formulario, etc.)
│   └── package.json
│
└── README.md
