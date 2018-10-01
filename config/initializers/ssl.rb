# frozen_string_literal: true

if Rails.env == 'production' or Rails.env == 'staging'
  require 'open-uri'
  require 'net/https'
  module Net
    # fixing issues with SSL verify not working on Ubuntu
    class HTTP
      alias :original_use_ssl=, :use_ssl=

      def use_ssl=(flag)
        self.ca_file = '/etc/ssl/certs/ca-certificates.crt'
        self.verify_mode = OpenSSL::SSL::VERIFY_PEER
        self.original_use_ssl = flag
      end
    end
  end
end
