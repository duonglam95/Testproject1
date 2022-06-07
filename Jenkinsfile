pipeline {
  agent any
  stages {
    state ('build'){
        steps {
          echo 'first...'
        }
      }

      state ('test'){
        steps {
          echo 'first...'
        }

      }
      state ('deploy'){
        steps {
          echo 'first 2...'
        }
      }

      state ('clone'){
          steps {
            // This step should not normally be used in your script. Consult the inline help for details.
            withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                // some block
            }
          }
        }
  }
    
    
  
  
}
