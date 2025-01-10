const API = {
    async fetchProjects() {
      const data = localStorage.getItem('projects');
      return data ? JSON.parse(data) : [];
    },
  
    async getProject(id) {
      const projects = await this.fetchProjects();
      return projects.find(p => p.id === id);
    },
  
    async createProject(data) {
      const projects = await this.fetchProjects();
      const newProject = {
        ...data,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      const updatedProjects = [...projects, newProject];
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return newProject;
    },
  
    async updateProject(id, data) {
      const projects = await this.fetchProjects();
      const updatedProjects = projects.map(p => 
        p.id === id ? { ...p, ...data, updatedAt: new Date().toISOString() } : p
      );
      
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      return updatedProjects.find(p => p.id === id);
    },
  
    async deleteProject(id) {
      const projects = await this.fetchProjects();
      const updatedProjects = projects.filter(p => p.id !== id);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
    },
  
    async uploadImage(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    }
  };