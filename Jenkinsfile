pipeline {
    
    agent any
    
    stages {
        stage("Dependencies") {
            steps {
                echo 'Installing dependencies'
            }
        }
        stage("Build") {
            steps {
                echo "Building ......"
            }
        }
        stage("Test") {
            steps {
                echo "Testing ......"
                sh 'pytest --junitxml=result.xml'
                echo "Init currentResult: ${currentBuild.currentResult}"
            }
        }
        stage("Test e2e") {
            steps {
                echo "Testing e2e ......"
            }
        }
        stage("Deploy") {
            steps {
                echo "Deploying ......"
            }
        }
    }
    post {
        always {
            echo "Creating Issues In Jira"
            junit (
                 testResults: 'result.xml',
                 testDataPublishers: [
                   jiraTestResultReporter(
                     configs: [
                       jiraStringField(fieldKey: 'summary', value: '${DEFAULT_SUMMARY}'),
                       jiraStringField(fieldKey: 'description', value: '${DEFAULT_DESCRIPTION}'),
                       jiraStringArrayField(fieldKey: 'labels', values: [jiraArrayEntry(value: 'Jenkins'), jiraArrayEntry(value:'Integration')])
                     ],
                     projectKey: 'JIR',
                     issueType: '10010',
                     autoRaiseIssue: false,
                     autoResolveIssue: false,
                     autoUnlinkIssue: false,
                   )
                 ]
                )
        }
    }
}
