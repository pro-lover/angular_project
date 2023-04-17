# Plan
we will be following Joson Watmore to build User registration and login registration here blog link
# angular 15
# pages
/
/account/login
/account/register
/dashboard
/dashboard/users
/dashboard/users/add
/dashboard/edit:id

# more infor
RxJs

# file structure
src ->  app ->
                _components ->  alert.component.html 
                                alert.component.ts
                                index.ts

                _helpers    ->  auth.guard.ts
                                error.interceptor.ts
                                fake-backend.ts
                                index.ts
                                jwt.interceptor.ts

                _models     ->  alert.ts
                                index.ts
                                user.ts

                _services   ->  accounts.services.ts
                                alert.services.ts
                                index.ts

                accounts    ->  account-routing.module.ts
                                account.module.ts
                                layout.component.html
                                layout.component.ts
                                login.component.html
                                login.component.ts
                                register.component.html
                                register.component.ts

                home        ->  home.component.html
                                home.component.ts
                                index.ts

                users       ->  users-routing.module.ts
                                users.module.ts
                                layout.component.html
                                layout.component.ts
                                list.component.html
                                list.component.ts
                                add-edit.component.html
                                add-edit.component.ts
                
                app-routing.module.ts
                app.component.html
                app.component.ts
                app.module.ts


