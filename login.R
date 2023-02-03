library(shiny)

ui <- navbarPage(
  tags$head(
    tags$link(rel = "stylesheet", type = "text/css", href = "custom.css")
  ),
  theme = bslib::bs_theme(version = 5,
                          bg = "#FFFFFF",
                          fg = "#003b4d",
                          primary = "#003b4d"),
  fluidRow(
    column(width = 4, offset = 4,
    bslib::card(full_screen = FALSE,
                bslib::card_header("Login"),
                bslib::card_image(file = "www/CIGA_Simbolo-Contorno-85.svg",
                                  width = "30%",
                                  class = "imagemcentralizada"),

                # FAZER LOGIN
               # shiny::HTML("<center><h4>Bem-vindo</h4></center>"),
               # shiny::HTML("<center>Fazer login no CIGA</center>"),
               # shiny::br(),
               # textInput("email", label = "Endereço de email: ", width = "100%"),
               # passwordInput("password", "Senha: ", width = "100%"),
               # shiny::br(),shiny::br(),
               # actionButton("enviar", "Continuar", width = "100%", class = "btn-primary", onclick = "login()"),
               # shiny::br(), shiny::br(),
               # a(
               #  href = "recuperar-senha.html",
               # actionButton("esquecisenha", "Esqueceu a senha?", width = "100%", class = "btn-danger center")
               # ),
               # shiny::br(), shiny::br(),
               # a(
               #   href = "cadastro.html",
               #   shiny::actionButton("registrar", "Cadastro", width = "100%",
               #                class = "btn-secondary align-self-center")
               # )


                # CADASTRE-SE
                # shiny::HTML("<center><h4>Solicitar cadastro</h4></center>"),
                # shiny::HTML("<center>Fazer o cadastro no CIGA</center>"),
                # shiny::br(),
                # textInput("email", label = "Endereço de email: ", width = "100%"),
                # textInput("nome", label = "Nome: ", width = "100%"),
                # textInput("sobrenome", label = "Sobrenome: ", width = "100%"),
                # textInput("instituicao", label = "Instituição: ", width = "100%"),
                # passwordInput("password", "Crie uma senha:", width = "100%"),
                # shiny::br(),shiny::br(),
                # actionButton("cadastro", "Cadastrar", width = "100%", class = "btn-primary", onclick = "register()"),
                # shiny::br(), shiny::br(),
                # shiny::actionButton("voltar", "Voltar", width = "100%",
                #              class = "btn-secondary align-self-center", onclick = "history.back()")



               # RECUPERAR SENHA
               shiny::HTML("<center><h4>Recuperar a senha</h4></center>"),
               shiny::HTML("<center>Recupere a senha para acessar o CIGA</center>"),
               shiny::br(),
               textInput("email", label = "Endereço de email: ", width = "100%"),
               shiny::br(),shiny::br(),
               actionButton("forgetpassword", "Recuperar a senha", width = "100%", class = "btn-primary", onclick = "resetPassword()"),
               shiny::br(), shiny::br(),
               shiny::actionButton("voltar", "Voltar", width = "100%",
                                   class = "btn-secondary align-self-center", onclick = "history.back()")




     )
    )
  )
)

server <- function(input, output, session) {

}

shinyApp(ui, server)
