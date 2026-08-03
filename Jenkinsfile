pipeline {
    agent any
    
    tools {
        nodejs 'node' 
    }

    stages {
        stage(' Build') {
            steps {
                
                sh 'npm install'
        
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
