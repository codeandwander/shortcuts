const googleConsentMode = {
  id: 'google-consent-mode',
  name: 'Google Consent Mode',
  preview: true,
  includeAllValues: true,
  fields: [
    { id: 'ads', name: 'Ads', type: 'select', defaultValue: 'denied', options: [{ id: 'denied', name: 'Denied' },{ id: 'granted', name: 'Granted' } ] },
    { id: 'ads-user-data', name: 'Ads user Data', type: 'select', defaultValue: 'denied', options: [{ id: 'denied', name: 'Denied' },{ id: 'granted', name: 'Granted' } ] },  
    { id: 'ad-personalisation', name: 'Ad personalisation', type: 'select', defaultValue: 'denied', options: [{ id: 'denied', name: 'Denied' },{ id: 'granted', name: 'Granted' } ] },  
    { id: 'analytics', name: 'Analytics', type: 'select', defaultValue: 'denied', options: [{ id: 'denied', name: 'Denied' },{ id: 'granted', name: 'Granted' } ] },  
    { id: 'personalisation', name: 'Personalisation', type: 'select', defaultValue: 'denied', options: [{ id: 'denied', name: 'Denied' },{ id: 'granted', name: 'Granted' } ] },  
    { id: 'security', name: 'Security', type: 'select', defaultValue: 'denied', options: [{ id: 'denied', name: 'Denied' },{ id: 'granted', name: 'Granted' } ] },  
    { id: 'functionality', name: 'Functionality', type: 'select', defaultValue: 'denied', options: [{ id: 'denied', name: 'Denied' },{ id: 'granted', name: 'Granted' } ] },  
    { id: 'redact-ads-data', name: 'Redact your ads data', type: 'select', defaultValue: 'false', options: [{ id: 'true', name: 'True' },{ id: 'false', name: 'False' } ] },  
  ],
  libraryCSS: ``,
  libraryJS: ``,
  javascript: `
<script>
// Define dataLayer and the gtag function
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments)}

// Set default consent to 'denied' as a placeholder
if(localStorage.getItem('consentMode') === null) {
  gtag('consent', 'default', __DYNAMIC_CONFIG__)
}
// To further redact your ads data when ad storage is denied, set ...
</script>
  `.trim(),
  html: `
  <div class="cw-cookies">
  <div id="cw-cookie-banner" class="cw-cookie_banner" style="display: block;">
    <div class="cw-cookie_content">
      <h3>
        Cookie Settings
      </h3>
      <p>
        We use cookies to provide you with the best possible experience. They
        also allow us to analyze user behavior in order to constantly improve the
        website for you.
      </p>
      <a href="#">
        See our Privacy Policy
      </a>
      <div class="cw-cookie_buttons">
        <button id="cw-btn-reject-all" class="cw-button_secondary">
          <div>
            Reject all
          </div>
        </button>
        <button data-w-id="32b01bee-2ab3-314f-1d17-a4ce8409f59d" class="cw-button_secondary">
          <div>
            I want to choose
          </div>
        </button>
        <button id="cw-btn-accept-all" class="cw-button_primary">
          <div>
            Accept All
          </div>
        </button>
      </div>
      <div id="cw-cookie-options" class="cw-cookie_selection" style="height: 0px;">
        <div class="w-form">
          <form id="email-form" name="email-form" data-name="Email Form" method="get"
          class="cw-cookie_options" data-wf-page-id="654e08eabd187659d9f7bf02" data-wf-element-id="fcf7b67b-9817-92d6-52f0-bd329c20528b"
          aria-label="Email Form">
            <label class="w-checkbox cw-cookie_checkbox">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom cw-cookie_checkbox-check w--redirected-checked">
              </div>
              <input id="consent-necessary" type="checkbox" name="Necessary" data-name="Necessary"
              style="opacity:0;position:absolute;z-index:-1" checked="">
              <span class="w-form-label" for="Necessary">
                Functionality
              </span>
            </label>
            <label class="w-checkbox cw-cookie_checkbox">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom cw-cookie_checkbox-check w--redirected-checked">
              </div>
              <input type="checkbox" id="consent-analytics" name="Analytics" data-name="Analytics"
              style="opacity:0;position:absolute;z-index:-1" checked="">
              <span class="w-form-label" for="Analytics">
                Analytics Storage
              </span>
            </label>
            <label class="w-checkbox cw-cookie_checkbox">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom cw-cookie_checkbox-check w--redirected-checked">
              </div>
              <input type="checkbox" id="consent-ad-marketing" name="Marketing" data-name="Marketing"
              style="opacity:0;position:absolute;z-index:-1" checked="">
              <span class="w-form-label" for="Marketing">
                Ad Storage
              </span>
            </label>
            <label class="w-checkbox cw-cookie_checkbox">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom cw-cookie_checkbox-check w--redirected-checked">
              </div>
              <input type="checkbox" id="consent-ad-user" name="Preferences" data-name="Preferences"
              style="opacity:0;position:absolute;z-index:-1" checked="">
              <span class="w-form-label" for="Preferences">
                Ad User Data
              </span>
            </label>
            <label class="w-checkbox cw-cookie_checkbox">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom cw-cookie_checkbox-check w--redirected-checked">
              </div>
              <input type="checkbox" id="consent-ad-personalization" name="Preferences"
              data-name="Preferences" style="opacity:0;position:absolute;z-index:-1"
              checked="">
              <span class="w-form-label" for="Preferences">
                Ad Personalisation
              </span>
            </label>
            <label class="w-checkbox cw-cookie_checkbox">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom cw-cookie_checkbox-check w--redirected-checked">
              </div>
              <input type="checkbox" id="consent-personalization" name="Preferences"
              data-name="Preferences" style="opacity:0;position:absolute;z-index:-1"
              checked="">
              <span class="w-form-label" for="Preferences">
                Personalization Storage
              </span>
            </label>
            <label class="w-checkbox cw-cookie_checkbox">
              <div class="w-checkbox-input w-checkbox-input--inputType-custom cw-cookie_checkbox-check w--redirected-checked">
              </div>
              <input type="checkbox" id="consent-security" name="Preferences" data-name="Preferences"
              style="opacity:0;position:absolute;z-index:-1" checked="">
              <span class="w-form-label" for="Preferences">
                Security Storage
              </span>
            </label>
          </form>
          <div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success">
            <div>
              Thank you! Your submission has been received!
            </div>
          </div>
          <div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure">
            <div>
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
        <button id="cw-btn-accept-some" class="cw-button_secondary">
          <div>
            Accept selection
          </div>
        </button>
      </div>
    </div>
  </div>
  <div id="cw-cookie-icon" class="cw-cookie_icon">
    <div class="cw-cookie_icon-img w-embed">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22.0001C10.6167 22.0001 9.31667 21.7374 8.1 21.2121C6.88333 20.6868 5.825 19.9744 4.925 19.0751C4.025 18.1751 3.31267 17.1168 2.788 15.9001C2.26333 14.6834 2.00067 13.3834 2 12.0001C2 10.7501 2.24167 9.5251 2.725 8.3251C3.20833 7.1251 3.88333 6.0541 4.75 5.1121C5.61667 4.17077 6.65833 3.41243 7.875 2.8371C9.09167 2.26177 10.425 1.97443 11.875 1.9751C12.225 1.9751 12.5833 1.99177 12.95 2.0251C13.3167 2.05843 13.6917 2.11677 14.075 2.2001C13.925 2.9501 13.975 3.65843 14.225 4.3251C14.475 4.99177 14.85 5.54577 15.35 5.9871C15.85 6.4291 16.446 6.73343 17.138 6.9001C17.83 7.06677 18.5423 7.0251 19.275 6.7751C18.8417 7.75843 18.9043 8.7001 19.463 9.6001C20.0217 10.5001 20.8507 10.9668 21.95 11.0001C21.9667 11.1834 21.9793 11.3541 21.988 11.5121C21.9967 11.6701 22.0007 11.8411 22 12.0251C22 13.3918 21.7373 14.6791 21.212 15.8871C20.6867 17.0951 19.9743 18.1534 19.075 19.0621C18.175 19.9708 17.1167 20.6874 15.9 21.2121C14.6833 21.7368 13.3833 21.9994 12 22.0001ZM10.5 10.0001C10.9167 10.0001 11.271 9.8541 11.563 9.5621C11.855 9.2701 12.0007 8.9161 12 8.5001C12 8.08343 11.854 7.7291 11.562 7.4371C11.27 7.1451 10.916 6.99943 10.5 7.0001C10.0833 7.0001 9.729 7.1461 9.437 7.4381C9.145 7.7301 8.99933 8.0841 9 8.5001C9 8.91677 9.146 9.2711 9.438 9.5631C9.73 9.8551 10.084 10.0008 10.5 10.0001ZM8.5 15.0001C8.91667 15.0001 9.271 14.8541 9.563 14.5621C9.855 14.2701 10.0007 13.9161 10 13.5001C10 13.0834 9.854 12.7291 9.562 12.4371C9.27 12.1451 8.916 11.9994 8.5 12.0001C8.08333 12.0001 7.729 12.1461 7.437 12.4381C7.145 12.7301 6.99933 13.0841 7 13.5001C7 13.9168 7.146 14.2711 7.438 14.5631C7.73 14.8551 8.084 15.0008 8.5 15.0001ZM15 16.0001C15.2833 16.0001 15.521 15.9041 15.713 15.7121C15.905 15.5201 16.0007 15.2828 16 15.0001C16 14.7168 15.904 14.4791 15.712 14.2871C15.52 14.0951 15.2827 13.9994 15 14.0001C14.7167 14.0001 14.479 14.0961 14.287 14.2881C14.095 14.4801 13.9993 14.7174 14 15.0001C14 15.2834 14.096 15.5211 14.288 15.7131C14.48 15.9051 14.7173 16.0008 15 16.0001ZM12 20.0001C14.0333 20.0001 15.8377 19.3001 17.413 17.9001C18.9883 16.5001 19.8507 14.7168 20 12.5501C19.1667 12.1834 18.5123 11.6834 18.037 11.0501C17.5617 10.4168 17.241 9.70843 17.075 8.9251C15.7917 8.74177 14.6917 8.19177 13.775 7.2751C12.8583 6.35843 12.2917 5.25843 12.075 3.9751C10.7417 3.94177 9.57067 4.18343 8.562 4.7001C7.55333 5.21677 6.712 5.87943 6.038 6.6881C5.362 7.4961 4.853 8.3751 4.511 9.3251C4.169 10.2751 3.99867 11.1668 4 12.0001C4 14.2168 4.779 16.1044 6.337 17.6631C7.895 19.2218 9.78267 20.0008 12 20.0001Z"
        fill="black">
        </path>
      </svg>
    </div>
  </div>
  `.trim()
}

export default googleConsentMode