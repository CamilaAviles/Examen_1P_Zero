import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener un archivo de estilo si quieres agregar estilos.

function App() {
  const [students, setStudents] = useState([
    { name: 'Lorena', subject: 'Desarrollo móvil multiplataforma', grade: 90 },
    { name: 'Camila', subject: 'Integradora', grade: 90 },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', subject: '', grade: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', subject: '', grade: '' });
  };

  return (
    <div className="App">
      <h1>Registro de Estudiantes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Materia"
          value={newStudent.subject}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="grade"
          placeholder="Calificación"
          value={newStudent.grade}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar Estudiante</button>
      </form>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.subject} - {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


