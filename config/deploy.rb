# frozen_string_literal: true

set :application, 'redbreast'
set :repo_url, 'git@github.com:NikoRoberts/redbreastplants.git'

ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

set :deploy_to, '/var/www/redbreastplants.com.au'

set :format, :pretty
set :log_level, :debug
set :pty, true

set :linked_files, %w[.env db/production.sqlite3]
set :linked_dirs, %w[log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system public/images]

# set :default_env, { path: "/opt/ruby/bin:$PATH" }
set :keep_releases, 5

# disable precompiling assets as we are commmitting them
Rake::Task["deploy:assets:backup_manifest"].clear_actions
Rake::Task["deploy:assets:precompile"].clear_actions

namespace :deploy do
  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  task :sitemap do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      within release_path do
        execute :rake, 'sitemap:generate RAILS_ENV=production'
      end
    end
  end

  after :finishing, 'deploy:cleanup'
  after :finishing, 'deploy:sitemap'
  after :finishing, 'deploy:restart'
end
