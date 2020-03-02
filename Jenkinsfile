pipeline {
    
    agent any
    
    environment {
        CHROME_BIN = '/bin/google-chrome'
        STATUS = ''
    }

    stages {
        stage('Dependencies') {
            steps {
                echo 'Install dependencies ......'
            }
        }
        stage('Build') {
            steps {
                echo 'Build project ......'
            }
        }
        stage('Unit Tests') {
            steps {
                echo 'Running tests ......' 
                sh 'pytest --junitxml=result.xml'
            }
        }
        stage('e2e Tests') {
            
            steps {

                echo 'Running e2e test .......'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying proyect....'
                echo "Init currentResult: ${currentBuild.currentResult}"
            }
        }
    }
    post {
       always {
           jiraSendBuildInfo branch: 'master-JJ-1', site: 'proyectosinterware.atlassian.net'
       }
   }
}
