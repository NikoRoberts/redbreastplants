# This configuration file will be evaluated by Puma. The top-level methods that
# are invoked here are part of Puma's configuration DSL. For more information
# about methods provided by the DSL, see https://puma.io/puma/Puma/DSL.html.

# Puma starts a configurable number of processes (workers) and each process
# serves each request in a thread from an internal thread pool.
#
# The ideal number of threads per worker depends both on how much time the
# application spends waiting for IO operations and on how much you wish to
# to prioritize throughput over latency.
#
# As a rule of thumb, increasing the number of threads will increase how much
# traffic a given process can handle (throughput), but due to CRuby's
# Global VM Lock (GVL) it has diminishing returns and will degrade the
# response time (latency) of the application.
#
# The default is set to 3 threads as it's deemed a decent compromise between
# throughput and latency for the average Rails application.
#
# Any libraries that use a connection pool or another resource pool should
# be configured to provide at least as many connections as the number of
# threads. This includes Active Record's `pool` parameter in `database.yml`.
threads_count = ENV.fetch("RAILS_MAX_THREADS", 3)
threads threads_count, threads_count
workers ENV.fetch("WEB_CONCURRENCY", 1)

port ENV.fetch("PORT", 6759)

environment ENV.fetch("RAILS_ENV", "production")

app_dir = ENV.fetch("APP_DIR", "/var/www/redbreastplants.com.au")
directory "#{app_dir}/current"

shared_dir = ENV.fetch("SHARED_DIR", "#{app_dir}/shared")

bind ENV.fetch("PUMA_BIND", "unix://#{shared_dir}/tmp/sockets/puma.sock")
pidfile ENV.fetch("PUMA_PIDFILE", "#{shared_dir}/tmp/pids/puma.pid")
state_path ENV.fetch("PUMA_STATE_PATH", "#{shared_dir}/tmp/pids/puma.state")

stdout_redirect(
  ENV.fetch("PUMA_STDOUT", "#{shared_dir}/log/puma.stdout.log"),
  ENV.fetch("PUMA_STDERR", "#{shared_dir}/log/puma.stderr.log"),
  true
)

# Allow puma to be restarted by `bin/rails restart` command.
plugin :tmp_restart

quiet true

preload_app!

on_worker_boot do
  ActiveRecord::Base.establish_connection if defined?(ActiveRecord)
end
