<template>
  <div class="contact-form-box flex flex-col rounded-lg p-4">
    <div v-if="!sent">
      <FormulateInput
        v-model="form.name"
        type="text"
        label="Votre nom *"
        validation="bail|required"
        @validation="validation.validationName = $event.hasErrors"
        :validation-messages="{
          required: 'Le nom est requis'
        }"
      />
      <FormulateInput
        v-model="form.email"
        type="text"
        label="Votre adresse de messagerie *"
        validation="required|email"
        @validation="validation.validationMail = $event.hasErrors"
        :validation-messages="{
          required: 'Le mail est requis',
          email: 'Entrez un email valide'
        }"
      />
      <FormulateInput v-model="form.subject" type="text" label="Objet" />
      <FormulateInput
        v-model="form.message"
        type="textarea"
        label="Message *"
        validation="required"
        @validation="validation.validationMessage = $event.hasErrors"
        :validation-messages="{
          required: 'Le message est requis'
        }"
      />
      <FormulateInput
        label="Envoyer un fichier"
        type="file"
        name="file"
        upload-behavior="delayed"
        v-model="form.file"
        validation="mime:image/jpeg,image/png,image/jpg,application/pdf"
        help="Formats acceptés: jpeg, png, jpg, pdf"
        @validation="validation.validationFile = $event.hasErrors"
      />
      <button
        :disabled="hasErrors || loading"
        class="submit-button text-white font-bold py-2 px-4 rounded w-full"
        :class="hasErrors ? 'bg-grey' : 'bg-secondary hover:bg-secondaryDarker'"
        @click="handleSubmit"
      >
        <div class="spinner" v-if="loading" />
        <span v-else>
          Envoyer
        </span>
      </button>
    </div>
    <div v-show="sentSucceed" class="validation-text text-center mt-2">
      Message envoyé !
    </div>
    <div v-show="sentFailed" class="error-text text-center mt-2">
      Erreur, merci d'essayer à nouveau
    </div>
  </div>
</template>

<script>
import axios from "@/utils/axios";

const initForm = () => ({
  name: "",
  email: "",
  subject: "",
  message: "",
  file: false
});

const initValidation = () => ({
  validationName: false,
  validationMail: false,
  validationMessage: false,
  validationFile: false
});

export default {
  data: () => ({
    sent: false,
    loading: false,
    form: initForm(),
    validation: initValidation(),
    sentSucceed: false,
    sentFailed: false
  }),
  computed: {
    hasErrors() {
      const {
        validationName,
        validationMail,
        validationFile,
        validationMessage
      } = this.validation;
      return (
        validationName || validationMail || validationMessage || validationFile
      );
    }
  },
  methods: {
    async handleSubmit() {
      this.sentFailed = false;
      const forms = Object.entries(this.form);
      try {
        this.loading = true;
        const formData = new FormData();
        forms.forEach(val => {
          if (val[0] === "file" && val[1]) {
            formData.append(val[0], val[1].files[0].file);
          }
          if (val[1]) {
            formData.append(val[0], val[1]);
          }
        });

        await axios.post("https://prorepro-server.herokuapp.com/contact", formData, {
          headers: {
            "content-type": "multipart/form-data"
          }
        });

        this.sentSucceed = true;
        this.sent = true;
      } catch (e) {
        this.sentFailed = true;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form-box {
  width: 350px;
  max-width: 100%;
}

.contact-form-box  div label {
  margin-bottom: 10px;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.submit-button {
  position: relative;
  min-height: 40px;
}

.spinner:before {
  content: "";
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #000;
  animation: spinner 0.6s linear infinite;
}

.validation-text {
  color: green;
}

.error-text {
  color: red;
}

.formulate-input {
  &  .formulate-input-element {
    max-width: unset;
  }
  &  input {
    background: white;
  }
  &  textarea {
    background: white;
  }
}
</style>
