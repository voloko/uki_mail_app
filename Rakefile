namespace :prod do
  desc "Run thin development"
  task :start do
    sh "thin -s 1 -C prod.yaml start"
  end

  desc "Run thin"
  task :restart do
    sh "thin -s 1 -C prod.yaml restart"
  end

  desc "Stop thin"
  task :stop do
    sh "thin -s 1 -C prod.yaml stop"
  end
end
