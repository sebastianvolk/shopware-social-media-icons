window.shopwareSocialMediaIcons = (function () {
  "use strict";
  const _createSocialMediaIcons = (logosPerRow, socialSettings) => {
    const socialMediaContainer = document.querySelector(
      ".footer-social-media-logos"
    );
    socialMediaContainer.innerHTML = _creareSocialIconsHtml(
      logosPerRow,
      socialSettings
    );
  };

  const _creareSocialIconsHtml = (logosPerRow, socialSettings) => {
    let html = "";
    const availableSocialMediaLinks = [];

    socialSettings.forEach((socialSetting) => {
      if (socialSetting.active) {
        availableSocialMediaLinks.push(_creareSocialIconHtml(socialSetting));
      }
    });

    if (availableSocialMediaLinks.length > 0) {
      const begin = `
        <div class="row">
            <div class="mx-auto my-3 col-md-8 col-lg-6 col-xl-4">
                <div class="d-flex justify-content-around">`;
      const end = `
                </div>
            </div>
        </div>`;
      const middle = `
                </div>
            </div>
        </div>
        <div class="row">
            <div class="mx-auto my-3 col-md-8 col-lg-6 col-xl-4">
                <div class="d-flex justify-content-around">`;
      let i;
      let prefix;
      let suffix;
      for (i = 0; i < availableSocialMediaLinks.length; i++) {
        prefix = "";
        suffix = "";
        if (i === 0) {
          prefix = begin;
        }
        if (i + 1 === availableSocialMediaLinks.length) {
          suffix = end;
        } else if ((i + 1) % logosPerRow === 0) {
          suffix = middle;
        }
        html += prefix + availableSocialMediaLinks[i] + suffix;
      }
    }
    return html;
  };

  const _creareSocialIconHtml = (socialSetting) => {
    return `
    <a href="${socialSetting.href}" target="_blank">
        <img src="${socialSetting.imgSrc}" alt="${socialSetting.name} Logo" style="height:3em;"/>
    </a>
    `;
  };

  return { createSocialMediaIcons: _createSocialMediaIcons };
})();
