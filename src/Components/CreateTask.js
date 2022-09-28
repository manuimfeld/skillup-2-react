import React from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";

import s from "../styles/login.module.css";

const schema = Yup.object().shape({
  title: Yup.string().required("Requerido"),
  importance: Yup.string().required("Requerido"),
  status: Yup.string().required("Requerido"),
  description: Yup.string().required("Requerido"),
});

const CreateTask = ({ handleSubmit }) => {
  return (
    <>
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
          <Form className={s.containerHome}>
            <h1 className={s.titulo}>Crear tarea</h1>
            <div className={s.formContainer}>
              <Field
                className={`${s.input} ${
                  errors.title && touched.title && s.error
                }`}
                name="title"
                type="text"
                placeholder="Título"
                id="title"
              />
              {errors.title && touched.title ? (
                <div
                  className={`${s.msjError} ${
                    errors.title && touched.title && s.error
                  }`}
                >
                  {errors.title}
                </div>
              ) : null}

              <Field
                name="status"
                as="select"
                id="status"
                className={`${s.input} ${
                  errors.status && touched.status && s.error
                }`}
              >
                <option value="" disabled>
                  Selecciona un estado
                </option>
                <option value="NEW">Nuevo</option>
                <option value="IN PROGRESS">En progreso</option>
                <option value="FINISHED">Finalizado</option>
              </Field>
              {errors.status && touched.status ? (
                <div
                  className={`${s.msjError} ${
                    errors.status && touched.status && s.error
                  }`}
                >
                  {errors.status}
                </div>
              ) : null}

              <Field
                name="importance"
                as="select"
                id="importance"
                className={`${s.input} ${
                  errors.importance && touched.importance && s.error
                }`}
              >
                <option value="" disabled>
                  Selecciona una prioridad
                </option>
                <option value="LOW">Baja</option>
                <option value="MEDIUM">Media</option>
                <option value="HIGH">Alta</option>
              </Field>
              {errors.importance && touched.importance ? (
                <div
                  className={`${s.msjError} ${
                    errors.importance && touched.importance && s.error
                  }`}
                >
                  {errors.importance}
                </div>
              ) : null}

              <Field
                name="description"
                type="textarea"
                id="description"
                placeholder="Descripción"
                className={`${s.input} ${
                  errors.description && touched.description && s.error
                }`}
              />
              {errors.description && touched.description ? (
                <div
                  className={`${s.msjError} ${
                    errors.description && touched.description && s.error
                  }`}
                >
                  {errors.description}
                </div>
              ) : null}
              <button className={`${s.boton} ${s.botonEnviar}`} type="submit">
                Crear tarea
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateTask;
