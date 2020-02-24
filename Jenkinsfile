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
            }
        }
        stage("Test e2e") {
            steps {
                echo "Testing e2e ......"
            }
        }
        stage('JIRA') {
            # Look at IssueInput class for more information.
            def testIssue = [fields: [ // id or key must present for project.
                                       project: [id: '10001'],
                                       summary: 'New JIRA Created from Jenkins.',
                                       description: 'New JIRA Created from Jenkins.',
                                       customfield_1000: 'customValue',
                                       // id or name must present for issueType.
                                       issuetype: [id: '10010']]]

            response = jiraNewIssue issue: testIssue

            echo response.successful.toString()
            echo response.data.toString()
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
                     autoRaiseIssue: true,
                     autoResolveIssue: true,
                     autoUnlinkIssue: true,
                   )
                 ]
                )
        }
    }
}
