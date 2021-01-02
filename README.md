# Rails Starter Template

Great starter project that starts with Devise User and few other gems.

## Getting Started


```bash
rails new myapp -d postgresql -m https://raw.githubusercontent.com/ankurp/rail-yard/master/template.rb
```

#### Running your app

To run your app, use `foreman start`. Foreman will run `Procfile.dev` via `foreman start -f Procfile.dev` as configured by the `.foreman` file and will launch the development processes `rails server`, `sidekiq`, and `webpack-dev-server` processes. 

You can also run them in separate terminals manually if you prefer.

A separate `Procfile` is generated for deploying to production on Heroku.
