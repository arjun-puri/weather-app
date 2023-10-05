pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and dockerize') {
            steps {
                script {
                  docker.build("weather-app:${env.BUILD_ID}", '.')
                }
            }
        }

        stage('Deploy') {
            steps {
              script {
                def appContainer = docker.image("weather-app:${env.BUILD_ID}")
                appContainer.run("-p 9090:80 -d")
              }
            }
        }
    }
}
