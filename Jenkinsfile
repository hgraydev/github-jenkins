pipeline {
    
    agent any
    
    environment {
        CHROME_BIN = '/bin/google-chrome'
        STATUS = ''
    }

    stages {
        stage('Dependencies') {
            steps {
                sh label: 'Install npm dependencies', script: 'npm install'
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
            post {
                failure {
                    script {
                        withEnv(['JIRA_SITE=JIRA Steps']) {
                          def testIssue = [fields: [ project: [id: '10311'],
                                                     summary: 'New JIRA Created from Jenkins.',
                                                     description: 'New JIRA Created from Jenkins.',
                                                     issuetype: [id: '10103']]]

                          response = jiraNewIssue issue: testIssue

                          echo response.successful.toString()
                          echo response.data.toString()
                        }
                    }
                }
                success {
                    echo 'Test Successful'
                }
            }
        }
        stage('e2e Tests') {
            
            steps {
                echo 'Running e2e test .......'
                sh label:'run cypress', script: './node_modules/cypress/bin/cypress run'
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
           
           junit (
             testResults: 'results/result-output.xml',
             testDataPublishers: [
               jiraTestResultReporter(
                 configs: [
                   jiraStringField(fieldKey: 'summary', value: '${DEFAULT_SUMMARY}'),
                   jiraStringField(fieldKey: 'description', value: '${DEFAULT_DESCRIPTION}'),
                   jiraStringArrayField(fieldKey: 'labels', values: [jiraArrayEntry(value: 'Jenkins'), jiraArrayEntry(value:'Integration')])
                 ],
                 projectKey: 'JJ',
                 issueType: '10101',
                 autoRaiseIssue: true,
                 autoResolveIssue: false,
                 autoUnlinkIssue: false,
               )
             ]
            )

       }
   }
}
