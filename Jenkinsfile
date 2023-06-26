#!/bin/env groovy

pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }

    stages {
        stage("Check version") {
            steps {
                script {
                    sh "npm -v"
                    sh "node -v"
                }
            }
        }

        stage("Install dependencies"){
            steps {
                script {
                    sh "npm install --silent"
                }
            }
        }

        stage("Deploy") {
            steps {
                script {
                    sh "mkdir version-${BUILD_ID}"
                    echo "Deployed finished"
                }
            }
        }
    }
}
