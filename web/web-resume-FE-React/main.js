class ResumeApp {
    constructor() {
        this.currentSchema = null;
        this.config = null;
        this.init();
    }

    async init() {
        await this.loadConfig();
        await this.loadSchema(this.config.currentSchema);
        this.calculateAge();
    }

    async loadConfig() {
        try {
            const response = await fetch('./schemas/config.json');
            this.config = await response.json();
        } catch (error) {
            console.error('Error loading config:', error);
        }
    }

    async loadSchema(schemaId) {
        try {
            const schemaConfig = this.config.availableSchemas.find(s => s.id === schemaId);
            if (!schemaConfig) {
                throw new Error(`Schema ${schemaId} not found`);
            }

            const response = await fetch(`./${schemaConfig.file}`);
            this.currentSchema = await response.json();
            
            this.renderResume();
        } catch (error) {
            console.error('Error loading schema:', error);
        }
    }

    renderResume() {
        this.renderMeta();
        this.renderPersonal();
        this.renderContacts();
        this.renderLanguages();
        this.renderSkills();
        this.renderPortfolio();
        this.renderExperience();
        this.renderEducation();
        this.renderCourses();
        this.renderAbout();
    }

    renderMeta() {
        document.title = this.currentSchema.meta.title;
        document.documentElement.lang = this.currentSchema.meta.language;
        
        // Update favicon
        let favicon = document.querySelector('link[rel="shortcut icon"]');
        if (!favicon) {
            favicon = document.createElement('link');
            favicon.rel = 'shortcut icon';
            document.head.appendChild(favicon);
        }
        favicon.href = this.currentSchema.meta.favicon;
    }

    renderPersonal() {
        const personal = this.currentSchema.personal;
        document.getElementById('personName').textContent = personal.name;
        document.getElementById('personPosition').textContent = personal.position;
        document.getElementById('personLocation').textContent = personal.location;

        // Render photo
        const photoContainer = document.getElementById('photoContainer');
        photoContainer.innerHTML = `
            <img src="${personal.photo}" alt="${personal.name}">
        `;

        // Store birth date for age calculation
        this.birthDate = new Date(personal.birthDate);
        this.calculateAge();
    }

    renderContacts() {
        const contactsList = document.getElementById('contactsList');
        contactsList.innerHTML = '';

        this.currentSchema.personal.contacts.forEach(contact => {
            const li = document.createElement('li');
            
            let contactHTML = `
                <a href="${contact.url || '#'}">
                    <i class="bi ${contact.icon} ${contact.class} icon"></i>
                    ${contact.value}
                </a>
            `;

            // Add links if available
            if (contact.links) {
                contact.links.forEach(link => {
                    contactHTML += `
                        <a href="${link.url}">
                            ${link.icon.startsWith('./img')?`<img src="${link.icon}" alt="${link.alt}" class="${link.class} icon img"/>`:`<i class="bi ${link.icon} ${link.class} icon"></i>`}
                        </a>
                    `;
                });
            }

            li.innerHTML = contactHTML;
            contactsList.appendChild(li);
        });
    }

    renderLanguages() {
        const languagesList = document.getElementById('languagesList');
        languagesList.innerHTML = '';

        this.currentSchema.languages.forEach(lang => {
            const li = document.createElement('li');
            
            let starsHTML = '';
            for (let i = 0; i < 5; i++) {
                const starClass = i < lang.stars ? 'fill' : 'empty';
                starsHTML += `<span class="${starClass}"></span>`;
            }

            li.innerHTML = `
                <span class="langName">${lang.name}</span>
                <div>
                    <span class="lang-level">${starsHTML}</span>
                    <span>${lang.level}</span>
                </div>
            `;
            
            languagesList.appendChild(li);
        });
    }

    renderSkills() {
        const skillsList = document.getElementById('skillsList');
        skillsList.innerHTML = '';

        this.currentSchema.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }

    renderPortfolio() {
        const linkTree = document.getElementById('linkTree');
        linkTree.innerHTML = '';

        this.currentSchema.linkTree.forEach(link => {
            const li = document.createElement('li');
            li.textContent = link;
            linkTree.appendChild(li);
        });
    }

    renderExperience() {
        const experienceList = document.getElementById('experienceList');
        experienceList.innerHTML = '';

        this.currentSchema.experience.forEach(exp => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'experience-item';
            
            const itemsHTML = exp.items.map(item => `<li>${item}</li>`).join('');
            
            itemDiv.innerHTML = `
                <span class="date">${exp.period}</span>
                <div>
                    <h4 class="name-experience">${exp.company}</h4>
                    <h4 class="speciality-experience">${exp.title}</h4>
                    <ul>${itemsHTML}</ul>
                </div>
            `;
            
            experienceList.appendChild(itemDiv);
        });
    }

    renderEducation() {
        const educationList = document.getElementById('educationList');
        educationList.innerHTML = '';

        this.currentSchema.education.forEach(edu => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'education-item';
            
            const itemsHTML = edu.items.map(item => `<li>${item}</li>`).join('');
            
            itemDiv.innerHTML = `
                <span class="date">${edu.period}</span>
                <div>
                    <h4 class="name-experience">${edu.institution}</h4>
                    <h4 class="speciality-experience">${edu.title}</h4>
                    <ul>${itemsHTML}</ul>
                </div>
            `;
            
            educationList.appendChild(itemDiv);
        });
    }

    renderCourses() {
        const coursesList = document.getElementById('coursesList');
        coursesList.innerHTML = '';

        this.currentSchema.courses.forEach(course => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'course-item';
            
            const itemsHTML = course.items.map(item => `<li>${item}</li>`).join('');
            
            itemDiv.innerHTML = `
                <span class="date">${course.period}</span>
                <div>
                    <h4 class="name-experience">${course.institution}</h4>
                    <h4 class="speciality-experience">${course.title}</h4>
                    <ul>${itemsHTML}</ul>
                </div>
            `;
            
            coursesList.appendChild(itemDiv);
        });
    }

    renderAbout() {
        const about = this.currentSchema.about;
        document.getElementById('aboutText').textContent = about.text;
    }

    calculateAge() {
        if (!this.birthDate) return;

        const now = new Date();
        const oldSpan = document.querySelector(".old");
        
        if (oldSpan) {
            let age = now.getFullYear() - this.birthDate.getFullYear();
            
            const monthDiff = now.getMonth() - this.birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < this.birthDate.getDate())) {
                age--;
            }
            
            oldSpan.textContent = age;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResumeApp();
});