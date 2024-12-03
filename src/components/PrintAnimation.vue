<template>
    <div class="basic-print-animation-container" @click="startPrintAnimation">
      <div class="basic-printer">
        <div class="basic-printer-body">
          <div class="basic-printer-details"></div>
          <div class="basic-printer-light" :class="{ 'basic-printing': isAnimating }"></div>
          <div class="basic-printer-text">Cliquez pour imprimer</div>
        </div>
        <div class="basic-paper-slot"></div>
      </div>
      <div class="basic-paper" :class="{ 'basic-animate': isAnimating }">
        <div class="basic-paper-content" v-if="isAnimating">
          <p class="basic-quote">{{ currentQuote.text }}</p>
          <p class="basic-author">{{ currentQuote.author }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PrintAnimation',
    data() {
      return {
        isAnimating: false,
        currentQuoteIndex: 0,
        quotes: [
          {
            text: "L'imprimerie est l'artillerie de la pensée.",
            author: "Victor Hugo"
          },
          {
            text: "Les fleurs sentent l'encre d'imprimerie.",
            author: "Charles Baudelaire"
          },
          {
            text: "Ce qui répand le plus de lumière, c'est l'encre noire.",
            author: "Paul Claudel"
          },
          {
            text: "La pensée est volatile, insaisissable, indestructible.",
            author: "Albert Camus"
          },
          {
            text: "On publie pour les amis inconnus.",
            author: "Stendhal"
          },
          {
            text: "Les mots sont des ailes pour l'esprit.",
            author: "Anatole France"
          },
          {
            text: "Chaque page est une nouvelle aventure.",
            author: "Jules Verne"
          },
          {
            text: "L'écriture est la peinture de la voix.",
            author: "Voltaire"
          },
          {
            text: "Une image vaut mille mots.",
            author: "Confucius"
          },
          {
            text: "Le papier est patient.",
            author: "Anne Frank"
          }
        ]
      }
    },
    mounted() {
      this.startPrintAnimation();
    },
    computed: {
      currentQuote() {
        return this.quotes[this.currentQuoteIndex];
      }
    },
    methods: {
      startPrintAnimation() {
        if (!this.isAnimating) {
          this.isAnimating = true;
          this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
          setTimeout(() => {
            this.isAnimating = false;
          }, 5000);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .basic-print-animation-container {
    position: absolute;
    width: 250px;
    height: 100px;
    cursor: pointer;
    overflow: visible;
  }
  
  .basic-printer {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(145deg, #2a2a2a, #404040);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  .basic-printer-body {
    position: relative;
    height: 100%;
  }
  
  .basic-printer-details {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 30px;
    background: #222;
    border-radius: 5px;
  }
  
  .basic-printer-light {
    position: absolute;
    top: 15px;
    right: 20px;
    width: 8px;
    height: 8px;
    background: #4CAF50;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
  
  .basic-paper-slot {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 2px;
    background: #666;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
  
  .basic-printer-light.basic-printing {
    background: #ff4444;
    box-shadow: 0 0 5px rgba(255, 68, 68, 0.5);
    animation: basic-blinkRed 0.5s infinite;
  }
  
  .basic-paper {
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
  
  .basic-paper-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .basic-quote {
    font-family: 'Petit Formal Script', cursive;
    font-style: italic;
    font-size: 16px;
    margin: 0 0 10px 0;
    text-align: center;
    color: #333;
  }
  
  .basic-author {
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin: 0;
    color: #666;
  }
  
  .basic-paper.basic-animate {
    animation: basic-printPaper 3s ease-in-out forwards;
  }
  
  .basic-printer-text {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 12px;
    opacity: 0.8;
    font-weight: 300;
    text-align: center;
    width: 100%;
  }
  
  @keyframes basic-printPaper {
    0% {
      height: 0;
      opacity: 0;
      transform: translateX(-50%) translateY(0);
    }
    20% {
      height: 200px;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    60% {
      height: 200px;
      opacity: 1;
      transform: translateX(-50%) translateY(50px) rotate(2deg);
    }
    100% {
      height: 200px;
      opacity: 0;
      transform: translateX(-50%) translateY(200px) rotate(-3deg);
    }
  }
  
  @keyframes basic-blinkRed {
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