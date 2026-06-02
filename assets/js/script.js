const knowledgeData = [
  {
    category: "WEB",
    icon: "fa-solid fa-laptop-code",
    description: "Ferramentas centrais para interfaces, APIs, integrações e manutenção de aplicações web.",
    groups: [
      {
        level: "Avançado",
        progress: 90,
        items: [
          { name: "PHP", icon: "fa-brands fa-php" },
          { name: "JavaScript", icon: "fa-brands fa-js" },
          { name: "HTML", icon: "fa-brands fa-html5" },
          { name: "CSS", icon: "fa-brands fa-css3-alt" },
          { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
          { name: "Python", icon: "fa-brands fa-python" },
          { name: "Yii", icon: "devicon-yii-plain" }
        ]
      },
      {
        level: "Intermediário",
        progress: 70,
        items: [
          { name: "React", icon: "fa-brands fa-react" },
          { name: "Flask", icon: "devicon-flask-original" },
          { name: "Laravel", icon: "fa-brands fa-laravel" }
        ]
      }
    ]
  },
  {
    category: "Ciência e Engenharia de Dados",
    icon: "fa-solid fa-database",
    description: "Stack aplicada à modelagem, processamento, orquestração e disponibilização confiável de dados.",
    groups: [
      {
        level: "Avançado",
        progress: 90,
        items: [
          { name: "MySQL", icon: "devicon-mysql-original" },
          { name: "Airflow", icon: "devicon-apacheairflow-original" },
          { name: "Spark", icon: "devicon-apachespark-original" },
          { name: "Python", icon: "fa-brands fa-python" },
          { name: "Excel", icon: "fa-solid fa-file-excel" }
        ]
      },
      {
        level: "Intermediário",
        progress: 70,
        items: [
          { name: "RabbitMQ", icon: "devicon-rabbitmq-original" },
          { name: "MongoDB", icon: "devicon-mongodb-plain" }
        ]
      }
    ]
  }
];

const materialsData = [
  {
    title: "Estatística Descritiva com Dados Reais",
    category: "Estatística",
    description: "Material introdutório com medidas-resumo, visualização e interpretação de bases reais.",
    tags: ["Aula", "PDF"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: "assets/files/material-modelo.txt"
  },
  {
    title: "Distribuições e Modelos Probabilísticos",
    category: "Probabilidade",
    description: "Resumo técnico com distribuições discretas e contínuas aplicado a problemas clássicos.",
    tags: ["Guia", "Revisão"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: null
  },
  {
    title: "Oficina de Python para Análise de Dados",
    category: "Programação",
    description: "Roteiro de aula com leitura de arquivos, limpeza inicial e visualização exploratória.",
    tags: ["Notebook", "Python"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: "assets/files/material-modelo.txt"
  },
  {
    title: "SQL para Consultas Analíticas",
    category: "Banco de Dados",
    description: "Conjunto de exemplos práticos com joins, agregações e consultas voltadas a relatórios.",
    tags: ["SQL", "Exemplos"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: null
  },
  {
    title: "Pipeline Introdutório de Ciência de Dados",
    category: "Ciência de Dados",
    description: "Visão geral do fluxo entre coleta, preparação, modelagem e comunicação de resultados.",
    tags: ["Pipeline", "Didático"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: "assets/files/material-modelo.txt"
  },
  {
    title: "Lista 04 - Inferência e Intervalos de Confiança",
    category: "Listas de Exercícios",
    description: "Exercícios graduados para prática de estimação, interpretação e tomada de decisão.",
    tags: ["Lista", "Resolução"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: "assets/files/material-modelo.txt"
  },
  {
    title: "Slides | Introdução ao Linkage Probabilístico",
    category: "Slides",
    description: "Apresentação sobre fundamentos, desafios e critérios de pareamento entre bases heterogêneas.",
    tags: ["Slides", "Pesquisa"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: null
  },
  {
    title: "Códigos de Regressão e Simulação Monte Carlo",
    category: "Códigos",
    description: "Pacote demonstrativo com scripts de regressão linear, experimentos simulados e análise gráfica.",
    tags: ["Código", "Modelagem"],
    accessLink: "assets/files/material-modelo.txt",
    downloadLink: "assets/files/material-modelo.txt"
  }
];

const projectsData = [
  {
    title: "Plataforma de Gestão Acadêmica",
    description: "Sistema web para cadastro, acompanhamento e organização de rotinas acadêmicas com foco em produtividade administrativa.",
    techs: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    repositoryLink: "https://github.com/topics/academic-management",
    projectLink: "https://github.com/topics/academic-management",
    label: "Profissional"
  },
  {
    title: "Pipeline ETL para Indicadores Institucionais",
    description: "Fluxo de ingestão, transformação e consolidação de dados para produção recorrente de indicadores e relatórios analíticos.",
    techs: ["Python", "Airflow", "Spark", "MySQL"],
    repositoryLink: "https://github.com/topics/etl",
    projectLink: "https://github.com/topics/data-pipeline",
    label: "Dados"
  },
  {
    title: "Ambiente Experimental para Linkage de Dados",
    description: "Protótipo para avaliação de estratégias de pareamento em bases extensas, com comparação entre abordagens determinísticas e probabilísticas.",
    techs: ["Python", "Pandas", "Estatística", "Pesquisa"],
    repositoryLink: "https://github.com/topics/record-linkage",
    projectLink: "https://github.com/topics/record-linkage",
    label: "Acadêmico"
  },
  {
    title: "Simulador para Modelagem Computacional",
    description: "Projeto voltado à análise numérica e simulação de cenários com ênfase em interpretação computacional e visualização.",
    techs: ["Python", "Modelagem", "Simulação", "Visualização"],
    repositoryLink: "https://github.com/topics/computational-science",
    projectLink: "https://github.com/topics/computational-science",
    label: "Pesquisa"
  },
  {
    title: "Dashboard de Estatística Aplicada",
    description: "Painel para leitura de indicadores, exploração visual e comunicação de resultados estatísticos em ambiente web.",
    techs: ["JavaScript", "Bootstrap", "SQL", "Análise de Dados"],
    repositoryLink: "https://github.com/topics/statistics-dashboard",
    projectLink: "https://github.com/topics/statistics",
    label: "Aplicado"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderKnowledge();
  renderMaterialFilters();
  renderMaterials("Todos");
  renderProjects();
  setupSmoothScroll();
  setupCopyEmail();
  setupFormValidation();
  setupFooterYear();
  setupRevealAnimations();
  setupKnowledgeAnimations();
  setupNavbarState();
});

function renderKnowledge() {
  const knowledgeGrid = document.getElementById("knowledgeGrid");

  knowledgeGrid.innerHTML = knowledgeData
    .map(
      (section) => `
        <div class="col-lg-6">
          <article class="knowledge-card reveal">
            <div class="card-intro">
              <span class="content-badge">
                <i class="${section.icon}"></i>
                ${section.category}
              </span>
              <h3>${section.category}</h3>
              <p>${section.description}</p>
            </div>

            ${section.groups
              .map(
                (group) => `
                  <div class="knowledge-group">
                    <div class="knowledge-group-title">
                      <strong>${group.level}</strong>
                      <span class="knowledge-level-badge">${group.progress}%</span>
                    </div>
                    <div class="skill-list">
                      ${group.items
                        .map(
                          (item) => `
                            <div class="skill-item">
                              <div class="skill-head">
                                <div class="skill-icon"><i class="${item.icon}"></i></div>
                                <div class="skill-meta">
                                  <h4>${item.name}</h4>
                                  <span>${group.level}</span>
                                </div>
                                <span class="skill-percent">${group.progress}%</span>
                              </div>
                              <div class="progress-track">
                                <div class="progress-fill" data-progress="${group.progress}"></div>
                              </div>
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                  </div>
                `
              )
              .join("")}
          </article>
        </div>
      `
    )
    .join("");
}

function renderMaterialFilters() {
  const filtersContainer = document.getElementById("materialsFilters");
  const categories = ["Todos", ...new Set(materialsData.map((material) => material.category))];

  filtersContainer.innerHTML = categories
    .map(
      (category) => `
        <button
          type="button"
          class="filter-button ${category === "Todos" ? "active" : ""}"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
    .join("");

  filtersContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-button");

    if (!button) {
      return;
    }

    filtersContainer.querySelectorAll(".filter-button").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderMaterials(button.dataset.category);
    setupRevealAnimations();
  });
}

function renderMaterials(activeCategory) {
  const materialsGrid = document.getElementById("materialsGrid");
  const filteredMaterials =
    activeCategory === "Todos"
      ? materialsData
      : materialsData.filter((material) => material.category === activeCategory);

  if (!filteredMaterials.length) {
    materialsGrid.innerHTML = `
      <div class="col-12">
        <article class="material-card reveal">
          <h3>Nenhum material encontrado</h3>
          <p>Selecione outra categoria ou adicione novos itens no arquivo <strong>assets/js/script.js</strong>.</p>
        </article>
      </div>
    `;
    return;
  }

  materialsGrid.innerHTML = filteredMaterials
    .map(
      (material) => `
        <div class="col-md-6 col-xl-4">
          <article class="material-card reveal">
            <span class="content-badge">
              <i class="fa-solid fa-book-open"></i>
              ${material.category}
            </span>
            <h3>${material.title}</h3>
            <p>${material.description}</p>
            <div class="content-tags">
              ${material.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="card-actions">
              <a class="btn-link-card" href="${material.accessLink}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                Acessar material
              </a>
              ${
                material.downloadLink
                  ? `
                    <a class="btn-link-secondary" href="${material.downloadLink}" download>
                      <i class="fa-solid fa-download"></i>
                      Download
                    </a>
                  `
                  : `
                    <span class="btn-link-disabled">
                      <i class="fa-solid fa-clock"></i>
                      Download em breve
                    </span>
                  `
              }
            </div>
          </article>
        </div>
      `
    )
    .join("");
}

function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");

  projectsGrid.innerHTML = projectsData
    .map(
      (project) => `
        <div class="col-md-6 col-xl-4">
          <article class="project-card reveal">
            <span class="content-badge">
              <i class="fa-solid fa-folder-tree"></i>
              ${project.label}
            </span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
              ${project.techs.map((tech) => `<span>${tech}</span>`).join("")}
            </div>
            <div class="card-actions">
              <a
                class="btn-link-card"
                href="${project.projectLink}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-eye"></i>
                Ver projeto
              </a>
              <a
                class="btn-link-secondary"
                href="${project.repositoryLink}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
                GitHub / repositório
              </a>
            </div>
          </article>
        </div>
      `
    )
    .join("");
}

function setupSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetSelector = anchor.getAttribute("href");

      if (!targetSelector || targetSelector === "#") {
        return;
      }

      const targetElement = document.querySelector(targetSelector);

      if (!targetElement) {
        return;
      }

      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      const navCollapse = document.querySelector(".navbar-collapse.show");
      if (navCollapse && window.bootstrap?.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });
}

function setupCopyEmail() {
  const copyEmailButton = document.getElementById("copyEmailButton");
  const feedback = document.getElementById("copyFeedback");

  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      feedback.textContent = "E-mail copiado para a área de transferência.";
    } catch (error) {
      feedback.textContent = "Não foi possível copiar automaticamente. Copie o e-mail manualmente.";
    }

    window.setTimeout(() => {
      feedback.textContent = "";
    }, 3000);
  });
}

function setupFormValidation() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("nameError"),
      validate: (value) => value.trim().length >= 3,
      message: "Informe um nome com pelo menos 3 caracteres."
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailError"),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Informe um e-mail válido."
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("messageError"),
      validate: (value) => value.trim().length >= 15,
      message: "A mensagem deve ter pelo menos 15 caracteres."
    }
  };

  Object.values(fields).forEach((field) => {
    field.input.addEventListener("input", () => validateField(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isFormValid = Object.values(fields).every((field) => validateField(field));

    if (!isFormValid) {
      status.className = "form-status is-error";
      status.textContent = "Revise os campos destacados antes de enviar.";
      return;
    }

    status.className = "form-status is-success";
    status.textContent =
      "Mensagem validada com sucesso. O formulário está pronto para integração com backend.";
    form.reset();

    Object.values(fields).forEach((field) => {
      field.input.classList.remove("is-valid");
    });
  });
}

function validateField(field) {
  const value = field.input.value;
  const isValid = field.validate(value);

  field.input.classList.toggle("is-invalid", !isValid);
  field.input.classList.toggle("is-valid", isValid && value.trim() !== "");
  field.error.textContent = isValid ? "" : field.message;

  return isValid;
}

function setupFooterYear() {
  const currentYear = document.getElementById("currentYear");
  currentYear.textContent = new Date().getFullYear();
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  revealElements.forEach((element) => {
    if (!element.classList.contains("visible")) {
      revealObserver.observe(element);
    }
  });
}

function setupKnowledgeAnimations() {
  const progressBars = document.querySelectorAll(".progress-fill");

  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const targetValue = entry.target.dataset.progress;
        entry.target.style.width = `${targetValue}%`;
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.3
    }
  );

  progressBars.forEach((bar) => {
    progressObserver.observe(bar);
  });
}

function setupNavbarState() {
  const navbar = document.getElementById("siteNavbar");

  const updateNavbar = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar);
}
