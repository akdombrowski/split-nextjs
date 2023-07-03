import Image from "next/image";

export default function Home() {
  return (
    <div
      id="app"
      className="min-h-screen">
      <div class="page brand-background min-h-screen">
        <div
          class="page__content"
          id="page-ui-container">
          <div
            class="card card--no-padding"
            data-id="card">
            <div class="card__content">
              <div class="flex-container">
                <div class="branding-template-logo-container">
                  <div class="org-logo">
                    <img
                      class="org-logo__image"
                      src="https://d3uinntk0mqu3p.cloudfront.net/branding/market/a3d073bc-3108-49ad-b96c-404bea59a1d0.png"
                      alt="Company Logo"
                      title=""
                      style={{}}
                    />
                  </div>
                </div>
                <div class="branding-template-form-container">
                  <div>
                    <div data-id="login-routes">
                      <h1
                        class="heading branding-template-heading sr-only"
                        data-id="username-password-heading">
                        Sign On
                      </h1>
                      <form
                        class="form"
                        data-id="username-password-validator-form">
                        <div
                          class="float-label placeholder-shown"
                          data-id="username-input">
                          <input
                            class="text-input float-label__input branding-template-text-input"
                            data-id="username-input-input"
                            id="username"
                            name="username"
                            placeholder="Username"
                            type="text"
                            autocomplete="on"
                            value=""
                          />
                          <label
                            class="float-label__label"
                            for="username">
                            Username
                          </label>
                        </div>
                        <div
                          class="float-label placeholder-shown"
                          data-id="password-input">
                          <input
                            class="text-input text-input--pasword float-label__input branding-template-password-input"
                            data-id="password-input-input"
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                            autocomplete="on"
                            value=""
                          />
                          <div
                            aria-label="show password"
                            aria-pressed="false"
                            class="text-input__icon text-input__icon--hidden"
                            role="button"
                            tabindex="0"></div>
                          <label
                            class="float-label__label"
                            for="password">
                            Password
                          </label>
                        </div>
                        <div>
                          <button
                            class="button file-input--button branding-template-primary-button button--primary brand-primary-bg"
                            data-id="submit-button"
                            type="submit">
                            Sign On
                          </button>
                        </div>
                        <div
                          class="form"
                          data-id="social-providers">
                          <div> </div>
                        </div>
                        <div
                          class="text-block branding-template-forgot-password branding-template-link-text"
                          data-id="dettached-forgot-password">
                          <div class="text-block--overflow-wrap">
                            <a
                              href="#"
                              data-id="recovery-button"
                              role="button">
                              Forgot Password
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    data-id="footer-container"
                    class="branding-template-footer-container"></div>
                </div>
              </div>

              <div data-id="page-copyright"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
