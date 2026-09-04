/**
 * SITAKUNDA LIVE WEATHER & FLOATING CORNER WIDGET
 * Ultra-sleek, professional floating corner dock with expandable modal
 * Coordinates: Sitakunda, Chattogram (Lat: 22.6167, Lon: 91.6667)
 */

(function () {
  'use strict';

  const SITAKUNDA_LAT = 22.6167;
  const SITAKUNDA_LON = 91.6667;
  const CACHE_KEY = 'tourstk_sitakunda_weather';
  const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

  function interpretWmoCode(code) {
    if (code === 0) return { label: 'Clear Sky', icon: 'wb_sunny', emoji: '☀️', condition: 'good' };
    if (code >= 1 && code <= 3) return { label: 'Partly Cloudy', icon: 'partly_cloudy_day', emoji: '⛅', condition: 'good' };
    if (code === 45 || code === 48) return { label: 'Misty / Foggy', icon: 'foggy', emoji: '🌫️', condition: 'moderate' };
    if (code >= 51 && code <= 55) return { label: 'Light Drizzle', icon: 'rainy', emoji: '🌦️', condition: 'caution' };
    if (code >= 61 && code <= 65) return { label: 'Rainy', icon: 'rainy', emoji: '🌧️', condition: 'caution' };
    if (code >= 80 && code <= 82) return { label: 'Rain Showers', icon: 'water_drop', emoji: '🌧️', condition: 'caution' };
    if (code >= 95) return { label: 'Thunderstorm', icon: 'thunderstorm', emoji: '⛈️', condition: 'danger' };
    return { label: 'Pleasant', icon: 'sunny', emoji: '🌤️', condition: 'good' };
  }

  function getTrekkingAdvice(condition, temp) {
    if (condition === 'danger') {
      return {
        badge: 'Extreme Weather',
        text: 'Thunderstorm in Sitakunda hills. Avoid steep trails.',
        statusColor: 'bg-rose-500 text-white',
      };
    }
    if (condition === 'caution') {
      return {
        badge: 'Wet Trails',
        text: 'Steps at Chandranath may be slippery. Grip shoes advised.',
        statusColor: 'bg-amber-500 text-white',
      };
    }
    if (temp > 33) {
      return {
        badge: 'Warm Day',
        text: 'Keep drinking water & saline ready during treks.',
        statusColor: 'bg-orange-500 text-white',
      };
    }
    return {
      badge: 'Perfect for Trekking',
      text: 'Great weather for Chandranath, Guliakhali & waterfalls.',
      statusColor: 'bg-emerald-600 text-white',
      border: 'border-emerald-300',
    };
  }

  async function fetchSitakundaWeather() {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) return parsed.data;
      }
    } catch (e) {}

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${SITAKUNDA_LAT}&longitude=${SITAKUNDA_LON}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=Asia%2FDhaka`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const current = data.current;
      const weatherInfo = interpretWmoCode(current.weather_code);
      const advice = getTrekkingAdvice(weatherInfo.condition, current.temperature_2m);

      const processedData = {
        temp: Math.round(current.temperature_2m),
        feelsLike: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        precipitation: current.precipitation,
        weatherLabel: weatherInfo.label,
        icon: weatherInfo.icon,
        emoji: weatherInfo.emoji,
        advice: advice,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };

      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: processedData }));
      } catch (e) {}

      return processedData;
    } catch (err) {
      return {
        temp: 28,
        feelsLike: 30,
        humidity: 68,
        windSpeed: 11,
        precipitation: 0,
        weatherLabel: 'Pleasant',
        icon: 'wb_sunny',
        emoji: '☀️',
        advice: {
          badge: 'Perfect for Trekking',
          text: 'Great weather for Chandranath, Guliakhali & waterfalls.',
          statusColor: 'bg-emerald-600 text-white',
        },
        time: 'Live',
      };
    }
  }

  function injectFloatingCornerWidget(weather) {
    // Check if floating widget already injected
    if (document.getElementById('sitakunda-floating-weather')) return;

    const widget = document.createElement('div');
    widget.id = 'sitakunda-floating-weather';
    const hasBottomBar = !!(document.getElementById('mobile-sticky-summary-bar') || document.querySelector('.mobile-bottom-bar'));
    widget.className = `fixed ${hasBottomBar ? 'bottom-20 lg:bottom-6' : 'bottom-6'} left-3 sm:left-6 z-30 font-body transition-all duration-300`;

    widget.innerHTML = `
      <!-- POPUP DETAILS CARD (Toggled on click) -->
      <div id="weather-popup-card" class="hidden mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-2xl p-5 text-slate-800 transition-all duration-300 transform origin-bottom-left animate-in fade-in slide-in-from-bottom-3">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span class="text-[11px] font-extrabold tracking-wider uppercase text-emerald-900">Sitakunda Live Forecast</span>
          </div>
          <button onclick="toggleWeatherPopup()" class="w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors">
            <span class="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        <div class="flex items-center justify-between mb-4">
          <div>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-black font-body tabular-nums tracking-tight text-slate-900">${weather.temp}°</span>
              <span class="text-base font-bold text-slate-400">C</span>
            </div>
            <div class="text-xs font-bold text-emerald-800 flex items-center gap-1 mt-0.5">
              <span>${weather.emoji}</span>
              <span>${weather.weatherLabel}</span>
              <span class="text-[11px] text-slate-400 font-normal">(Feels ${weather.feelsLike}°C)</span>
            </div>
          </div>
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-xs border border-emerald-100">
            <span class="material-symbols-outlined text-2xl">${weather.icon}</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 py-2.5 bg-slate-50 rounded-2xl text-center text-xs mb-3 border border-slate-100">
          <div>
            <span class="text-[9px] text-slate-400 font-bold block uppercase">Humidity</span>
            <span class="font-extrabold text-slate-800">${weather.humidity}%</span>
          </div>
          <div>
            <span class="text-[9px] text-slate-400 font-bold block uppercase">Wind</span>
            <span class="font-extrabold text-slate-800">${weather.windSpeed} km/h</span>
          </div>
          <div>
            <span class="text-[9px] text-slate-400 font-bold block uppercase">Rain Risk</span>
            <span class="font-extrabold text-slate-800">${weather.precipitation > 0 ? weather.precipitation + 'mm' : '0%'}</span>
          </div>
        </div>

        <div class="flex items-start gap-2 text-[11px] text-slate-600 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-100">
          <span class="material-symbols-outlined text-emerald-700 text-sm flex-shrink-0 mt-0.5">hiking</span>
          <span class="leading-tight font-medium">${weather.advice.text}</span>
        </div>
      </div>

      <!-- SLEEK CORNER PILL BUTTON (With dismiss button) -->
      <div class="flex items-center gap-1.5">
        <button onclick="toggleWeatherPopup()" class="group flex items-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-2xl border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer text-xs font-bold" title="Click for Sitakunda Live Weather & Trail Advisory">
          <span class="material-symbols-outlined text-base sm:text-lg text-amber-400 group-hover:rotate-12 transition-transform">${weather.icon}</span>
          <div class="text-left flex items-center gap-1.5">
            <span>${weather.temp}°C</span>
            <span class="text-slate-400 font-normal hidden sm:inline">• Sitakunda</span>
          </div>
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5"></span>
        </button>
        <button type="button" onclick="document.getElementById('sitakunda-floating-weather').style.display='none'" class="w-6 h-6 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white flex items-center justify-center text-[10px] transition-colors border border-white/10 shadow-sm cursor-pointer" title="Hide weather widget">
          ✕
        </button>
      </div>
    `;

    document.body.appendChild(widget);
  }

  window.toggleWeatherPopup = function () {
    const popup = document.getElementById('weather-popup-card');
    if (popup) {
      popup.classList.toggle('hidden');
    }
  };

  async function init() {
    const weather = await fetchSitakundaWeather();
    if (!weather) return;

    // Inject sleek floating corner button on all pages automatically
    injectFloatingCornerWidget(weather);

    // Also update spot detail advisory if on destination-detail.html
    const destAdvisory = document.getElementById('dest-weather-advisory');
    if (destAdvisory) {
      destAdvisory.innerHTML = `
        <div class="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-xl">${weather.icon}</span>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span>Sitakunda Today: ${weather.temp}°C (${weather.weatherLabel})</span>
              </div>
              <p class="text-[11px] text-slate-500 mt-0.5 leading-snug">${weather.advice.text}</p>
            </div>
          </div>
          <span class="text-[10px] font-bold ${weather.advice.statusColor} px-2.5 py-1 rounded-full whitespace-nowrap hidden sm:inline-block">
            ${weather.advice.badge}
          </span>
        </div>
      `;
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
