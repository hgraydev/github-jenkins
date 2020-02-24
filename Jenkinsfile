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
        stage("Deploy") {
            steps {
                echo "Deploying ......"
            }
        }
    }
    post {
        always {
            echo "Creating Issues In Jira"
        }
    }
}
