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

         stage('Build & Push Docker Image') {
                steps {
                    sh """
                    ansible-playbook -i hosts playbook.yaml \
                    --tags "delivery" \
                    -e "docker_username=${DockerHub_USERNAME} docker_password=${DockerHub_PASSWORD} build_version=${BUILD_NUMBER}"
                    """
                    }
                }
        
         stage('Deploy Container') {
            steps {
                sh "ansible-playbook -i hosts playbook.yaml --tags 'deploy' -e 'build_version=${BUILD_NUMBER}'"
            }
        }
    }
}
