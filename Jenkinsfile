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
                //sh 'CI=false npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' 
            }
        }

        stage('Ansible - Delivery') {
            steps {
                sh "ansible-playbook -i hosts playbook.yaml --tags 'delivery' --extra-vars 'image_tag=${BUILD_NUMBER}'"
            }
        }

        stage('Ansible - Deploy') {
            steps {
                sh "ansible-playbook -i hosts playbook.yaml --tags 'deploy' --extra-vars 'image_tag=${BUILD_NUMBER}'"
            }
        }
    }
}
