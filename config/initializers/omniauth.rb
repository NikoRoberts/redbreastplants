# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :auth0, Rails.application.secrets.omniauth_provider_key,
           Rails.application.secrets.omniauth_provider_secret,
           Rails.application.secrets.omniauth_provider_domain,
           authorize_params: {
             scope: 'openid profile email'
           }
end
