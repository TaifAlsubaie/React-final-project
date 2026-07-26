pipeline {
    agent any
    
    tools {
        nodejs 'node' 
    }

    stages {
        stage('Install & Build') {
            steps {
                echo 'Installing dependencies and building React app...'
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running React tests...'
                sh 'npm install react-router-dom'
                sh 'CI=true npm test -- --watchAll=false'
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                sh 'ansible-playbook -i hosts playbook.yaml --tags "delivery"'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'ansible-playbook -i hosts playbook.yaml --tags "deploy"'
            }
        }
    }
}
