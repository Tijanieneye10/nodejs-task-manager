#!/bin/env groovy

pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }

    environment {
        COLOR_MAP = ["good", "danger"]
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

        stage("Send Slack Notification"){
            steps {
                echo "Send notification to slack"
            }

            post{
                always {
                    slackSend channel: 'jenkins', 
                    color: COLOR_MAP[currentBuild.currentResult], 
                    message: "${env.JOB_NAME} ${env.BUILD_NUMBER} Deployed successfully, view here \n ${env.BUILD_URL}", 
                    tokenCredentialId: 'slackToken'
                }
            }
        }
    }
}
