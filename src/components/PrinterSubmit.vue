<template>
    <div class="printer-submit-container">
      <FormPaper 
      :form="form" 
      :isEntering="isEntering"
      :isAnimating="isAnimating"
      :hasDate="hasDate"
      v-show="!isPrinting"

    />
        <div class="printer" @click="handleClick">
      <div class="printer-body">
        <div class="printer-details"></div>
        <div class="printer-light" :class="{ 
  'valid': (!hasErrors && !isAnimating) || isPrintingSuccess,
  'invalid': hasErrors && !isPrintingSuccess,
  'printing': isAnimating && !isPrintingSuccess 
}"></div>
        <div class="printer-text">
          <div class="spinner" v-if="loading"></div>
          <span v-else>Envoyer</span>
        </div>
      </div>
      <div class="paper-slot"></div>
    </div>
      <div class="paper" :class="{ 'animate': isAnimating }">
        <div class="paper-content" v-if="isAnimating">
          <p class="message" :class="{ 'error': printError }">
            {{ printMessage }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FormPaper from './FormPaper.vue'

  export default {
    name: 'PrinterSubmit',
    
    components: {
    FormPaper
  },
    props: {
      form: {
      type: Object,
      required: true
    },
      hasErrors: {
        type: Boolean,
        required: true
      },
      loading: {
        type: Boolean,
        required: true
      },
      hasDate: {
        type: Boolean,
        required:false,
        default: true
      }, 
    },
    data() {
        return {
          isEntering: false,
      isAnimating: false,
      isPrinting: false,
      printError: false,
      printMessage: '',
      isPrintingSuccess: false
    }
    },
    methods: {
  handleClick() {
    if (!this.hasErrors && !this.loading) {
      this.isEntering = true
      setTimeout(() => {
        this.isEntering = false
        this.isPrinting = true
        this.$emit('submit')
      }, 1000)
    }
  },
  printSuccess() {
    this.printMessage = 'Devis envoyé avec succès !\nNous vous contacterons rapidement.'
    this.printError = false
    this.isPrintingSuccess = true
    this.isAnimating = true
    
    this.$nextTick(() => {
      const printerElement = this.$el
      printerElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    })
    
    setTimeout(() => {
      this.isAnimating = false
      this.isPrintingSuccess = false
      this.isPrinting = false
    }, 7000)
  },
  printFailure() {
    this.printMessage = 'Erreur lors de l\'envoi du devis.\nVeuillez réessayer.'
    this.printError = true
    this.isPrintingSuccess = false
    this.isAnimating = true
    
    this.$nextTick(() => {
      const printerElement = this.$el
      printerElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    })
    
    setTimeout(() => {
      this.isAnimating = false
      this.isPrinting = false
    }, 3000)
  }
}
  }
  </script>
  
  <style scoped>
.printer-submit-container {
  width: 100%;
  height: 200px; /* Augmenté pour accommoder le FormPaper */
  position: relative;
  cursor: pointer;
  margin-top: 220px; /* Espace pour le FormPaper */
}

/* Nouveau style pour positionner le FormPaper */
:deep(.form-paper) {
  position: absolute;
  top: -220px; /* Position au-dessus de l'imprimante */
  left: 45%; /* Légèrement décalé vers la gauche */
  transform: translateX(-50%) rotate(-2deg); /* Légère rotation pour l'effet "calé" */
  width: 65%;
  min-height: 220px;
  max-height: 280px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: -1;
  padding: 20px;
  transition: all 0.3s ease;
}

:deep(.form-paper.filled) {
  transform: translateX(-50%) translateY(20px) rotate(-2deg); /* Légèrement inséré dans l'imprimante */
}
  
  .printer {
    width: 100%;
    height: 100px;
    background: linear-gradient(145deg, #2a2a2a, #404040);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
  }
  
  .printer:hover {
    transform: translateY(-2px);
  }
  
  .printer-body {
    position: relative;
    height: 100%;
  }
  
  .printer-details {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 30px;
    background: #222;
    border-radius: 5px;
  }
  
  .printer-light {
    position: absolute;
    top: 15px;
    right: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  .printer-light.valid {
    background: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
  
  .printer-light.invalid {
    background: #ff4444;
    box-shadow: 0 0 5px rgba(255, 68, 68, 0.5);
  }
  
  .printer-light.printing {
    background: #ff4444;
    animation: blinkRed 0.5s infinite;
  }
  
  .paper {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 0;
    background: white;
    opacity: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    z-index: 1000;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .paper-content {
  padding: 15px;
  font-size: 12px;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease;
}

.form-paper:not(.filled) .paper-content {
  opacity: 0;
  visibility: hidden;
}
  .message {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    color: #4CAF50;
    white-space: pre-line;
  }
  
  .message.error {
    color: #ff4444;
  }
  
  .paper.animate {
    animation: printPaper 3s ease-in-out forwards;
  }
  .printer-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width: 100%;
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

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  @keyframes printPaper {
    0% {
      height: 0;
      opacity: 0;
      transform: translateX(-50%) translateY(0);
    }
    20% {
      height: 150px;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    60% {
      height: 150px;
      opacity: 1;
      transform: translateX(-50%) translateY(50px) rotate(2deg);
    }
    100% {
      height: 150px;
      opacity: 0;
      transform: translateX(-50%) translateY(200px) rotate(-3deg);
    }
  }
  
  @keyframes blinkRed {
    0%, 100% { 
      opacity: 1;
      box-shadow: 0 0 5px rgba(255, 68, 68, 0.5);
    }
    50% { 
      opacity: 0.7;
      box-shadow: 0 0 10px rgba(255, 68, 68, 0.8);
    }
  }
  </style>