AutoApp::Application.routes.draw do

  root to: "home#main"

  get "*api" => "home#api"

end
