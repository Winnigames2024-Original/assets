const urlpargmgsg = new URLSearchParams(window.location.search);
const asset_id = urlpargmgsg.get('id');
const allCodeRest = "htmlContent";

if (asset_id) {
  loadAndInsertContent('https://winnigames2024-original.github.io/assets/' + asset_id, 'html');
  return allCodeRest
}

async function loadAndInsertContent(url, targetDivId) {
  try {
    const response = await fetch(url);
    const htmlContent = await response.text(); // Получаем код как текст

    const targetDiv = document.getElementById(targetDivId);
    allCodeRest = JSON.stringify(await response.text());
    targetDiv.insertAdjacentHTML('beforeend', htmlContent);

    } catch (error) {
    console.error('Ошибка при загрузке или вставке контента:', error);
    }
}
