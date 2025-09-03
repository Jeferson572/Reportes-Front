import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [tipoReporte, setTipoReporte] = useState("Mensual Detallado");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:4000/descargar-reporte?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}&tipo_reporte=${encodeURIComponent(
        tipoReporte
      )}`;

      // Permitimos leer el body aunque el status sea 4xx/5xx
      const response = await axios.get(url, {
        responseType: "blob",
        validateStatus: () => true,
      });

      // Si no es 200, intentamos leer el JSON de error que manda el backend
      if (response.status !== 200) {
        let mensaje = "Error al generar el reporte";
        try {
          const text = await response.data.text();
          const json = JSON.parse(text);
          mensaje = json?.error || json?.detalle || mensaje;
        } catch {
          // si no es JSON, mostramos un genérico
        }
        alert(`❌ ${mensaje}`);
        return;
      }

      // Nombre del archivo desde Content-Disposition
      const contentDisposition = response.headers["content-disposition"];
      let filename = "reporte.xlsx";
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^";]+)"?/i);
        if (match && match[1]) filename = match[1];
      }

      // Descargar Excel
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const link = document.createElement("a");
      const href = window.URL.createObjectURL(blob);
      link.href = href;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(href);
    } catch (err) {
      console.error("❌ Error al descargar el Excel:", err);
      alert("❌ No se pudo conectar al servidor.");
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        {/* Si renombraste, usa: /logo-transmilenio.png y /logo-minuapp.png */}
        <img src="/Logo_Trasmilenio.png" alt="Transmilenio" className="logo" />
        <div className="divider"></div>
        <img src="/Logo_MinuApp.png" alt="MinutApp" className="logo-small" />
      </div>

      <h2 className="title">Generar Reporte</h2>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Fecha Inicio:</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Fecha Fin:</label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de reporte:</label>
          <select
            value={tipoReporte}
            onChange={(e) => setTipoReporte(e.target.value)}
            required
          >
            <option value="Mensual Detallado">Mensual Detallado</option>
            <option value="Mensual General">Mensual General</option>
            <option value="Diarios Por Mes">Diarios Por Mes</option>
            <option value="Diarios Por Hora">Diarios Por Hora</option>
          </select>
        </div>

        <button type="submit" className="btn-download">
          Descargar Excel
        </button>
      </form>
    </div>
  );
}

export default App;
