<template>
  <div id="top-invoice" class="contact-form-box mt-10 flex flex-col rounded-lg mx-auto">
    <div class="text-4xl mb-5 protitle text-center">Devis en ligne</div>
    <div class='bg-acr' v-show="!sent">
      <FormulateInput
        v-model="form.company"
        type="text"
        label="Votre société"
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
      />
      <FormulateInput
        v-model="form.email"
        name="email"
        type="text"
        label="Votre adresse de messagerie *"
        validation="required|email"
        @validation="validation.validationMail = $event.hasErrors"
        :validation-messages="{
          required: 'Le mail est requis',
          email: 'Entrez un email valide'
        }"
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
      />
      <FormulateInput
        v-model="form.postalCode"
        type="text"
        label="Votre code postal *"
        validation="min:5,length|max:5,length|number|number"
        @validation="validation.validationPostalcode = $event.hasErrors"
        :validation-messages="{
          number: 'Nombre seulement',
          min: 'Entrer un code postal valide',
          max: 'Entrer un code postal valide'
        }"
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
      />
      <FormulateInput
        v-model="form.tva"
        type="text"
        label="Votre numéro de TVA (optionnel)"
      />
      <FormulateInput
        v-model="form.type"
        type="select"
        label="Type de la demande *"
        :options="types"
        placeholder="Sélectionner une demande"
        @validation="validation.validationType = $event.hasErrors"
        validation="required"
        :validation-messages="{
          required: 'Le type de la demande est requis'
        }"
      />
      <FormulateInput
        v-if="form.type === 'autre'"
        v-model="form.comment"
        type="textarea"
        label="Commentaire * (optionnel)"
      />
      <button
         :disabled="hasErrors || loading" 
         class="
           submit-button text-white font-bold py-2 px-4 rounded w-full" 
         :class="{ 'bg-grey': hasErrors, 'bg-secondary hover:bg-secondaryDarker': !hasErrors }" @click.prevent="handleSubmit">
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

const types = ['standard', 'grand format', 'offset', 'autre'];

const initForm = () => ({
  company: '',
  name: '',
  phone: '',
  email: '',
  address: '',
  postalCode: '',
  city: '',
  tva: '',
  type: '',
  comment: ''
});

const initValidation = () => ({
  validationName: null,
  validationPhone: null,
  validationMail: null,
  validationAdress: null,
  validationPostalcode: null,
  validationCity: null,
  validationTva: null,
  validationType: null,
});

export default {
   head: {
    title: 'Home page',
     meta: [
       { hid: 'devis', name: 'devis', content: 'Demande de devis en ligne' }
     ],
   },
mounted() {
  emailjs.init('yzdSZ5ZiXmjUBUrYe');
  const nextDiv = document.getElementById('top-invoice');
  nextDiv.scrollIntoView({ behavior: 'smooth' });
},
   data() {
     return {
       types,
       sent: false,
       loading: false,
       form: initForm(),
       validation: initValidation(),
       sentSucceed: false,
       sentFailed: false
     };
   },
   computed:{
     hasErrors() {
       const {
         validationName,
         validationPhone,
         validationMail,
         validationAdress,
         validationPostalcode,
         validationCity,
         validationTva,
         validationType
       } = this.validation;
       return (
         validationName ||
         validationPhone ||
         validationAdress ||
         validationPostalcode ||
         validationCity ||
         validationTva ||
         validationType ||
         validationMail
       );
     }
   },
   methods:{
    async handleSubmit() {
    try {
      this.loading = true;
      
      const templateParams = {
        company_name: this.form.company,
        from_name: this.form.name,
        from_email: this.form.email,
        address: this.form.address,
        postal_code: this.form.postalCode,
        city: this.form.city,
        tva_number: this.form.tva || "N/A",
        request_type: this.form.type,
        comment: this.form.comment || "N/A",
      };

      const response = await emailjs.send(
        'service_tlnepz8', 
        'template_kz0qb9q', 
        templateParams, 
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
  }
   }
};
</script>

<style lang='scss' scoped>
.contact-form-box{
 width:
350px;
 max-width:
100%;
}

.contact-form-box div label{
 margin-bottom:
10px;
}
.contact-form-box div.formulate-input-element{
 max-width:
unset;
}

@keyframes spinner{
 to{
 transform:
rotate(360deg);
}
}

.submit-button{
 position:
relative;
 min-height:
40px;
}

.spinner::before{
 content:
"";
 position:
absolute;
 box-sizing:
border-box;
 top:
50%;
 left:
50%;
 width:
20px;
 height:
20px;
 margin-top:
 -10px;
 margin-left:
 -10px;
 border-radius:
50%;
 border:
2px solid #ccc;
 border-top-color:#000;
 animation:
spinner .6s linear infinite;
}

.validation-text{
 color:
green;
}

.error-text{
 color:red;
}

.formulate-input{
 & .formulate-input-element{
 max-width:
unset;
}
 & input{
 background:white;
}
 & textarea{
 background:white;
}
 & select{
 background:white;
}
}

.bg-acr{
 background-color:
rgba(0,0,0,.5);
 padding:
15px;
}
</style>