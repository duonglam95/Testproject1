pipeline {
  agent any
  stages {
    stage ('build'){
        steps {
          echo 'first...'
        }
      }

      stage ('test'){
        steps {
          echo 'first...'
        }

      }
      stage ('deploy'){
        steps {
          echo 'first 2...'
        }
      }

      stage ('clone'){
          steps {
            // This step should not normally be used in your script. Consult the inline help for details.
            withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                // some block
                sh 'docker build -t admin/Testproject1:v1'
                sh 'docker push -t admin/Testproject1:v1'
            }
          }
        }
  }
    
    
  
  
}
