document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addTecnologiaBtn').addEventListener('click', function() {
      const newTechLine = document.createElement('div');
  
      const techNameInput = document.createElement('input');
      techNameInput.setAttribute('type', 'text');
      techNameInput.setAttribute('placeholder', 'Nome da Tecnologia');
  
      const experienceRadios = createExperienceRadios();
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remover';
      removeBtn.addEventListener('click', function() {
        newTechLine.remove(); 
      });
  
      newTechLine.appendChild(techNameInput);
      newTechLine.appendChild(experienceRadios);
      newTechLine.appendChild(removeBtn);
  
      document.getElementById('technologies').appendChild(newTechLine);
    });
  
    // Lidar com o evento de clique do botão "Cadastrar"
    document.getElementById('cadastrarBtn').addEventListener('click', function(event) {
      // Impede o envio padrão do formulário
      event.preventDefault();
  
      // Obtém o nome do desenvolvedor
      const devName = document.getElementById('nome').value;
  
      // Obtém as tecnologias e suas experiências
      const technologies = [];
      const technologyLines = document.querySelectorAll('#technologies > div');
      
      technologyLines.forEach(line => {
        const techName = line.querySelector('input[type="text"]').value;
        const experience = line.querySelector('input[name="experience"]:checked').value;
  
        technologies.push({ nome: techName, experiencia: experience });
      });
  
      // Cria o objeto do desenvolvedor
      const developer = {
        nome: devName,
        tecnologias: technologies
      };
  
      // Faz algo com os dados do desenvolvedor (exibir no console, enviar para um servidor, etc.)
      console.log(developer); 
  
      // Reseta o formulário (opcional)
      document.getElementById('devForm').reset(); 
    });
  
    function createExperienceRadios() {
      const experienceDiv = document.createElement('div');
      const experienceOptions = ["0-2 anos", "3-4 anos", "5+ anos"];
  
      experienceOptions.forEach(option => {
        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'experience'); 
        radio.setAttribute('value', option);
        const label = document.createElement('label');
        label.textContent = option;
  
        experienceDiv.appendChild(radio);
        experienceDiv.appendChild(label);
      });
  
      return experienceDiv;
    }
  });