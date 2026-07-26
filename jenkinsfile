pipeline{
    agent any
    stages{
        
        stage('Build'){
            steps{
               sh 'mvn clean package -DskipTests'
            }
        }
         stage('Test'){
            steps{
                sh 'mvn test'
            }
        }

        stage('Build & Push Docker Image'){
            steps{
                sh 'ansible-playbook -i hosts playbook.yaml --tags "delivery"'
            }
        }

         stage(' Deploy Container'){
            steps{
                sh 'ansible-playbook -i hosts playbook.yaml --tags "deploy"'
            }
        }

    }
}
