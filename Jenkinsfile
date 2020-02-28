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
            post {  // 'stage 3'
                failure {
                    echo "... at least one failed"
                    script {
                        repositoryUrl = scm.userRemoteConfigs[0].url
                        echo repositoryUrl;
                    }
                }
                success {
                    echo "Success!"
                    script {
                        repositoryUrl = scm.userRemoteConfigs[0].url
                        echo "${repositoryUrl}";
                    }
                }
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
}
