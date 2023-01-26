library(shiny)

ui <- function(req) {

  par <- shiny::parseQueryString(req$QUERY_STRING)$t

  final <- try(
    jose::jwt_decode_sig(par, pubkey = "www/key2.pem"),
    # conforme https://firebase.google.com/docs/auth/admin/verify-id-tokens
    TRUE)

  if (is.null(par) | class(final)[1] == "try-error") {
    par <- "false"
  } else {
    if (final$iss == "https://securetoken.google.com/exemplo-4d8da") {
      par <- "true"
    }
  }

  if (par == "true") {
    navbarPage(
      title = "Firebase",
      id = "menu_superior",
      tabPanel(
        title = "Home",
        shinyjs::useShinyjs(),
        fluidRow(
          column(
            width = 12,
            includeMarkdown("texto_inicial.md")
          )
        ),
        br(),
        actionButton("logout", "Sair")
      ),
      tabPanel(
        title = "Página 1",
        selectInput(
          "variavel",
          label = "Selecione uma variável",
          choices = names(mtcars)
        ),
        plotOutput("grafico")
      ),
      tabPanel(
        title = "Página 2",
        selectInput(
          "variavel_x",
          label = "Selecione uma variável para o eixo X",
          choices = names(mtcars)
        ),
        selectInput(
          "variavel_y",
          label = "Selecione uma variável para o eixo Y",
          choices = names(mtcars)
        ),
        plotOutput("grafico2")
      )
    )
  } else {
    shiny::tags$script(shiny::HTML('location.replace("login-v2.html");'))
  }

}

server <- function(input, output) {

  output$grafico <- renderPlot({
    hist(mtcars[[input$variavel]])
  })

  output$grafico2 <- renderPlot({
    plot(x = mtcars[[input$variavel_x]], y = mtcars[[input$variavel_y]])
  })

  observeEvent(input$logout, {
    js <- 'location.replace("http://127.0.0.1:4242")'
    shinyjs::runjs(js)
  })

}

shinyApp(ui, server, options = list(port = 4242))
