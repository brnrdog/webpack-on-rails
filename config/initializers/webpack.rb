class Webpack
  class << self
    def check_if_running!
      unless webpack_running?
        raise StandardError,
              'Webpack is not running.
              Please run "npm install && npm run watch"'
      end
    end

    def webpack_running?
      `ps aux | grep "webpac[k]" | wc -l`.strip.to_i > 0
    end
  end
end
