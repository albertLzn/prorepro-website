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
  v-model="form.file"
  validation="mime:image/jpeg,image/png,image/jpg,application/pdf"
  help="Formats acceptés: jpeg, png, jpg, pdf"
  @validation="validation.validationFile = $event.hasErrors"
/>

      <PrinterSubmit 
        :hasErrors="hasErrors"
        :loading="loading"
        :form="form"
        @submit="handleSubmit"
        ref="printerSubmit"
        :hasDate="true"
      />
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
import PrinterSubmit from './PrinterSubmit.vue'

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
  components: {
    PrinterSubmit,
  },
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
      try {
        this.loading = true;
        const formData = new FormData();
        
        
     // Modification de la gestion du fichier
     if (this.form.file && this.form.file.length > 0) {
      formData.append('files', this.form.file[0]);
    }
    formData.append('name', this.form.name);
    formData.append('email', this.form.email);
    formData.append('subject', this.form.subject || 'Sans objet');
    formData.append('message', this.form.message);
    
        const response = await fetch('https://prorepro-mailserver.onrender.com/send-email', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          this.$refs.printerSubmit.printSuccess();
          this.form = initForm();
          this.sentSucceed = true;
        } else {
          throw new Error('Erreur lors de l\'envoi');
        }
      } catch (error) {
        console.error('Erreur:', error);
        this.$refs.printerSubmit.printFailure();
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
  margin-top: 50px;
}

@media screen and (max-width: 768px) {
  .contact-form-box {
    margin-top: 10px;
  }
}
.contact-form-box div label {
  margin-bottom: 10px;
}

.validation-text {
  background: rgba(104, 201, 186, 0.1);
  color: #68c9ba;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(104, 201, 186, 0.2);
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-text {
  color: red;
}

.formulate-input {
  & .formulate-input-element {
    max-width: unset;
  }
  & input {
    background: white;
  }
  & textarea {
    background: white;
  }
}
</style>