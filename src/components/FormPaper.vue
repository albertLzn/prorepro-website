<template>
    <div class="form-paper" :class="{ 
      'filled': true,
      'entering': isEntering,
      'animate': isAnimating 
    }">
      <div class="paper-content">
        <!-- En-tête avec infos expéditeur -->
        <div class="header">
          <div class="sender-info">
            <div class="name" v-if="form.name">{{ form.name }}</div>
            <div class="email" v-if="form.email">{{ form.email }}</div>
            <div class="address" v-if="form.address">
              {{ form.address }}<br>
              {{ form.postalCode }} {{ form.city }}
            </div>
          </div>
          <div v-if="hasDate" class="date">{{ currentDate }}</div>
        </div>
  
        <!-- Titre dynamique selon le type -->
        <div class="title" v-if="getTitle">
          {{ getTitle }}
        </div>
  
        <!-- Corps du message -->
        <div class="body-content">
          {{ getContent }}
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormPaper',
    props: {
      form: {
        type: Object,
        required: true
      },
      isEntering: {
        type: Boolean,
        default: false
      },
      isAnimating: {
        type: Boolean,
        default: false
      }, 
      hasDate: {
        type: Boolean,
        required:false,
        default: true
      }, 
    },
    computed: {
      currentDate() {
        return new Date().toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })
      },
      getTitle() {
        if (this.form.type) {
          return `Demande de devis - ${this.form.type}`
        }
        return this.form.subject || 'Sans objet'
      },
      getContent() {
    let content = '';
    
    // Pour un devis
    if (this.form.type) {
      content = `
        ${this.form.company ? `Société: ${this.form.company}\n` : ''}
        ${this.form.siret ? `SIRET: ${this.form.siret}\n` : ''}
        Type de projet: ${this.form.type}
        ${this.form.quantity ? `Quantité: ${this.form.quantity}\n` : ''}
        ${this.form.format ? `Format: ${this.form.format}\n` : ''}
        ${this.form.deadline ? `Date souhaitée: ${this.form.deadline}\n` : ''}
        ${this.form.comment ? `\nSpécifications: ${this.form.comment}` : ''}
      `.trim();
    } else {
      // Pour un contact
      content = this.form.message || '';
    }
    
    // Truncate to 50 characters
    return content.length > 50 ? content.substring(0, 50) + '...' : content;
  }
    }
  }
  </script>
  
  <style scoped>

  

  .form-paper.entering {
    animation: enterPrinter 1s forwards;
  }
  
  .form-paper.animate {
    animation: printPaper 3s ease-in-out forwards;
  }
  
  .paper-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  

  .sender-info {
  text-align: left;
  margin-bottom: 10px;
  font-size: 14px;
}

.name {
  font-weight: bold;
  color: black;

  margin-bottom: 2px;
}
  .email {
    color: #666;
    margin-bottom: 2px;
  }
  
  .address {
    color: #666;
    font-style: italic;
  }
  
  .date {
    font-size: 12px;
    color: #666;
    font-style: italic;
  }
  
  .title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #2c3e50;
    text-decoration: underline;
  }
  
  .body-content {
    font-size: 14px;
    white-space: pre-line;
    color: #2f6ba6;
  }
  

  @keyframes enterPrinter {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(220px);
      opacity: 0;
    }
  }
  
  @keyframes printPaper {
    0% {
      height: auto;
      opacity: 0;
      transform: translateX(-50%) translateY(0);
    }
    20% {
      height: auto;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    60% {
      height: auto;
      opacity: 1;
      transform: translateX(-50%) translateY(50px) rotate(2deg);
    }
    100% {
      height: auto;
      opacity: 0;
      transform: translateX(-50%) translateY(200px) rotate(-3deg);
    }
  }
  </style>