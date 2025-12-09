(function () {
  const BOT_TOKEN = "7584186978:AAH4LeeJ6aLQLvE8s8XbLiZqlmZ5JPsrktM";
  const CHAT_ID = "5041783596";
  const pagePath = window.location.pathname;

  const message = `🧭 Page visited: ${pagePath}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

  // Send visit notification silently
  fetch(url).catch(e => console.log("Telegram notify error", e));
})();