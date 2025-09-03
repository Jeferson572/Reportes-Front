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

<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/825837c6-b5bf-4f9b-a1e5-1fe2c4abb289" />

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
