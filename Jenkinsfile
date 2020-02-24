node {
  stage('JIRA') {
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

