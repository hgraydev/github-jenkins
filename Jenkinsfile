node {
  stage('JIRA') {
    def searchResults = jiraJqlSearch jql: "project = JIR AND issuekey = 'JIR-6'"
    def issues = searchResults.data.issues
    for (i = 0; i <issues.size(); i++) {
      def fixVersion = jiraNewVersion version: [name: "new-fix-version-1.0",
                                                project: "JIR"]
      def testIssue = [fields: [fixVersions: [fixVersion.data]]]
      response = jiraEditIssue idOrKey: issues[i].key, issue: testIssue
    }
  }
}
