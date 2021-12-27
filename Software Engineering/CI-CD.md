# CI/CD
![image](https://user-images.githubusercontent.com/68576770/147404889-348b3583-f13d-473e-a900-97dab7adaa8f.png)
- 어플리케이션 개발 부터 배포까지 모든 단계들을 자동화하여 효율적이고 빠르게 사용자에게 짧은 주기로 제공하는 방법
- 어플리케이션 전체 라이프사이클에 걸쳐 'CI/CD pipeline'을 구축해 지속적인 자동화와 지속적인 모니터링을 제공하게 된다.
- 대부분의 DevOps 운영은 CI/CD에 의해 주도됨
- integration hell을 해결하기 위한 방법
  - integration hell : 새로운 코드를 통합할 때 개발 및 운영팀에 발생하는 문제
### CI (Continuous Integration) : 지속적인 통합
1. 코드 변경사항을 주기적으로 메인 리포지토리에 머지해야한다.
- 최대한 작은 단위로 개발해나가면서 통합해야 함
  - 여러 명의 개발자가 오랫동안 머지 하지 않고 계속 혼자 개발만 하다보면 나중에 통합할 때 충돌을 해결하는 시간이 더 길어질 수 있음
- 개발자는 단위 테스트를 포함해 자동으로 테스트 되는 코드를 만들어서, 새로 작성한 코드 뿐만 아니라 그 코드가 전체 어플리케이션에 영향을 주지 않는지까지 모든 테스트를 진행
  - CI 방식이기 때문에 기존 코드와 새로운 코드간에 충돌이 발생하면 버그를 더 빠르고 작은 단위로 수정 가능함
2. 통합을 위한 단계(빌드, 테스트, 머지)의 자동화
- 레포지토리에 머지하면 CI 스크립트를 이용해 자동으로 변경 사항을 빌드하고, 빌드가 되면 테스트 진행
- 빌드와 테스트가 모두 잘 되면 배포할 때 반영
- 빌드나 테스트가 실패하면 코드를 작성한 개발자에게 알림
### CD (Continuous Delivery/Deployment) : 지속적인 제공/배포
Continuous Delivery : 개발자들의 변경 사항이 빌드, 테스트를 거치면 메인 리포지토리에 자동으로 반영되어 배포할 준비가 되며, 운영팀이 배포하기 전의 상태
Continuous Deployment : 배포할 준비가 되면, 고객이 사용 가능한 환경까지 릴리즈 하는 것을 자동화
### CI/CD를 위한 툴
- Jenkins, Buildkite, GitHub Actions, GitLab CI/CD, Bitbucket Pipelines, circleci, Travis
# References
- https://crashtest-security.com/best-ci-cd-security-tools/
- https://www.redhat.com/ko/topics/devops/what-is-ci-cd
- https://www.youtube.com/watch?v=0Emq5FypiMM&t=202s
