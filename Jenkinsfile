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
                sh label: 'Install Python 3', script: 'sudo apt-get install python3  '
                sh label: 'Verify python version', script: 'python3 -V'
                sh label: 'Install pip', script: 'sudo apt-get install python-pip -y'
                sh label: 'Verify pip version', script: 'pip --version'
                sh label: 'Install pytest', script: 'sudo apt-get install -y python-pytest'
                sh label: 'Verify pytest version', script: 'pytest --version'
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
