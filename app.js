// 大阪6天自由行 - 完整應用程式

// ===== 全域變數 =====
let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];
let exchangeRate = 0.2; // 預設匯率 1 JPY = 0.2 TWD

// ===== 初始化 =====
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCountdown();
  initWeather();
  initHotel();
  initSubNav();
  initDayNav();
  initAccordions();
  initDetailExpand();
  initTransitDetail();
  initMapButtons();
  initChecklist();
  initShopping();
  initExpense();
  initToolModals();
  initCurrency();
  initTranslate();
  initJapanese();
  initCommunicationModal();
  initShare();
  updateExpenseBadge();
});

// ===== 底部導航 =====
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const tabPages = document.querySelectorAll(".tab-page");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const tabId = item.dataset.tab;

      navItems.forEach((nav) => nav.classList.remove("active"));
      tabPages.forEach((page) => page.classList.remove("active"));

      item.classList.add("active");
      document.getElementById("tab-" + tabId).classList.add("active");
    });
  });
}

// ===== 倒數計時 =====
function initCountdown() {
  const targetDate = new Date("2026-07-27T00:00:00");

  function update() {
    const now = new Date();
    const diff = targetDate - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const countdownNumber = document.getElementById("countdownDays");
    if (countdownNumber) {
      if (days > 0) {
        countdownNumber.textContent = days;
      } else if (days === 0) {
        countdownNumber.textContent = "今天出發！";
        document.querySelector(".countdown-unit").style.display = "none";
      } else {
        countdownNumber.textContent = "旅途愉快！";
        document.querySelector(".countdown-unit").style.display = "none";
      }
    }
  }

  update();
  setInterval(update, 60000);
}

// ===== 天氣 =====
async function initWeather() {
  const weatherWidget = document.getElementById("weatherWidget");
  const weatherTemp = document.getElementById("weatherTemp");

  // 使用 Open-Meteo API（免費，不需要 API Key）
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=34.6937&longitude=135.5023&current=temperature_2m,weather_code&timezone=Asia/Tokyo",
    );

    if (response.ok) {
      const data = await response.json();
      const temp = Math.round(data.current.temperature_2m);
      const weatherCode = data.current.weather_code;

      weatherTemp.textContent = `${temp}°C`;

      // 根據天氣代碼更新圖標
      const iconEl = weatherWidget.querySelector("i");
      iconEl.className = getWeatherIcon(weatherCode);
    }
  } catch (error) {
    console.log("無法獲取天氣資訊");
    weatherTemp.textContent = "--°C";
  }
}

function getWeatherIcon(code) {
  // WMO Weather interpretation codes
  if (code === 0) return "fas fa-sun"; // Clear
  if (code <= 3) return "fas fa-cloud-sun"; // Partly cloudy
  if (code <= 48) return "fas fa-cloud"; // Fog/Cloudy
  if (code <= 67) return "fas fa-cloud-rain"; // Rain
  if (code <= 77) return "fas fa-snowflake"; // Snow
  if (code <= 99) return "fas fa-cloud-bolt"; // Thunderstorm
  return "fas fa-cloud-sun";
}

// ===== 飯店 =====
function initHotel() {
  const hotelDisplay = document.getElementById("hotelDisplay");
  const hotelEdit = document.getElementById("hotelEdit");
  const hotelName = document.getElementById("hotelNameDisplay");
  const hotelAddress = document.getElementById("hotelAddressDisplay");
  const hotelNameInput = document.getElementById("hotelNameInput");
  const hotelAddressInput = document.getElementById("hotelAddressInput");
  const hotelEditBtn = document.getElementById("editHotelBtn");
  const hotelSaveBtn = document.getElementById("saveHotelBtn");
  const hotelCancelBtn = document.getElementById("cancelHotelBtn");
  const hotelMapBtn = document.getElementById("hotelMapBtn");

  if (!hotelEditBtn) return;

  // 載入儲存的雙飯店資訊
  const savedHotels = JSON.parse(localStorage.getItem("hotelsInfo")) || {
    kyoto: {
      name: "Hotel M's Est Kyoto Station South",
      address: "601-8002 京都府京都市南区東九条上殿田町４８−１",
    },
    osaka: {
      name: "Hotel Boti Boti (難波)",
      address: "大阪市中央區難波3-8-17",
    },
  };

  // 根據目前所選日自動顯示正確飯店
  function updateHotelDisplayByDay(dayIdx) {
    let hotel, city;
    if (dayIdx === 0 || dayIdx === 1) {
      hotel = savedHotels.kyoto;
      city = "kyoto";
    } else {
      hotel = savedHotels.osaka;
      city = "osaka";
    }
    if (hotelName)
      hotelName.innerHTML = `${city === "kyoto" ? "京都2晚：" : "大阪3晚："}${hotel.name}`;
    if (hotelAddress)
      hotelAddress.innerHTML = `${city === "kyoto" ? "京都：" : "大阪："}${hotel.address}`;
    if (hotelMapBtn) hotelMapBtn.style.display = "inline-flex";
  }

  // 取得目前所選 day index
  function getCurrentDayIdx() {
    const activeDay = document.querySelector(".day-btn.active");
    if (activeDay) {
      return parseInt(activeDay.dataset.day, 10) - 1;
    }
    return 0;
  }

  // 首次載入時根據 Day 1 顯示
  updateHotelDisplayByDay(0);

  // 切換行程日時自動切換飯店顯示
  const dayBtns = document.querySelectorAll(".day-btn");
  dayBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      updateHotelDisplayByDay(getCurrentDayIdx());
    });
  });

  // 編輯飯店時，彈窗選擇京都/大阪
  hotelEditBtn.addEventListener("click", () => {
    // 依目前 day index 決定預設編輯哪間
    const idx = getCurrentDayIdx();
    const city = idx === 0 || idx === 1 ? "kyoto" : "osaka";
    if (hotelNameInput) hotelNameInput.value = savedHotels[city].name;
    if (hotelAddressInput) hotelAddressInput.value = savedHotels[city].address;
    hotelEdit.setAttribute("data-city", city);
    if (hotelDisplay) hotelDisplay.style.display = "none";
    if (hotelEdit) hotelEdit.classList.remove("hidden");
  });

  hotelSaveBtn?.addEventListener("click", () => {
    const city = hotelEdit.getAttribute("data-city") || "kyoto";
    const name =
      hotelNameInput?.value.trim() ||
      (city === "kyoto"
        ? "Hotel M's Est Kyoto Station South"
        : "Hotel Boti Boti (難波)");
    const address =
      hotelAddressInput?.value.trim() ||
      (city === "kyoto"
        ? "601-8002 京都府京都市南区東九条上殿田町４８−１"
        : "大阪市中央區難波3-8-17");
    savedHotels[city] = { name, address };
    localStorage.setItem("hotelsInfo", JSON.stringify(savedHotels));
    updateHotelDisplayByDay(getCurrentDayIdx());
    if (hotelDisplay) hotelDisplay.style.display = "block";
    if (hotelEdit) hotelEdit.classList.add("hidden");
  });

  hotelCancelBtn?.addEventListener("click", () => {
    if (hotelDisplay) hotelDisplay.style.display = "block";
    if (hotelEdit) hotelEdit.classList.add("hidden");
  });

  hotelMapBtn?.addEventListener("click", () => {
    // 根據目前 day index 導航正確飯店，直接用正確地址
    const idx = getCurrentDayIdx();
    const city = idx === 0 || idx === 1 ? "kyoto" : "osaka";
    const address = savedHotels[city].address;
    if (address) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
        "_blank",
      );
    }
  });
}

// ===== 子導航（資訊Tab） =====
function initSubNav() {
  const subNavBtns = document.querySelectorAll(".sub-nav-btn");
  const subPages = document.querySelectorAll(".sub-page");

  subNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const pageId = btn.dataset.subtab;

      // 只在同一個父容器內切換
      const parentNav = btn.closest(".sub-nav");
      const parentSection = parentNav?.parentElement;

      if (parentSection) {
        parentSection
          .querySelectorAll(".sub-nav-btn")
          .forEach((b) => b.classList.remove("active"));
        parentSection
          .querySelectorAll(".sub-page")
          .forEach((p) => p.classList.remove("active"));
      } else {
        subNavBtns.forEach((b) => b.classList.remove("active"));
        subPages.forEach((p) => p.classList.remove("active"));
      }

      btn.classList.add("active");
      document.getElementById("subtab-" + pageId)?.classList.add("active");
    });
  });
}

// ===== 日程導航 =====
function initDayNav() {
  const dayBtns = document.querySelectorAll(".day-btn");
  const dayPages = document.querySelectorAll(".day-page");

  dayBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dayId = btn.dataset.day;

      dayBtns.forEach((b) => b.classList.remove("active"));
      dayPages.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById("day-" + dayId)?.classList.add("active");
    });
  });
}

// ===== 手風琴 =====
function initAccordions() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordion = header.parentElement;
      accordion.classList.toggle("open");
    });
  });
}

// ===== 詳細展開（機場流程） =====
function initDetailExpand() {
  const detailExpands = document.querySelectorAll(".detail-expand");

  detailExpands.forEach((expand) => {
    expand.addEventListener("click", () => {
      const targetId = expand.dataset.detail;
      const content = document.getElementById(targetId);

      expand.classList.toggle("open");
      content.classList.toggle("open");
    });
  });
}

// ===== 轉乘詳細步驟 =====
function initTransitDetail() {
  const transitDetails = document.querySelectorAll(".transit-detail");

  transitDetails.forEach((detail) => {
    detail.addEventListener("click", () => {
      const targetId = detail.dataset.detail;
      const content = document.getElementById(targetId);

      detail.classList.toggle("open");
      content.classList.toggle("open");
    });
  });
}

// ===== 地圖導航按鈕 + 營業時間顯示 =====
function initMapButtons() {
  const mapButtons = document.querySelectorAll(".btn-map, .btn-map-sm");

  mapButtons.forEach((btn) => {
    const place = btn.dataset.place;
    const isHotelNav = btn.classList.contains("hotel-nav-btn");

    // 導航功能
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      // 智慧判斷「回飯店」按鈕
      if (btn.classList.contains("hotel-return-btn")) {
        // 根據 timeline 所屬 day，導航正確飯店
        const dayPage = btn.closest(".day-page");
        let dayIdx = 0;
        if (dayPage && dayPage.id && dayPage.id.startsWith("day-")) {
          dayIdx = parseInt(dayPage.id.replace("day-", ""), 10) - 1;
        }
        const hotels = JSON.parse(localStorage.getItem("hotelsInfo")) || {
          kyoto: {
            name: "Hotel M's Est Kyoto Station South",
            address: "601-8002 京都府京都市南区東九条上殿田町４８−１",
          },
          osaka: {
            name: "Hotel Boti Boti (難波)",
            address: "大阪市中央區難波3-8-17",
          },
        };
        const city = dayIdx === 0 || dayIdx === 1 ? "kyoto" : "osaka";
        const address = hotels[city].address;
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
          "_blank",
        );
        return;
      }

      // 原有飯店導航按鈕
      if (isHotelNav) {
        const hotels = JSON.parse(localStorage.getItem("hotelsInfo")) || {
          kyoto: {
            name: "Hotel M's Est Kyoto Station South",
            address: "601-8002 京都府京都市南区東九条上殿田町４８−１",
          },
          osaka: {
            name: "Hotel Boti Boti (難波)",
            address: "大阪市中央區難波3-8-17",
          },
        };
        // 依目前 day index
        const idx = document.querySelector(".day-btn.active")
          ? parseInt(
              document.querySelector(".day-btn.active").dataset.day,
              10,
            ) - 1
          : 0;
        const city = idx === 0 || idx === 1 ? "kyoto" : "osaka";
        const address = hotels[city].address;
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
          "_blank",
        );
        return;
      }

      if (place) {
        // 使用日文地名搜尋更精確，並自動判斷地區
        const location = locations[place];
        let searchQuery = location ? location.nameJp : place;
        // 根據地點自動補城市
        if (searchQuery) {
          // 若地名已含「大阪」「京都」「奈良」等，不再補
          if (!/大阪|京都|奈良/.test(searchQuery)) {
            if (
              /嵐山|清水寺|伏見|祇園|金閣寺|天龍寺|八坂|河原町|花見小路|二年坂|三年坂/.test(
                searchQuery,
              )
            ) {
              searchQuery += " 京都";
            } else if (/奈良|東大寺|春日大社|鹿/.test(searchQuery)) {
              searchQuery += " 奈良";
            } else if (!/USJ|ユニバーサル|環球/.test(searchQuery)) {
              searchQuery += " 大阪";
            }
          }
        }
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`,
          "_blank",
        );
      }
    });

    // 加入營業時間標籤
    if (place && locations[place] && locations[place].hours) {
      const hoursInfo = locations[place].hours;
      const hoursBadge = document.createElement("span");
      hoursBadge.className = "hours-badge";
      hoursBadge.innerHTML = `<i class="fas fa-clock"></i> ${hoursInfo}`;

      // 插入到按鈕後面
      if (btn.nextSibling) {
        btn.parentNode.insertBefore(hoursBadge, btn.nextSibling);
      } else {
        btn.parentNode.appendChild(hoursBadge);
      }
    }
  });
}

// ===== 行前檢查 =====
function initChecklist() {
  const container = document.getElementById("packingChecklist");
  if (!container) return;

  let html = "";
  let totalItems = 0;
  let checkedCount = 0;

  for (const [category, items] of Object.entries(checklistData)) {
    html += `
            <div class="checklist-category">
                <h4><i class="fas fa-folder"></i> ${category}</h4>
                <div class="checklist-items">
        `;

    items.forEach((item) => {
      totalItems++;
      const isChecked = checkedItems.includes(item.id);
      if (isChecked) checkedCount++;

      html += `
                <div class="checklist-item ${isChecked ? "checked" : ""}" data-id="${item.id}">
                    <input type="checkbox" id="${item.id}" ${isChecked ? "checked" : ""}>
                    <label for="${item.id}">${item.name}${item.required ? " *" : ""}</label>
                </div>
            `;
    });

    html += "</div></div>";
  }

  container.innerHTML = html;
  updateProgress(checkedCount, totalItems);

  // 綁定事件
  container.querySelectorAll(".checklist-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT") return;

      const checkbox = item.querySelector("input");
      checkbox.checked = !checkbox.checked;

      const id = item.dataset.id;
      if (checkbox.checked) {
        if (!checkedItems.includes(id)) {
          checkedItems.push(id);
          checkedCount++;
        }
        item.classList.add("checked");
      } else {
        checkedItems = checkedItems.filter((i) => i !== id);
        checkedCount--;
        item.classList.remove("checked");
      }

      localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
      updateProgress(checkedCount, totalItems);
    });

    item.querySelector("input").addEventListener("change", (e) => {
      const id = item.dataset.id;
      if (e.target.checked) {
        if (!checkedItems.includes(id)) {
          checkedItems.push(id);
          checkedCount++;
        }
        item.classList.add("checked");
      } else {
        checkedItems = checkedItems.filter((i) => i !== id);
        checkedCount--;
        item.classList.remove("checked");
      }

      localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
      updateProgress(checkedCount, totalItems);
    });
  });
}

function updateProgress(checked, total) {
  const percentage = Math.round((checked / total) * 100);
  const progressText = document.getElementById("packingProgressText");
  const progressFill = document.getElementById("packingProgress");

  if (progressText) progressText.textContent = `${checked}/${total}`;
  if (progressFill) progressFill.style.width = `${percentage}%`;
}

// ===== 購物清單 =====
function initShopping() {
  const addItemBtn = document.getElementById("addShoppingBtn");
  const newItemInput = document.getElementById("shoppingItemInput");
  const itemList = document.getElementById("shoppingList");

  if (!addItemBtn) return;

  renderShoppingList();

  addItemBtn.addEventListener("click", addItem);
  newItemInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addItem();
  });
}

function addItem() {
  const input = document.getElementById("shoppingItemInput");
  const name = input.value.trim();

  if (name) {
    shoppingList.push({ id: Date.now(), name, checked: false });
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    input.value = "";
    renderShoppingList();
  }
}

function renderShoppingList() {
  const itemList = document.getElementById("shoppingList");
  if (!itemList) return;

  if (shoppingList.length === 0) {
    itemList.innerHTML =
      '<p style="color: var(--text-muted); text-align: center; padding: 20px;">尚未新增購物項目</p>';
    return;
  }

  let html = "";
  shoppingList.forEach((item) => {
    html += `
            <div class="item-row ${item.checked ? "checked" : ""}" data-id="${item.id}">
                <input type="checkbox" ${item.checked ? "checked" : ""} onchange="toggleShoppingItem(${item.id})">
                <span>${item.name}</span>
                <button class="delete-btn" onclick="deleteShoppingItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
  });

  itemList.innerHTML = html;
}

function toggleShoppingItem(id) {
  const item = shoppingList.find((i) => i.id === id);
  if (item) {
    item.checked = !item.checked;
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    renderShoppingList();
  }
}

function deleteShoppingItem(id) {
  shoppingList = shoppingList.filter((i) => i.id !== id);
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  renderShoppingList();
}

// ===== 記帳 =====
function initExpense() {
  const addExpenseBtn = document.getElementById("addExpenseBtn");
  const clearExpenseBtn = document.getElementById("clearExpenseBtn");

  if (!addExpenseBtn) return;

  renderExpenses();

  addExpenseBtn.addEventListener("click", () => {
    const amountInput = document.getElementById("expenseAmountInput");
    const noteInput = document.getElementById("expenseItemInput");
    const amount = parseInt(amountInput.value);
    const note = noteInput.value.trim();

    if (amount && amount > 0) {
      expenses.push({
        id: Date.now(),
        amount,
        note: note || "未分類",
        date: new Date().toLocaleDateString("zh-TW"),
      });

      localStorage.setItem("expenses", JSON.stringify(expenses));
      amountInput.value = "";
      noteInput.value = "";
      renderExpenses();
      updateExpenseBadge();
    }
  });

  // 清空全部按鈕
  if (clearExpenseBtn) {
    clearExpenseBtn.addEventListener("click", () => {
      if (expenses.length === 0) return;
      if (confirm("確定要清空所有消費紀錄嗎？")) {
        expenses = [];
        localStorage.setItem("expenses", JSON.stringify(expenses));
        renderExpenses();
        updateExpenseBadge();
        showToast("已清空所有紀錄");
      }
    });
  }
}

function renderExpenses() {
  const expenseList = document.getElementById("expenseList");
  const expenseTotalAmount = document.getElementById("expenseTotalAmount");

  if (!expenseList) return;

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  if (expenseTotalAmount) {
    expenseTotalAmount.textContent = `¥${total.toLocaleString()}`;
  }

  if (expenses.length === 0) {
    expenseList.innerHTML =
      '<p style="color: var(--text-muted); text-align: center; padding: 20px;">尚未新增消費紀錄</p>';
    return;
  }

  let html = "";
  expenses
    .slice()
    .reverse()
    .forEach((expense) => {
      html += `
            <div class="item-row" data-id="${expense.id}">
                <span>${expense.note}</span>
                <span style="font-weight: 600;">¥${expense.amount.toLocaleString()}</span>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

  expenseList.innerHTML = html;
}

function deleteExpense(id) {
  expenses = expenses.filter((e) => e.id !== id);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
  updateExpenseBadge();
}

function updateExpenseBadge() {
  const badge = document.querySelector(".expense-badge");
  if (badge) {
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    badge.textContent = `¥${total.toLocaleString()}`;
  }
}

// ===== 工具 Modal =====
function initToolModals() {
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".modal-close");

  // 綁定各個工具按鈕到對應的 Modal
  const toolBindings = {
    emergencyToolBtn: "emergencyModal",
    transitToolBtn: "transitModal",
    currencyToolBtn: "currencyModal",
    expenseToolBtn: "expenseModal",
    translateToolBtn: "translateModal",
    japaneseToolBtn: "japaneseModal",
  };

  for (const [btnId, modalId] of Object.entries(toolBindings)) {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    if (btn && modal) {
      btn.addEventListener("click", () => {
        modal.classList.add("active");
      });
    }
  }

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.remove("active");
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
}

// ===== 匯率計算 =====
function initCurrency() {
  const jpyInput = document.getElementById("jpyInput");
  const twdInput = document.getElementById("twdInput");
  const quickBtns = document.querySelectorAll(".quick-btn");

  if (!jpyInput) return;

  // 獲取即時匯率
  fetchExchangeRate();

  jpyInput.addEventListener("input", () => {
    const jpy = parseFloat(jpyInput.value) || 0;
    twdInput.value = Math.round(jpy * exchangeRate);
  });

  twdInput.addEventListener("input", () => {
    const twd = parseFloat(twdInput.value) || 0;
    jpyInput.value = Math.round(twd / exchangeRate);
  });

  quickBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const jpy = parseInt(btn.dataset.amount);
      jpyInput.value = jpy;
      twdInput.value = Math.round(jpy * exchangeRate);
    });
  });
}

async function fetchExchangeRate() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/JPY",
    );
    if (response.ok) {
      const data = await response.json();
      exchangeRate = data.rates.TWD;
    }
  } catch (error) {
    console.log("無法獲取即時匯率，使用預設值");
  }

  // 更新顯示
  const rateNote = document.getElementById("rateNote");
  if (rateNote) {
    rateNote.textContent = `即時匯率：1 JPY ≈ ${exchangeRate.toFixed(4)} TWD`;
  }
}

// ===== 翻譯 =====
function initTranslate() {
  const translateBtn = document.getElementById("translateBtn");
  const translateInput = document.getElementById("translateInput");
  const translateResult = document.getElementById("translateResult");

  if (!translateBtn) return;

  translateBtn.addEventListener("click", async () => {
    const text = translateInput.value.trim();
    if (!text) return;

    translateResult.textContent = "翻譯中...";

    try {
      // 使用 Google Translate 網頁版（非官方 API）
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-TW&tl=ja&dt=t&q=${encodeURIComponent(text)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data && data[0]) {
        const translated = data[0].map((item) => item[0]).join("");
        translateResult.textContent = translated;
      } else {
        translateResult.textContent = "翻譯失敗，請稍後再試";
      }
    } catch (error) {
      translateResult.textContent = "翻譯服務暫時無法使用";
    }
  });
}

// ===== 常用日語 =====
function initJapanese() {
  const container = document.getElementById("japaneseCards");
  if (!container) return;

  let html = "";
  japaneseData.forEach((item) => {
    html += `
            <div class="japanese-card">
                <div class="situation">${item.situation}</div>
                <div class="japanese">${item.japanese}</div>
                <div class="romaji">${item.romaji}</div>
                <div class="meaning">${item.meaning}</div>
                <button class="copy-btn" onclick="copyText('${item.japanese}')">
                    <i class="fas fa-copy"></i> 複製
                </button>
            </div>
        `;
  });

  container.innerHTML = html;
}

// ===== 常用溝通卡 Modal =====
function initCommunicationModal() {
  const openBtn = document.getElementById("showCommunicationCard");
  const modal = document.getElementById("communicationModal");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.classList.add("active");
    });
  }

  // 複製按鈕
  const copyBtns = modal?.querySelectorAll(".copy-btn");
  copyBtns?.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.dataset.text;
      copyText(text);

      // 顯示複製成功
      const icon = btn.querySelector("i");
      icon.className = "fas fa-check";
      setTimeout(() => {
        icon.className = "fas fa-copy";
      }, 1500);
    });
  });
}

// ===== 複製文字 =====
function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("已複製到剪貼簿");
    })
    .catch(() => {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast("已複製到剪貼簿");
    });
}

// ===== Toast 提示 =====
function showToast(message) {
  // 如果已有 toast，先移除
  const existingToast = document.querySelector(".toast");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 14px;
        z-index: 300;
        animation: fadeInOut 2s ease;
    `;

  // 添加動畫
  const style = document.createElement("style");
  style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
            15% { opacity: 1; transform: translateX(-50%) translateY(0); }
            85% { opacity: 1; transform: translateX(-50%) translateY(0); }
            100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}

// ===== 分享功能 =====
function initShare() {
  const shareBtn = document.getElementById("shareBtn");
  const shareModal = document.getElementById("shareModal");
  const copyLinkBtn = document.getElementById("copyLinkBtn");
  const shareLineBtn = document.getElementById("shareLineBtn");
  const downloadImageBtn = document.getElementById("downloadImageBtn");

  if (!shareBtn) return;

  // 打開分享 Modal
  shareBtn.addEventListener("click", () => {
    shareModal.classList.add("active");
  });

  // 複製連結
  copyLinkBtn?.addEventListener("click", () => {
    const shareText = generateShareText();
    navigator.clipboard.writeText(shareText).then(() => {
      showToast("行程文字已複製");
    });
  });

  // LINE 分享
  shareLineBtn?.addEventListener("click", () => {
    const shareText = generateShareText();
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(shareText)}`;
    window.open(lineUrl, "_blank");
  });

  // 下載圖片
  downloadImageBtn?.addEventListener("click", () => {
    generateShareImage();
  });
}

function generateShareText() {
  let text = `✈️ 大阪 6 日自由行\n`;
  text += `📅 2026/7/27 - 8/1\n\n`;
  text += `Day 1｜道頓堀・心齋橋\n`;
  text += `Day 2｜大阪城・通天閣・梅田夜景\n`;
  text += `Day 3｜京都：嵐山・清水寺・祇園\n`;
  text += `Day 4｜環球影城 USJ\n`;
  text += `Day 5｜黑門市場・日本橋・阿倍野\n`;
  text += `Day 6｜臨空城 OUTLET・回程\n\n`;
  text += `👫 學生情侶 | 🚫 不吃海鮮\n`;
  return text;
}

function generateShareImage() {
  // 創建 Canvas 繪製行程圖
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 1200;
  const ctx = canvas.getContext("2d");

  // 背景漸層
  const gradient = ctx.createLinearGradient(0, 0, 800, 1200);
  gradient.addColorStop(0, "#667eea");
  gradient.addColorStop(1, "#764ba2");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 800, 1200);

  // 標題
  ctx.fillStyle = "white";
  ctx.font = "bold 48px Noto Sans TC, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("大阪 6 日自由行", 400, 100);

  // 日期
  ctx.font = "24px Noto Sans TC, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.fillText("2026.7.27 - 8.1", 400, 150);

  // 行程列表
  const days = [
    { day: "Day 1", title: "道頓堀・心齋橋" },
    { day: "Day 2", title: "大阪城・通天閣・梅田" },
    { day: "Day 3", title: "京都一日遊" },
    { day: "Day 4", title: "環球影城 USJ" },
    { day: "Day 5", title: "黑門市場・購物" },
    { day: "Day 6", title: "OUTLET・回程" },
  ];

  ctx.textAlign = "left";
  days.forEach((d, i) => {
    const y = 250 + i * 120;

    // 背景卡片
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.beginPath();
    ctx.roundRect(60, y - 30, 680, 90, 16);
    ctx.fill();

    // Day 標籤
    ctx.fillStyle = "white";
    ctx.font = "bold 28px Noto Sans TC, sans-serif";
    ctx.fillText(d.day, 100, y + 10);

    // 標題
    ctx.font = "24px Noto Sans TC, sans-serif";
    ctx.fillText(d.title, 200, y + 10);
  });

  // 底部標籤
  ctx.textAlign = "center";
  ctx.font = "20px Noto Sans TC, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.fillText("👫 學生情侶  |  🚫 不吃海鮮", 400, 1100);

  // 下載
  const link = document.createElement("a");
  link.download = "大阪6日行程.png";
  link.href = canvas.toDataURL("image/png");
  link.click();

  showToast("行程圖已下載");
}

// ===== Service Worker 註冊 =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => console.log("Service Worker 註冊成功"))
      .catch((err) => console.log("Service Worker 註冊失敗:", err));
  });
}
