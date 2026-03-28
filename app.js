document.addEventListener("DOMContentLoaded", () => {
  // Strict QA: Sync meta theme-color with OS Dark Mode to prevent blinding status bar
  const themeColorMeta = document.getElementById("theme-color-meta");
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  function updateThemeColor(e) {
    if (themeColorMeta)
      themeColorMeta.setAttribute("content", e.matches ? "#000000" : "#f2f2f7");
  }
  if (themeColorMeta) {
    darkModeQuery.addEventListener("change", updateThemeColor);
    updateThemeColor(darkModeQuery);
  }

  // ==========================================
  // CRAZY IDEAS (Crazy Features!)
  // ==========================================

  // 1. Food Gacha (Slot Machine)
  window.openGacha = function () {
    const foods = [
      "🐙 章魚燒 (道頓堀)",
      "🥞 大阪燒/文字燒",
      "🍢 串炸 (新世界)",
      "🥩 頂級黑毛和牛",
      "🍜 濃郁豚骨拉麵",
      "🍣 迴轉壽司",
      "🍛 咖哩豬排飯",
      "🍮 抹茶聖代甜點",
      "🦀 蟹道樂螃蟹大餐",
    ];
    let count = 0;

    showModal(
      "🎰 選擇困難救星：美食轉蛋",
      `<div id="gacha-result" style="font-size:28px; text-align:center; padding:30px 10px; font-weight:900; color:var(--primary-color);">搖晃轉蛋機中...</div><button onclick="window.openGacha()" style="width:100%; padding:14px; background:var(--primary-color); color:white; border:none; border-radius:12px; margin-top:15px; font-weight:bold; font-size:16px;">🔄 再轉一次</button>`,
    );

    const res = document.getElementById("gacha-result");
    const timer = setInterval(() => {
      res.innerText = foods[Math.floor(Math.random() * foods.length)];
      count++;
      if (count > 12) {
        clearInterval(timer);
        res.innerText =
          "✨ " + foods[Math.floor(Math.random() * foods.length)] + " ✨";
        res.style.transform = "scale(1.15)";
        res.style.transition =
          "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        res.style.color = "#ff3b30";
      }
    }, 120);
  };

  // 2. TTS Voice Translation
  window.openLanguageModal = function () {
    const phrases = [
      { ja: "こんにちは", tw: "你好 / 日安", ro: "Konnichiwa" },
      { ja: "ありがとうございます", tw: "非常感謝", ro: "Arigatou gozaimasu" },
      { ja: "すみません", tw: "不好意思 / 請問 / 借過", ro: "Sumimasen" },
      {
        ja: "これをお願いします",
        tw: "請幫我點這個 (指菜單)",
        ro: "Kore o onegaishimasu",
      },
      {
        ja: "お会計をお願いします",
        tw: "麻煩結帳",
        ro: "Okaikei o onegaishimasu",
      },
      {
        ja: "トイレはどこですか？",
        tw: "請問廁所在哪裡？",
        ro: "Toire wa doko desu ka?",
      },
    ];

    let html = '<div style="display:flex; flex-direction:column; gap:12px;">';
    phrases.forEach((p) => {
      html += `
            <div style="background:var(--bg-color); border:1px solid var(--border-color); border-radius:12px; padding:14px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 5px rgba(0,0,0,0.02)">
                <div>
                    <div style="font-weight:800; font-size:18px; color:var(--text-primary); margin-bottom:4px;">${p.ja}</div>
                    <div style="font-size:13px; color:var(--text-secondary);">${p.tw}</div>
                    <div style="font-size:11px; color:#af52de; margin-top:2px; font-family:monospace;">Pronounce: ${p.ro}</div>
                </div>
                <button onclick="speakJapanese('${p.ja}')" style="background:#af52de; color:white; border:none; border-radius:50%; width:45px; height:45px; cursor:pointer; flex-shrink:0; box-shadow:0 4px 10px rgba(175,82,222,0.3); transition:transform 0.1s;"><i class="fa-solid fa-volume-high"></i></button>
            </div>`;
    });
    html += "</div>";

    showModal("🗣️ 隨身 AI 翻譯機", html);
  };

  window.speakJapanese = function (text) {
    if ("speechSynthesis" in window) {
      // Cancel previous speech if double clicked
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = 0.85; // slightly slower for better learning/listening
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("😭 您的瀏覽器不支援語音播放功能");
    }
  };
  // ==========================================

  // ==========================================
  // COMMERCIAL MVP FEATURES (Phase 1 & 2)
  // ==========================================

  // 1. Live Server Data (Weather & Exchange Rate)
  async function fetchLiveInfo() {
    const badge = document.getElementById("live-weather-rate");
    if (!badge) return;
    try {
      // Free API: Open-Meteo for Osaka
      const weatherRes = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=34.6937&longitude=135.5022&current=temperature_2m,weathercode&timezone=Asia%2FTokyo",
        { signal: AbortSignal.timeout(5000) },
      );
      const weatherData = await weatherRes.json();
      const temp = Math.round(weatherData.current.temperature_2m);

      // Free API: Exchange Rate Converter (TWD base to get JPY value)
      const rateRes = await fetch("https://open.er-api.com/v6/latest/TWD", {
        signal: AbortSignal.timeout(5000),
      });
      const rateData = await rateRes.json();
      const jpyRate = (1 / rateData.rates.JPY).toFixed(4); // 0.21xx

      badge.innerHTML = `<span><i class="fa-solid fa-cloud-sun"></i> 大阪及時氣溫: ${temp}°C &nbsp;|&nbsp; <i class="fa-solid fa-yen-sign"></i> 日圓匯率: ${jpyRate}</span>`;

      // Cache successful data
      const cacheStr = `<span><i class="fa-solid fa-cloud-sun"></i> 大阪: ${temp}°C &nbsp;|&nbsp; 匯率: ${jpyRate}</span>`;
      localStorage.setItem("osaka-live-cache", cacheStr);
      localStorage.setItem(
        "osaka-live-time",
        new Date().toLocaleTimeString("zh-TW", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    } catch (e) {
      const cached = localStorage.getItem("osaka-live-cache");
      const cacheTime = localStorage.getItem("osaka-live-time");
      if (cached) {
        badge.innerHTML = cached.replace(
          "</span>",
          ` <span style="font-size:10px; opacity:0.7;">(上次更新 ${cacheTime})</span></span>`,
        );
      } else {
        badge.innerHTML = `<span><i class="fa-solid fa-wifi"></i> 離線模式：等待網路連線以更新</span>`;
      }
    }
  }
  fetchLiveInfo();

  // 2. Simulated Dynamic Traffic System
  const trafficBanner = document.getElementById("traffic-banner");
  if (trafficBanner) {
    // App acts like it's fetching railway APIs...
    setTimeout(() => {
      trafficBanner.style.display = "flex";
      // Simulated incident randomness
      const isDelayed = Math.random() > 0.85;
      if (isDelayed) {
        trafficBanner.style.background = "#ff3b30"; // Red
        trafficBanner.innerHTML =
          '<i class="fa-solid fa-triangle-exclamation"></i> <span>【行車情報】JR 大阪環狀線部分列車延誤，請預留充裕時間。</span>';
      } else {
        trafficBanner.style.background = "#34c759"; // Green
        trafficBanner.innerHTML =
          '<i class="fa-solid fa-circle-check"></i> <span>【即時交通】目前關西所有地鐵、JR線運行正常。</span>';
        // Hide green message after a few seconds so it isn't annoying
        setTimeout(() => {
          trafficBanner.style.opacity = "0";
          setTimeout(() => (trafficBanner.style.display = "none"), 300);
        }, 5000);
      }
    }, 1500);
  }

  // 3. SOS Mode / Show-to-Local
  window.showSOSMode = function () {
    showModal(
      "🚨 求助用大字卡",
      `
            <div class="sos-modal-content">
                <p style="margin-bottom:10px;">請直接將手機螢幕出示給站務員或路人：</p>
                <div class="sos-jp">
                    すみません、<br>道を教えてください。
                </div>
                <p style="font-size:14px; color:var(--text-secondary);">（不好意思，請告訴我怎麼走）</p>
                
                <hr style="margin:20px 0; border:0; border-top:1px dashed var(--border-color);">
                
                <p style="margin-bottom:10px;">需要中文支援 / 報案：</p>
                <div class="sos-jp" style="font-size:22px;">
                    台湾人です。<br>日本語が話せません。
                </div>
                <p style="font-size:14px; color:var(--text-secondary);">（我是台灣人，我不會說日語）</p>
            </div>
        `,
    );
  };

  // ==========================================

  // ---- Navigation Logic ----
  const navItems = document.querySelectorAll(".nav-item");
  const views = document.querySelectorAll(".view");
  const pageTitle = document.getElementById("page-title");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      // Active state
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      // Set Header Title
      pageTitle.textContent = item.dataset.title;

      // Switch Views
      const targetId = item.dataset.target;
      views.forEach((view) => {
        view.classList.toggle("active", view.id === targetId);
      });

      // Map fix rendering issue on display:none
      if (targetId === "view-map" && window.appMap) {
        setTimeout(() => window.appMap.invalidateSize(), 150);
      }
    });
  });

  // ---- Render Itinerary ----
  const dayTabsContainer = document.getElementById("day-tabs");
  const timelineContainer = document.getElementById("timeline-content");

  let activeDayIndex = 0;

  // Strict QA: Auto-detect today date and focus the correct tab
  const todayMonth = new Date().getMonth() + 1;
  const todayDate = new Date().getDate();
  const datePattern = new RegExp(
    `(${todayMonth}/${todayDate}|0?${todayMonth}/0?${todayDate})`,
  );

  if (window.tripData && window.tripData.days) {
    window.tripData.days.forEach((day, index) => {
      if (datePattern.test(day.date)) {
        activeDayIndex = index;
      }
    });
  }

  
    // Countdown Timer
    const targetDate = new Date('2026-07-27T00:00:00');
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    setTimeout(() => {
        const badge = document.getElementById('countdown-badge');
        if (badge) {
            if (diffDays > 0) {
                badge.innerHTML = `<i class="fa-solid fa-plane-up"></i> 距離出發還剩 ${diffDays} 天！期待嗎？`;
            } else if (diffDays === 0) {
                badge.innerHTML = `<i class="fa-solid fa-plane-up"></i> 就是今天！旅途愉快！`;
                badge.style.background = '#ff9500';
            } else {
                badge.innerHTML = `<i class="fa-solid fa-map-pin"></i> 旅程已圓滿完成！`;
            }
        }
    }, 100);

    function renderItinerary() {
    if (!window.tripData || !window.tripData.days) return;

    // Render horizontal tabs
    dayTabsContainer.innerHTML = "";
    window.tripData.days.forEach((day, index) => {
      const tab = document.createElement("div");
      tab.className = `day-tab ${index === activeDayIndex ? "active" : ""}`;
      tab.textContent = day.date;
      tab.addEventListener("click", () => {
        activeDayIndex = index;
        renderItinerary();
        if(window.updateLiveActivity) window.updateLiveActivity();
        if(window.updateDailyMap) window.updateDailyMap();
        // Smooth scroll to top of timeline
        document.querySelector("main").scrollTo({ top: 0, behavior: "smooth" });
      });
      dayTabsContainer.appendChild(tab);
    });

    // Ensure active tab is visible (center scrolling)
    const activeTab = dayTabsContainer.children[activeDayIndex];
    if (activeTab) {
      const centerPos =
        activeTab.offsetLeft -
        dayTabsContainer.offsetWidth / 2 +
        activeTab.offsetWidth / 2;
      dayTabsContainer.scrollTo({ left: centerPos, behavior: "smooth" });
    }

    // Render timeline for the selected day
    const activeDay = window.tripData.days[activeDayIndex];
    let html = "";
    if (activeDay.schedule) {
      activeDay.schedule.forEach((item) => {
        const tagsHtml = item.tags
          ? item.tags
              .map((tag) => {
                const isFlight = tag.includes("國泰");
                return `<span class="tag ${isFlight ? "highlight" : ""}">${tag}</span>`;
              })
              .join("")
          : "";

        const copyText = `${item.time || ""} ${item.activity} - ${item.description || ""}`;
        html += `
                    <div class="timeline-item" style="position:relative;">
                        <button onclick="navigator.clipboard.writeText('${copyText}').then(()=>showModal('複製成功', '行程已複製到剪貼簿！可以貼給親友或導航軟體。')).catch(()=>showModal('複製失敗', '請手動選取複製'))" style="position:absolute; top:20px; right:20px; background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:18px; padding:5px;"><i class="fa-regular fa-copy"></i></button>
                        <div class="time"><i class="fa-regular fa-clock" style="margin-right:4px;"></i>${item.time || ""}</div>
                        <h3 style="padding-right: 32px;">${item.activity}</h3>
                        ${item.description ? `<p>${item.description}</p>` : ""}
                        <div class="tags">${tagsHtml}</div>
                    </div>
                `;
      });
    }

    timelineContainer.innerHTML = html;
    
        // Update Smart Hotel Card
        const hotelCard = document.getElementById('smart-hotel-card');
        const hotelName = document.getElementById('smart-hotel-name');
        const hotelNav = document.getElementById('smart-hotel-nav');
        
        if (hotelCard) {
            let hotel = "";
            let query = "";
            if (activeDayIndex === 0 || activeDayIndex === 1) {
                hotel = "Hotel M's Est 京都站南";
                query = "Hotel M's Est 京都站南";
                hotelCard.style.display = 'flex';
            } else if (activeDayIndex >= 2 && activeDayIndex <= 4) {
                hotel = "HOTEL SOBIAL 難波大國町";
                query = "HOTEL SOBIAL 難波大國町";
                hotelCard.style.display = 'flex';
            } else {
                hotelCard.style.display = 'none'; // 最後一天不顯示飯店
            }
            if (hotel) {
                hotelName.textContent = hotel;
                hotelNav.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
            }
        }
        
        // Trigger reflow for animation

    timelineContainer.style.animation = "none";
    void timelineContainer.offsetHeight;
    timelineContainer.style.animation = "fadeIn 0.3s ease";
  }
  renderItinerary();
        if(window.updateLiveActivity) window.updateLiveActivity();
        if(window.updateDailyMap) window.updateDailyMap();

  // ---- Render Checklist ----
  const checklistContainer = document.getElementById("checklist-container");
  const progressBar = document.getElementById("progress-bar");
  const progressPercent = document.getElementById("progress-percent");

  function updateProgress(savedState) {
    let total = 0;
    let checkedCount = 0;
    for (const items of Object.values(window.checklistData)) {
      total += items.length;
      items.forEach((item) => {
        if (savedState[item.id]) checkedCount++;
      });
    }
    const percentage =
      total === 0 ? 0 : Math.round((checkedCount / total) * 100);
    progressBar.style.width = `${percentage}%`;
    progressPercent.textContent = `${percentage}%`;
    if (percentage === 100) {
      progressBar.style.background = "#34c759"; // green
    } else {
      progressBar.style.background = "var(--primary-color)"; // blue
    }
  }

  function renderChecklist() {
    if (!window.checklistData) return;
    checklistContainer.innerHTML = "";
    const savedState = JSON.parse(
      localStorage.getItem("osaka-checklist") || "{}",
    );

    updateProgress(savedState);

    for (const [category, items] of Object.entries(window.checklistData)) {
      const catDiv = document.createElement("div");
      catDiv.className = "checklist-category";
      const catTitle = document.createElement("h3");
      catTitle.textContent = category;
      catDiv.appendChild(catTitle);

      items.forEach((item) => {
        const isChecked = savedState[item.id] || false;

        const itemDiv = document.createElement("div");
        itemDiv.className = `checklist-item ${isChecked ? "checked" : ""}`;

        // Custom checkbox element using FontAwesome check
        const cbWrapper = document.createElement("div");
        cbWrapper.className = "checkbox-wrapper";
        cbWrapper.innerHTML = '<i class="fa-solid fa-check"></i>';

        const label = document.createElement("div");
        label.className = "label-text";
        label.innerHTML =
          item.name +
          (item.required ? ' <span class="req-badge">必備</span>' : "");

        itemDiv.appendChild(cbWrapper);
        itemDiv.appendChild(label);

        // Handle click to toggle
        itemDiv.addEventListener("click", () => {
          // Toggle current boolean
          const newState = !itemDiv.classList.contains("checked");
          savedState[item.id] = newState;
          localStorage.setItem("osaka-checklist", JSON.stringify(savedState));

          itemDiv.classList.toggle("checked");

          // Add slight tactile feedback / pop animation using CSS
          cbWrapper.style.transform = "scale(0.8)";
          setTimeout(() => (cbWrapper.style.transform = "scale(1)"), 150);

          updateProgress(savedState);
        });

        catDiv.appendChild(itemDiv);
      });
      checklistContainer.appendChild(catDiv);
    }
  }
  renderChecklist();

  const resetBtn = document.getElementById("reset-checklist");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("確定要清空所有已勾選的行李清單嗎？")) {
        localStorage.removeItem("osaka-checklist");
        renderChecklist();
      }
    });
  }

  // ---- Leaflet Map Initialization ----
  function initMap() {
    // Center Map around Osaka (Namba) Area
    window.appMap = L.map("map-container", {
      zoomControl: false, // Disable default zoom to keep UI clean, we can add it safely later if needed
    }).setView([34.6687, 135.5013], 10);

    L.control.zoom({ position: "topright" }).addTo(window.appMap);

    // Beautiful Carto light theme map tiles
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      },
    ).addTo(window.appMap);

    // Offline Check for Maps
    if (!navigator.onLine) {
      setTimeout(() => {
        showModal(
          "離線狀態提示",
          "目前沒有網路連線，地圖圖層可能無法正常顯示。部分地點導航資訊會失效。",
        );
      }, 1000);
    }
    window.addEventListener("offline", () => {
      if (document.getElementById("view-map").classList.contains("active")) {
        showModal("網路已中斷", "地圖瓦片需要網路連線以載入！");
      }
    });

    // Add pins from data.js
    if (window.locations) {
      // Let's create a bounds object so we can fit map to pins
      const bounds = L.latLngBounds();

      window.locations.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(window.appMap);
        marker.bindPopup(`<div style="text-align:center;"><b>${loc.name}</b><br><span style="color:#666;font-size:12px;">${loc.desc}</span><br>
    <a href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}" target="_blank" style="display:inline-block; margin-top:8px; margin-bottom:4px; padding:6px 12px; background:var(--primary-color); color:white; border-radius:6px; text-decoration:none; font-weight:bold; font-size:12px;">🚗 Google 地圖導航</a><br>
    <button onclick="navigator.clipboard.writeText('${loc.name}').then(()=>alert('已複製地址！'))" style="border:1px solid #ccc; background:#fff; padding:4px 8px; border-radius:4px; font-size:12px; cursor:pointer;">📋 複製地名</button>
    </div>`);
        bounds.extend([loc.lat, loc.lng]);
      });

      window.appMap.fitBounds(bounds, { padding: [30, 30] });
    }
  }

  // ---- PWA Service Worker Registration ----
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("Service Worker Registered!", reg))
      .catch((err) => console.error("Service Worker Error", err));
  }

  // Custom Modal Logic
  const modalOverlay = document.getElementById("custom-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const btnClose = document.getElementById("modal-btn-close");

  function showModal(title, text) {
    modalTitle.textContent = title;
    modalBody.innerHTML = text.replace(/\\n/g, "<br>");
    modalOverlay.classList.add("active");
    // Strict QA: Add state to history so "Back" swipe closes modal instead of exiting app
    history.pushState({ modalOpen: true }, "");
  }

  function closeModal() {
    if (modalOverlay.classList.contains("active")) {
      modalOverlay.classList.remove("active");
      if (history.state && history.state.modalOpen) {
        history.back();
      }
    }
  }

  btnClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener("popstate", () => {
    if (modalOverlay.classList.contains("active")) {
      modalOverlay.classList.remove("active");
    }
  });

  document.querySelectorAll(".tool-card").forEach((card) => {
    card.addEventListener("click", () => {
      const info = card.getAttribute("data-tool-info");
      const title = card.querySelector("h3").textContent;
      if (info) showModal(title, info);
    });
  });

  initMap();
});
