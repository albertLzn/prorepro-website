<template>
  <div id="top-invoice" class="contact-form-box mt-10 flex flex-col rounded-lg mx-auto">
    <div class="text-4xl mb-5 protitle text-center">Devis en ligne</div>
    <div class='bg-acr' v-show="!sent">
      <FormulateInput
        v-model="form.company"
        type="text"
        label="Votre société"
        class="form-input"
      />
      <FormulateInput
        v-model="form.siret"
        type="text"
        label="N° SIRET"
        validation="length:14"
        :validation-messages="{
          length: 'Le numéro SIRET doit contenir 14 chiffres'
        }"
        class="form-input"
      />
      <FormulateInput
        v-model="form.name"
        type="text"
        label="Nom & Prénom *"
        validation="bail|required"
        @validation="validation.validationName = $event.hasErrors"
        :validation-messages="{
          required: 'Le nom est requis'
        }"
        class="form-input"
      />
      <FormulateInput
        v-model="form.email"
        name="email"
        type="text"
        label="Email professionnel *"
        validation="required|email"
        @validation="validation.validationMail = $event.hasErrors"
        :validation-messages="{
          required: 'Le mail est requis',
          email: 'Entrez un email valide'
        }"
        class="form-input"
      />
      <FormulateInput
        v-model="form.address"
        type="text"
        label="Votre adresse *"
        validation="required"
        @validation="validation.validationAdress = $event.hasErrors"
        :validation-messages="{
          required: `L'adresse est requise`
        }"
        class="form-input"
      />
      <FormulateInput
        v-model="form.postalCode"
        type="text"
        label="Votre code postal *"
        validation="min:5,length|max:5,length|number"
        @validation="validation.validationPostalcode = $event.hasErrors"
        :validation-messages="{
          number: 'Nombre seulement',
          min: 'Code postal invalide',
          max: 'Code postal invalide'
        }"
        class="form-input"
      />
      <FormulateInput
        v-model="form.city"
        type="text"
        label="Votre ville *"
        validation="required"
        @validation="validation.validationCity = $event.hasErrors"
        :validation-messages="{
          required: 'La ville est requise'
        }"
        class="form-input"
      />
      <div class="project-types">
  <label class="project-label">Type de projet *</label>
  <div class="types-grid">
    <div
      v-for="type in types"
      :key="type.id"
      class="type-card"
      :class="{ active: form.type === type.id }"
      @click="form.type = type.id"
    >
      <i :class="type.icon"></i>
      <span>{{ type.name }}</span>
    </div>
  </div>
</div>
      <FormulateInput
        v-if="form.type"
        v-model="form.quantity"
        type="number"
        label="Quantité souhaitée *"
        validation="required|min:1"
        class="form-input"
      />
      <FormulateInput
        v-if="form.type"
        v-model="form.format"
        type="select"
        label="Format *"
        :options="formats"
        validation="required"
        class="form-input"
      />
      <FormulateInput
        v-if="form.type"
        v-model="form.deadline"
        type="date"
        label="Date souhaitée *"
        validation="required"
        class="form-input"
      />
      <FormulateInput
        v-model="form.files"
        type="file"
        label="Vos fichiers"
        multiple
        accept=".pdf,.ai,.eps,.jpg,.png"
        help="Formats acceptés : PDF, AI, EPS, JPG, PNG"
        class="form-input"
      />
      <FormulateInput
        v-if="form.type === 'autre'"
        v-model="form.comment"
        type="textarea"
        label="Précisions supplémentaires"
        class="form-input"
      />
      <button
        :disabled="hasErrors || loading"
        class="submit-button text-white font-bold py-2 px-4 rounded w-full"
        :class="{ 'bg-grey': hasErrors, 'bg-secondary hover:bg-secondaryDarker': !hasErrors }"
        @click.prevent="handleSubmit"
      >
        <div class='spinner' v-if='loading' />
        <span v-if='!loading'>Envoyer</span>
      </button>
    </div>
    <div v-show='sentSucceed' class='validation-text text-center mt-2'>
      Message envoyé !
    </div>
    <div v-show='sentFailed' class='error-text text-center mt-2'>
      Erreur, merci d'essayer à nouveau
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

const types = [
  {
    id: 'standard',
    name: 'Standard',
    icon: 'fas fa-print'
  },
  {
    id: 'grand-format',
    name: 'Grand Format',
    icon: 'fas fa-expand'
  },
  {
    id: 'offset',
    name: 'Offset',
    icon: 'fas fa-industry'
  },
  {
    id: 'finitions',
    name: 'Finitions',
    icon: 'fas fa-star'
  }
];

const formats = ['A4', 'A3', 'A2', 'A1', 'A0', 'Sur mesure'];

const initForm = () => ({
  company: '',
  siret: '',
  name: '',
  email: '',
  address: '',
  postalCode: '',
  city: '',
  type: '',
  quantity: null,
  format: '',
  deadline: '',
  files: [],
  comment: ''
});

const initValidation = () => ({
  validationName: null,
  validationMail: null,
  validationAdress: null,
  validationPostalcode: null,
  validationCity: null,
  validationType: null
});

export default {
  head: {
    title: 'Devis - Pro Repro Paris',
    meta: [
      { hid: 'devis', name: 'devis', content: 'Devis en ligne en ligne Pro Repro' }
    ],
  },
  mounted() {
    emailjs.init('yzdSZ5ZiXmjUBUrYe');
    const nextDiv = document.getElementById('top-invoice');
    nextDiv.scrollIntoView({behavior: 'smooth', block:'nearest'})
  },
  data() {
    return {
      types,
      formats,
      sent: false,
      loading: false,
      form: initForm(),
      validation: initValidation(),
      sentSucceed: false,
      sentFailed: false
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.validation).some(value => value === true);
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await emailjs.send(
          'service_tlnepz8',
          'template_kz0qb9q',
          this.prepareEmailData(),
          'yzdSZ5ZiXmjUBUrYe'
        );

        if (response.status === 200) {
          this.sentSucceed = true;
          this.sent = true;
          this.form = initForm();
        } else {
          throw new Error('Erreur lors de l\'envoi');
        }
      } catch (error) {
        console.error('Erreur:', error);
        this.sentFailed = true;
      } finally {
        this.loading = false;
      }
    },
    prepareEmailData() {
      return {
        company_name: this.form.company,
        siret: this.form.siret,
        from_name: this.form.name,
        from_email: this.form.email,
        address: this.form.address,
        postal_code: this.form.postalCode,
        city: this.form.city,
        request_type: this.form.type,
        quantity: this.form.quantity,
        format: this.form.format,
        deadline: this.form.deadline,
        comment: this.form.comment || "N/A"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form-box {
  width: 500px; // un peu plus large que 350px pour mieux s'aligner
  max-width: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
}

.bg-acr {
  background: rgba(104, 201, 186, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.form-input {
  margin-bottom: 1rem;
  
  :deep(input),
  :deep(select),
  :deep(textarea) {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid rgba(104, 201, 186, 0.3);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.2s;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
    
    &:focus {
      border-color: #68c9ba;
      box-shadow: 0 0 0 2px rgba(104, 201, 186, 0.2);
    }
  }

  :deep(label) {
    font-weight: 500;
    color: #68c9ba;
    margin-bottom: 0.5rem;
  }
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

.validation-text {
  color: green;
}

.error-text {
  color: red;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.project-types {
  margin-bottom: 1rem;
}

.project-label {
  font-weight: 500;
  color: white;
  margin-bottom: 0.5rem;
  display: block;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.type-card {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  color: rgb(104, 201, 186); /* Ajout de la nouvelle couleur */
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &.active {
    background: #2c3e50;
    color: white;
  }
  
  i {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    display: block;

  }
}
</style>