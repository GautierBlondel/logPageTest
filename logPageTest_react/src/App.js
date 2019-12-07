import React, { useState } from "react"
import NativeSelect from "./components/form/NativeSelect"
import DatePicker from "./components/form/DatePicker"
import { Request } from "./components/request/Request"
import { apiConfig } from "./components/request/apiConfig"
import { MainStyle, FormStyle } from "./components/style/MainStyle"
import { TextField, Button } from "@material-ui/core"
import { Errors } from "./components/form/Errors"
import { errorMessages } from "./components/form/ErrorMessages"
import { isEmpty, isNotSimilar } from "./components/form/formValidation"

function App() {
  const [formFields, setFormFields] = useState({
    email: "",
    userPassword: "",
    confirmPassword: "",
    name: "",
    firstName: "",
    position: "",
    birthDate: ""
  })

  const [errors, setErrors] = useState({
    mail: "",
    password: "",
    passwordConf: "",
    userName: "",
    userPosition: ""
  })

  const {
    email,
    userPassword,
    confirmPassword,
    name,
    firstName,
    position,
    birthDate
  } = formFields
  const { mail, password, passwordConf, userName, userPosition } = errors

  const onChangeFields = e => {
    setFormFields(
      {
        ...formFields,
        [e.target.name]: e.target.value
      },
      [formFields]
    )
  }

  const postFields = e => {
    e.preventDefault()

    // GESTION D'ERREURS CHAMPS VIDES
    if (isEmpty(email, userPassword, confirmPassword, name, position)) {
      setErrors({
        // ...errors,
        mail: `empty${email}`,
        password: `empty${userPassword}`,
        passwordConf: `empty${confirmPassword}`,
        userName: `empty${name}`,
        userPosition: `empty${position}`
      })
    }

    if (!isEmpty(email, userPassword, confirmPassword, name, position)) {
      setErrors({
        mail: "",
        password: "",
        passwordConf: "",
        userName: "",
        userPosition: ""
      })
    }

    // GESTION D'ERREUR PASSWORDS DIFFERENTS
    if (isNotSimilar(userPassword, confirmPassword)) {
      setErrors({ passwordConf: "dontMatch" })
    }

    // REQUETE
    const url = `${apiConfig.url}users`
    const data = {
      email,
      userPassword,
      confirmPassword,
      name,
      firstName,
      position,
      birthDate
    }
    const token = `Bearer ${localStorage.id_token}`
    const reqtype = "post"

    Request(url, data, token, reqtype)
  }

  // console.log("email", email);
  // console.log("userPassword", userPassword);
  // console.log("confirmPassword", confirmPassword);
  // console.log("name", name);
  // console.log("firstName", firstName);
  // console.log("position", position);
  // console.log("BirthDate", birthDate);

  // console.log("mailError", mail);
  // console.log("passwordError", password);
  // console.log("passswordConfError", passwordConf);
  // console.log("userNameError", userName);
  // console.log("userPositionError", userPosition);
  return (
    <MainStyle>
      <FormStyle onSubmit={postFields}>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={onChangeFields}
        />
        {mail === `empty${email}` ? (
          <Errors>{errorMessages.email.empty}</Errors>
        ) : null}

        <TextField
          label="Password"
          name="userPassword"
          type="password"
          value={userPassword}
          onChange={onChangeFields}
        />
        {password === `empty${userPassword}` ? (
          <Errors>{errorMessages.userPassword}</Errors>
        ) : null}

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={onChangeFields}
        />
        {passwordConf === `empty${confirmPassword}` ? (
          <Errors>{errorMessages.confirmPassword.empty}</Errors>
        ) : null}
        {passwordConf === "dontMatch" ? (
          <Errors>{errorMessages.confirmPassword.dontMatch}</Errors>
        ) : null}

        <TextField
          label="Name"
          name="name"
          type="text"
          value={name}
          onChange={onChangeFields}
        />
        {userName === `empty${name}` ? (
          <Errors>{errorMessages.name.empty}</Errors>
        ) : null}

        <TextField
          label="First name"
          name="firstName"
          type="text"
          value={firstName}
          onChange={onChangeFields}
        />

        <NativeSelect
          name="position"
          type="text"
          value={position}
          onChange={onChangeFields}
        />
        {userPosition === `empty${position}` ? (
          <Errors>{errorMessages.position}</Errors>
        ) : null}

        <DatePicker
          name="birthDate"
          value={birthDate}
          onChange={onChangeFields}
        />

        <Button type="submit">Post</Button>
      </FormStyle>
    </MainStyle>
  )
}

export default App
