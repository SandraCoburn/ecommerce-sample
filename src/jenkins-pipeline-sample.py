# print 'Executing Jenkins Pipeline'

# def repositoryName = 'ecommerce-sample'
# def message = """$repositoryName build $env.BUILD_NUMBER
# $env.BUILD_TAG"""
# def color = "good"

# node {
#    currentBuild.result = "SUCCESS"
#    try {
#       stage('Declarative: Checkout SCM'){
#          slackSend(color : "good", message : "Build started for $repositoryName")
#          checkout scm
#       }
#       stage('Build'){
#          sh 'sudo bash -l -c ". $HOME/.nvm/nvm.sh ; nvm use || nvm install && nvm use"'
#          sh 'node -v'
#          sh 'npm prune'
#          sh 'npm run build'
#       }
#       stage('Copy Package'){
#          try {
#             sh "sudo rm -rf /opt/passfast/$repositoryName/node_modules"
#          } catch (error) {
#             print error
#             print 'No node_modules directory to remove'
#          }
         
#          try {
#             sh "sudo rm /opt/passfast/$repositoryName/package-lock.json"
#          } catch (error) {
#             print error
#             print 'No package-lock.json to remove'
#          }
         
#          sh "sudo cp -rf /var/lib/jenkins/workspace/$repositoryName /opt/passfast/"
#          message += """
# Build successfully deployed
#          """
#       }
#       stage('Restart Process Manager'){
#          try {
#             sh "pm2 restart /opt/passfast/$repositoryName/ecosystem.config.js"
            
#          } catch (error) {
#             print error
#             print 'Service has not yet been started'
#             print 'Create ecosystem file and restart service manually'
#             print 'Starting service'

#             try {
#             sh "pm2 start /opt/passfast/$repositoryName"

#             message += """
# Ecosystem not configured in server. Please inform DevOps to use build
#             """
#             color = "warning"
#             } catch (error) {
#                 print error

#                 message += """
# Service has started but no ecosystem exists. Please inform DevOps to use build
#                 """
#                 color = "warning"
#             }
#          }
#       }
#       stage('Post Build Information') {
#          slackSend(color : "$color", message : "$message")
#       }
#    } catch (error) {
#       currentBuild.result = "FAILURE"
#       slackSend(color : "danger", message : """$message 
# An error occurred during build
# $error""")
#       throw error
#    }
# }
