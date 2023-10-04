pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build docker image') {
          steps {
            script {
              def appImage = docker.build("weather-app:${env.BUILD_ID}", '.')
            }
          }
        }

        stage('Deploy') {
            steps {
              script {
                def appContainer = docker.image('weather-app:${env.BUILD_ID}')
                appContainer.run("-p 8080:8080 -d")
              }
            }
        }
    }
}
