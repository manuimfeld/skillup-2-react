// {prioridad: 'ALL', estado: 'NEW', title: ''}

const filtrosTareas = (tareas, filtrosState) => {
  const estado = filtrarPorEstado(tareas, filtrosState.estado);
  const prioridad = filtrarPorPrioridad(estado, filtrosState.prioridad);
  const titulo = filtrarPorTitulo(prioridad, filtrosState.title);
  return titulo;
};

function filtrarPorEstado(tareas, forma) {
  if (forma === "ALL") {
    return tareas;
  } else {
    const respuesta = tareas.filter((i) => {
      return i.status === forma;
    });
    return respuesta;
  }
}

function filtrarPorPrioridad(tareas, forma) {
  if (forma === "ALL") {
    return tareas;
  } else {
    const respuesta = tareas.filter((i) => i.importance === forma);
    return respuesta;
  }
}

function filtrarPorTitulo(tareas, forma) {
  if (forma === "") {
    return tareas;
  } else {
    const respuesta = tareas.filter((i) =>
      i.title.trim().toLowerCase().includes(forma.trim().toLowerCase())
    );
    return respuesta;
  }
}

export default filtrosTareas;
