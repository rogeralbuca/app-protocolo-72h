// SVG Icons dictionary for pillars
const ICONS = {
  "shield-halved": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  "droplet": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  "bolt": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  "eye-slash": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`,
  "briefcase": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  "car": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
  "home": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
};

const CHECK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

// App State Management
class ProtocoloApp {
  constructor() {
    this.data = window.checklistData || [];
    this.storageKey = "protocolo72h_progress";
    this.checkedItems = new Set(this.loadProgress());
    
    // UI State
    this.activePillarIndex = 0;
    this.statusFilter = "all"; // all, pending, done

    // DOM Elements
    this.pillarsTabList = document.getElementById("pillars-tab-list");
    this.checklistItemsWrapper = document.getElementById("checklist-items-wrapper");
    
    this.pillarActiveTitle = document.getElementById("pillar-active-title");
    this.pillarActiveDesc = document.getElementById("pillar-active-desc");
    this.pillarActiveIcon = document.getElementById("pillar-active-icon");
    
    this.statCompleted = document.getElementById("stat-completed");
    this.statRemaining = document.getElementById("stat-remaining");
    this.statTotal = document.getElementById("stat-total");
    
    this.progressBar = document.getElementById("progress-bar-glow");
    this.operationCode = document.getElementById("operation-code");
    
    this.cardCompleted = document.getElementById("card-completed");
    this.cardRemaining = document.getElementById("card-remaining");
    this.cardTotal = document.getElementById("card-total");
    
    this.btnReset = document.getElementById("btn-reset-checklist");
    this.btnPrevPillar = document.getElementById("btn-prev-pillar");
    this.btnNextPillar = document.getElementById("btn-next-pillar");
    
    this.urgencyBanner = document.getElementById("urgency-banner");
    this.bannerText = this.urgencyBanner ? this.urgencyBanner.querySelector(".banner-text") : null;

    this.init();
  }

  // LocalStorage methods
  loadProgress() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Erro ao ler localStorage:", e);
      return [];
    }
  }

  saveProgress() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(Array.from(this.checkedItems)));
    } catch (e) {
      console.error("Erro ao salvar localStorage:", e);
    }
  }

  // Initialization
  init() {
    this.renderTabs();
    this.renderActivePillar();
    this.updateStats();
    this.registerEvents();
    this.updateNavigationButtons();
  }

  // Register all event listeners
  registerEvents() {
    // Quick filters bound to stats cards
    this.cardCompleted.addEventListener("click", () => this.setStatusFilter("done"));
    this.cardRemaining.addEventListener("click", () => this.setStatusFilter("pending"));
    this.cardTotal.addEventListener("click", () => this.setStatusFilter("all"));

    // Reset button
    this.btnReset.addEventListener("click", () => this.resetChecklist());

    // Navigation buttons
    this.btnPrevPillar.addEventListener("click", () => this.navigatePillar(-1));
    this.btnNextPillar.addEventListener("click", () => this.navigatePillar(1));

    // Print button
    const btnPrint = document.getElementById("btn-print-checklist");
    if (btnPrint) {
      btnPrint.addEventListener("click", () => this.printChecklist());
    }
  }

  setStatusFilter(filter) {
    this.statusFilter = filter;
    
    this.cardCompleted.classList.remove("active");
    this.cardRemaining.classList.remove("active");
    this.cardTotal.classList.remove("active");
    
    if (filter === "all") this.cardTotal.classList.add("active");
    if (filter === "pending") this.cardRemaining.classList.add("active");
    if (filter === "done") this.cardCompleted.classList.add("active");
    
    this.renderActivePillar();
  }

  navigatePillar(direction) {
    const newIndex = this.activePillarIndex + direction;
    if (newIndex >= 0 && newIndex < this.data.length) {
      this.switchPillar(newIndex);
    }
  }

  updateNavigationButtons() {
    // Disable prev if on first pillar, disable next if on last
    this.btnPrevPillar.disabled = this.activePillarIndex === 0;
    this.btnNextPillar.disabled = this.activePillarIndex === this.data.length - 1;
    
    // Add opacity styling directly or class-based
    this.btnPrevPillar.style.opacity = this.activePillarIndex === 0 ? "0.4" : "1";
    this.btnPrevPillar.style.cursor = this.activePillarIndex === 0 ? "not-allowed" : "pointer";
    
    this.btnNextPillar.style.opacity = this.activePillarIndex === this.data.length - 1 ? "0.4" : "1";
    this.btnNextPillar.style.cursor = this.activePillarIndex === this.data.length - 1 ? "not-allowed" : "pointer";
  }

  // Calculate & update header statistics and progress bar
  updateStats() {
    let totalItemsCount = 0;
    let completedItemsCount = 0;

    this.data.forEach(pillar => {
      pillar.items.forEach(item => {
        totalItemsCount++;
        if (this.checkedItems.has(item.id)) {
          completedItemsCount++;
        }
      });
    });

    const remainingItemsCount = totalItemsCount - completedItemsCount;
    const progressPercent = totalItemsCount > 0 ? Math.round((completedItemsCount / totalItemsCount) * 100) : 0;

    // Update numbers (two digits formatting)
    this.statCompleted.textContent = String(completedItemsCount).padStart(2, '0');
    this.statRemaining.textContent = String(remainingItemsCount).padStart(2, '0');
    this.statTotal.textContent = String(totalItemsCount).padStart(2, '0');

    // Update progress bar
    this.progressBar.style.width = `${progressPercent}%`;
    if (progressPercent === 100) {
      this.progressBar.classList.add("completed");
    } else {
      this.progressBar.classList.remove("completed");
    }
    
    // Update Operation status code and banner text/color
    if (progressPercent === 100) {
      this.operationCode.textContent = "SEGURO: 100%";
      this.operationCode.style.color = "var(--color-green-glow)";
      this.operationCode.style.textShadow = "0 0 10px rgba(74, 222, 128, 0.6)";
      
      if (this.urgencyBanner && this.bannerText) {
        this.urgencyBanner.classList.add("success");
        this.bannerText.innerHTML = "<strong>OPERAÇÃO CONCLUÍDA:</strong> Parabéns! Sua família está 100% preparada para enfrentar qualquer crise sistêmica com segurança e controle.";
      }
    } else {
      this.operationCode.textContent = `PREPARO: ${progressPercent}%`;
      this.operationCode.style.color = "#9ca3af";
      this.operationCode.style.textShadow = "0 0 8px rgba(156, 163, 175, 0.3)";
      
      if (this.urgencyBanner && this.bannerText) {
        this.urgencyBanner.classList.remove("success");
        this.bannerText.innerHTML = "<strong>URGENTE:</strong> A crise não avisa quando vai chegar. Prepare sua família hoje antes que o sistema entre em colapso.";
      }
    }

    // Refresh badgets on tabs
    this.updateTabBadges();
  }

  // Render sidebar tabs/navigation
  renderTabs() {
    this.pillarsTabList.innerHTML = "";
    
    this.data.forEach((pillar, index) => {
      const li = document.createElement("li");
      
      const btn = document.createElement("button");
      btn.className = `pillar-tab ${index === this.activePillarIndex ? 'active' : ''}`;
      btn.id = `tab-pillar-${index}`;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", index === this.activePillarIndex ? "true" : "false");
      
      const iconSpan = document.createElement("span");
      iconSpan.className = "tab-icon-wrapper";
      iconSpan.innerHTML = ICONS[pillar.icon] || "";
      
      const labelSpan = document.createElement("span");
      labelSpan.textContent = pillar.pillar.split(":")[0]; // Just the "Pilar X" or "Fase X" part
      
      const badge = document.createElement("span");
      badge.className = "tab-badge";
      badge.id = `badge-pillar-${index}`;
      badge.textContent = "0/0";
      
      btn.appendChild(iconSpan);
      btn.appendChild(labelSpan);
      btn.appendChild(badge);
      
      btn.addEventListener("click", () => {
        this.switchPillar(index);
      });
      
      li.appendChild(btn);
      this.pillarsTabList.appendChild(li);
    });
  }

  // Update numbers on each tab badge (e.g. 2/5 completed)
  updateTabBadges() {
    this.data.forEach((pillar, index) => {
      const badge = document.getElementById(`badge-pillar-${index}`);
      const tabBtn = document.getElementById(`tab-pillar-${index}`);
      if (badge) {
        const total = pillar.items.length;
        const done = pillar.items.filter(item => this.checkedItems.has(item.id)).length;
        badge.textContent = `${done}/${total}`;
        
        // Add completed class if all items are checked, or in-progress if partially checked
        if (tabBtn) {
          if (done === total && total > 0) {
            tabBtn.classList.add("completed");
            tabBtn.classList.remove("in-progress");
          } else if (done > 0 && done < total) {
            tabBtn.classList.add("in-progress");
            tabBtn.classList.remove("completed");
          } else {
            tabBtn.classList.remove("completed");
            tabBtn.classList.remove("in-progress");
          }
        }
      }
    });
  }

  // Switch to another pillar/category
  switchPillar(index) {
    this.activePillarIndex = index;
    
    // Update active tab styles
    const tabs = this.pillarsTabList.querySelectorAll(".pillar-tab");
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      }
    });

    this.renderActivePillar();
    this.updateNavigationButtons();
  }

  // Render the checklist items for the currently active pillar
  renderActivePillar() {
    const activePillar = this.data[this.activePillarIndex];
    if (!activePillar) return;

    // Header info update
    this.pillarActiveTitle.textContent = activePillar.pillar;
    this.pillarActiveDesc.textContent = activePillar.description;
    this.pillarActiveIcon.innerHTML = ICONS[activePillar.icon] || "";

    // Clear and build items list
    this.checklistItemsWrapper.innerHTML = "";

    let itemsToRender = activePillar.items;

    // Filter by quick filter status
    if (this.statusFilter === "pending") {
      itemsToRender = itemsToRender.filter(item => !this.checkedItems.has(item.id));
    } else if (this.statusFilter === "done") {
      itemsToRender = itemsToRender.filter(item => this.checkedItems.has(item.id));
    }

    if (itemsToRender.length === 0) {
      const noItems = document.createElement("div");
      noItems.className = "checklist-item no-items-tactical";
      noItems.style.justifyContent = "center";
      noItems.style.color = "var(--text-muted)";
      noItems.style.fontFamily = "var(--font-mono)";
      noItems.textContent = "NENHUM ITEM ENCONTRADO NESTE PILAR";
      this.checklistItemsWrapper.appendChild(noItems);
      return;
    }

    itemsToRender.forEach(item => {
      const isChecked = this.checkedItems.has(item.id);
      
      const itemEl = document.createElement("div");
      itemEl.className = `checklist-item ${isChecked ? 'checked' : ''}`;
      itemEl.setAttribute("role", "listitem");
      itemEl.id = `item-row-${item.id}`;
      
      // Checkbox container
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "checkbox-custom-wrapper";
      
      const checkbox = document.createElement("div");
      checkbox.className = "checkbox-custom";
      checkbox.innerHTML = CHECK_ICON;
      
      checkboxWrapper.appendChild(checkbox);
      
      // Text wrapper
      const textWrapper = document.createElement("div");
      textWrapper.className = "item-text-wrapper";
      
      const text = document.createElement("div");
      text.className = "item-text";
      text.textContent = item.text;
      
      textWrapper.appendChild(text);
      
      // Add tip if available
      if (item.tip) {
        const tip = document.createElement("div");
        tip.className = "item-tip";
        tip.textContent = item.tip;
        textWrapper.appendChild(tip);
      }
      
      itemEl.appendChild(checkboxWrapper);
      itemEl.appendChild(textWrapper);
      
      // Handle check/uncheck on row click
      itemEl.addEventListener("click", (e) => {
        this.toggleItem(item.id);
      });
      
      this.checklistItemsWrapper.appendChild(itemEl);
    });
  }

  // Toggle item check status
  toggleItem(id) {
    if (this.checkedItems.has(id)) {
      this.checkedItems.delete(id);
    } else {
      this.checkedItems.add(id);
    }
    
    this.saveProgress();
    this.updateStats();
    
    // Toggle class directly for micro-interaction speed
    const row = document.getElementById(`item-row-${id}`);
    if (row) {
      row.classList.toggle("checked");
    }
  }

  // Reset checklist progress
  resetChecklist() {
    const confirmReset = confirm("AVISO TÁTICO:\nDeseja reiniciar todos os registros de preparação familiar? Isso apagará seu progresso salvo localmente no navegador.");
    if (confirmReset) {
      this.checkedItems.clear();
      this.saveProgress();
      this.setStatusFilter("all");
      this.updateStats();
    }
  }

  // Generates and prints the complete checklist (all pillars and items)
  printChecklist() {
    // 1. Get or create the container for printing
    let printContainer = document.getElementById("print-section");
    if (!printContainer) {
      printContainer = document.createElement("div");
      printContainer.id = "print-section";
      document.body.appendChild(printContainer);
    }

    // 2. Build the HTML content of all pillars and items
    let html = `
      <div class="print-header">
        <h1>PROTOCOLO 72H</h1>
        <h2>Plano de Preparação Familiar Tático</h2>
        <p>Este documento contém o checklist completo para sobrevivência de sua família nas primeiras 72 horas de um colapso urbano. Preencha-o e mantenha-o em local físico e seguro.</p>
      </div>
    `;

    this.data.forEach((pillar) => {
      html += `
        <div class="print-pillar">
          <h3>${pillar.pillar}</h3>
          <p class="print-pillar-desc">${pillar.description}</p>
          <div class="print-items-list">
      `;

      pillar.items.forEach((item) => {
        const isChecked = this.checkedItems.has(item.id);
        html += `
          <div class="print-item">
            <span class="print-checkbox ${isChecked ? 'checked' : ''}"></span>
            <div class="print-item-content">
              <span class="print-item-text">${item.text}</span>
              ${item.tip ? `<span class="print-item-tip"><strong>Instrução Tática:</strong> ${item.tip}</span>` : ''}
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    printContainer.innerHTML = html;

    // 3. Give the browser a brief moment (150ms) to reflow, paint and load fonts for the new DOM elements
    setTimeout(() => {
      // 4. Call print dialog. Since the element remains in the DOM, Chrome's print writer has unlimited time to render.
      window.print();
    }, 150);
  }
}

// Instantiate App on Page Load
document.addEventListener("DOMContentLoaded", () => {
  window.app = new ProtocoloApp();
});
