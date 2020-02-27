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
                catchError(stageResult: 'FAILURE') {
                    script {
                        withEnv(['JIRA_SITE=LOCAL']) {
                        def testIssue = [fields: [ project: [id: '10001'],
                                                    summary: 'New JIRA Created from Jenkins.',
                                                    description: 'New JIRA Created from Jenkins.',
                                                    issuetype: [id: '10010']]]
                        response = jiraNewIssue issue: testIssue
                        echo response.successful.toString()
                        echo response.data.toString()
                        }
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
