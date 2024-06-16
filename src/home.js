import img from '../src/splash.jpg';
export function homeContents(content) {
	content.innerHTML = `
      <h1>Čiurlionio 72</h1>
      <img src=${img} alt="someart" />
      <div class="info">
        <div class="booking">booking@ciurliono72.com</div>
        <div class="address">Čiurlionio Gatvė 72, Vilnius</div>
      </div>
  `;
}
