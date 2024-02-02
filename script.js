// JavaScript for immediate scrolling and active link highlighting
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetSectionId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);
  
      const headerHeight = document.querySelector('header').offsetHeight;
      const containerPadding = 70; // Adjust this value based on your container's padding
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - headerHeight - containerPadding,
          behavior: 'smooth'
        });
  
        // Highlight the active link
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
    
      let currentProjectIndex = 0;
    
      function showProjects(index) {
        const projects = document.querySelectorAll('.project');
        for (let i = 0; i < projects.length; i++) {
          projects[i].style.display = 'none';
        }
    
        for (let i = index; i < index + 3; i++) {
          if (projects[i]) {
            projects[i].style.display = 'block';
          }
        }
      }
    
      function changeProject(n) {
        const projects = document.querySelectorAll('.project');
        const maxIndex = projects.length - 3; // Maximum index to show three projects
    
        currentProjectIndex += n;
    
        if (currentProjectIndex < 0) {
          currentProjectIndex = 0;
        } else if (currentProjectIndex > maxIndex) {
          currentProjectIndex = maxIndex;
        }
    
        showProjects(currentProjectIndex);
      }
    
      // Show the initial projects
      showProjects(currentProjectIndex);

