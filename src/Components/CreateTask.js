import React, { useEffect } from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { filtrarTareas, postTask } from "../redux/actions";

const schema = Yup.object().shape({
  title: Yup.string().required("Requerido"),
  importance: Yup.string().required("Requerido"),
  status: Yup.string().required("Requerido"),
  description: Yup.string().required("Requerido"),
});

const CreateTask = ({ errors, touched, setCreado, creado }) => {
  const dispatch = useDispatch();
  const tareas = useSelector((e) => e.tasks);

  async function handleSubmit(datos, props) {
    try {
      const respuesta = dispatch(
        postTask(datos, localStorage.getItem("token"))
      );
      dispatch(filtrarTareas("INICIAR", "INICIAR"));
      props.resetForm();
      setCreado(!creado);
    } catch (e) {
      alert(e.message);
    }
  }

  // useEffect(() => {
  //   console.log("hola mundo");
  // }, [tareas]);

  return (
    <section className="createTask-section">
      <Formik
        validationSchema={schema}
        onSubmit={(values, props) => handleSubmit(values, props)}
        initialValues={{
          title: "",
          importance: "",
          status: "",
          description: "",
        }}
      >
        {({ errors, touched, resetForm }) => (
          <Form className="createTask">
            <h1>Crear tarea</h1>
            <ul>
              <li>
                <label htmlFor="title">
                  <Field
                    name="title"
                    type="text"
                    placeholder="Título"
                    id="title"
                  />
                  {errors.title && touched.title ? (
                    <div className="msg-error-form">{errors.title}</div>
                  ) : null}
                </label>
              </li>
              <li>
                <Field name="status" as="select" id="status">
                  <option value="" disabled>
                    Selecciona un estado
                  </option>
                  <option value="NEW">Nuevo</option>
                  <option value="IN PROGRESS">En progreso</option>
                  <option value="FINISHED">Finalizado</option>
                </Field>
                {errors.status && touched.status ? (
                  <div className="msg-error-form">{errors.status}</div>
                ) : null}
              </li>
              <li>
                <Field name="importance" as="select" id="importance">
                  <option value="" disabled>
                    Selecciona una prioridad
                  </option>
                  <option value="LOW">Baja</option>
                  <option value="MEDIUM">Media</option>
                  <option value="HIGH">Alta</option>
                </Field>
                {errors.importance && touched.importance ? (
                  <div className="msg-error-form">{errors.importance}</div>
                ) : null}
              </li>
              <li>
                <label htmlFor="text-task">
                  <Field
                    name="description"
                    type="textarea"
                    id="description"
                    placeholder="Descripción"
                  />
                  {errors.description && touched.description ? (
                    <div className="msg-error-form">{errors.description}</div>
                  ) : null}
                </label>
              </li>
              <li>
                <button type="submit">Crear</button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CreateTask;
