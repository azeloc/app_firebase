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
                shiny::HTML("<center><h4>Bem-vindo</h4></center>"),
                shiny::HTML("<center>Fazer login no CIGA</center>"),
                shiny::br(),
                textInput("email", label = "Endereço de email: ", width = "100%"),
                passwordInput("password", "Senha: ", width = "100%"),
                actionButton("enviar", "Continuar", width = "100%", class = "btn-primary"),
                shiny::br(), shiny::br(),
                actionButton("esquecisenha", "Esqueceu a senha?", width = "100%", class = "btn-danger center"),
                shiny::br(),shiny::br(),
                actionButton("registrar", "Registrar", width = "100%", class = "btn-secondary align-self-center")

                # CADASTRE-SE



     )
    )
  )
)

server <- function(input, output, session) {

}

shinyApp(ui, server)
