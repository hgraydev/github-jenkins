pipeline {
    agent any
    def repositoryUrl = scm.userRemoteConfigs[0].url  
    stages {
        stage("Dependencies") {
            steps {
                echo 'Installing dependencies'
            }
        }
        stage("Build") {
            steps {
                echo "Building ......"
                echo "${BUILD_URL}"
                echo repositoryUrl  

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
        stage("Deploy") {
            steps {
                echo "Deploying ......"
            }
        }
    }
    post {
        always {
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
                issueType: '10008',
                autoRaiseIssue: true,
                autoResolveIssue: false,
                autoUnlinkIssue: false,
            )
 ]
)
        }
    }
}
