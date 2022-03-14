# Graph

단순히 노드(N, node)와 그 노드를 연결하는 간선(E, edge)을 하나로 모아 놓은 자료 구조

<br>

## 예시

- 지도
- 지하철 노선도

<br>

## 관련 용어

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcjbjPd%2FbtqKgF6OzSD%2FU0a7BKCpfJlhx1iJzwsEy1%2Fimg.png)

    ✔ 정점(vertice) : 노드(node)라고도 하며 정점에 데이터 저장
    ✔ 간선(edge): 링크(arcs)라고도 하며 노드간의 관계를 나타냄
    ✔ 인접 정점(adjacent vertex) : 간선에 의해 연결된 정점(정점 0과 정점 1)
    ✔ 단순 경로(simple-path): 경로 중 반복되는 정점이 없는것, 같은 간선을 자나가지 않는 경로
    ✔ 차수(degree): 무방향 그래프에서 하나의 정점에 인접한 정점의 수(정점 0의 차수 : 3)
    ✔ 진출 차수(out-degree) : 방향 그래프에서 사용되는 용어로, 한 노드에서 외부로 향하는 간선의 수
    ✔ 진입 차수(in-degree) : 방향 그래프에서 사용되는 용어로, 외부 노드에서 들어오는 간선의 수
    ✔ 경로 길이(path length) : 경로를 구성하는데 사용된 간선의 수
    ✔ 사이클(cycle) : 단순 경로의 시작 정점과 종료 정점이 동일한 경우

<br>

## Graph 구현 방법

### **인접행렬** : 그래프의 노드를 2차원 배열로 만든 것

![인접행렬](https://t1.daumcdn.net/cfile/tistory/21029250584C0F2413)

- **인접행렬의 장점**

  - 2차원 배열 안에 모든 정점들의 간선 정보가 담겨있기 때문에 두 정점에 대한 연결 정보를 조회할 때 O(1)의 시간복잡도면 가능하다.
  - 인접리스트에 비해 구현이 쉽다.

- **인접행렬의 단점**
  - 모든 정점에 대해 간선 정보를 대입해야 하므로 O(n^2) 의 시간복잡도가 소요된다.
  - 무조건 2차원 배열이 필요하기 때문에 필요 이상의 공간이 낭비된다.

<br>

### **인접리스트** : 그래프의 노드를 리스트로 표현한 것

![인접리스트](https://t1.daumcdn.net/cfile/tistory/2236CE4D5858CAA032)

- **인접리스트의 장점**

  - 정점들의 연결 정보를 탐색할 때 O(n) 시간이면 가능하다.
  - 필요한 만큼의 공간만 사용하기 때문에 공간의 낭비가 적다.

- **인접리스트의 단점**
  - 특정 두 점이 연결되었는지 확인하려면 인접행렬에 비해 시간이 오래걸린다.
  - 구현이 비교적 어렵다.

<br>

## Graph의 종류

### 무방향 그래프(Undirected Graph)

- 두 정점을 연결하는 간선에 방향이 없는 그래프

![무방향 그래프](https://blog.kakaocdn.net/dn/bygVj1/btraPtLucWF/s5t7THJsgno8xru4deCnTK/img.png)

### 방향 그래프(Directed Graph)

- 두 정점을 연결하는 간선에 방향이 존재하는 그래프

![방향 그래프](https://blog.kakaocdn.net/dn/bR5k7I/btraKFsBhxC/BLCrfZ0Qww0pOeiCte5RMk/img.png)

### 가중치 그래프(Weighted Graph)

- 간선에 비용이나 가중치가 할당된 그래프

![가중치 그래프](https://blog.kakaocdn.net/dn/cHaM3L/btraPs7aaiz/TcZplV6UpKqCjp5lb1sKY1/img.png)

### 연결 그래프(Connected Graph)

- 무방향 그래프에 있는 모든 정점 쌍에 대해서 항상 경로가 존재하는 그래프

![연결 그래프](https://blog.kakaocdn.net/dn/k1G3R/btrfhIqYuso/FCkMWn7mB82yDVpsi36UK0/img.png)

### 비연결 그래프(Disconnected Graph)

- 무방향 그래프에서 특정 정점 사이에 경로가 존재하지 않는 그래프

![비연결 그래프](https://blog.kakaocdn.net/dn/22Ijs/btrfhIEtQ5S/DZmdkCBAtxK0PX72cIXsS0/img.png)

### 완전 그래프(Complete graph)

- 그래프의 모든 정점이 서로 연결되어 있는 그래프

![완전 그래프](https://blog.kakaocdn.net/dn/k1G3R/btrfhIqYuso/FCkMWn7mB82yDVpsi36UK0/img.png)

### 순환그래프(Cycle)

- 단순 경로에서 시작 정점과 도착 정점이 동일한 그래프

![순환그래프](https://blog.kakaocdn.net/dn/cDwFx5/btrfjdqffI2/AKIxmvwkk9xKbEib4nrHu0/img.png)

### 비순환그래프(Acyclic Graph)

- 사이클 그래프를 제외한 그래프로, 사이클이 없는 그래프

![비순환그래프](https://blog.kakaocdn.net/dn/bWEhuV/btrfi47VkAz/k3bxfxKDsZWOMWJBct2aC1/img.png)

<br>

## Graph의 탐색

- **DFS(깊이 우선 탐색)** : 모든 노드를 방문하고 싶을 때 사용
- **BFS(너비 우선 탐색)** : 두 노드간의 최단경로 또는 임의의 경로 탐색

![Graph의 탐색](https://blog.kakaocdn.net/dn/cFgEJ6/btqKmoJkq5a/pwm3O8T4rERuL4wSTrkgnK/img.gif)

<br>

## Graph와 Tree의 차이점

|                Graph                 |           Tree            |
| :----------------------------------: | :-----------------------: |
| 방향 그래프, 무방향 그래프 모두 존재 |        방향 그래프        |
|             사이클 가능              |       사이클 불가능       |
|        Root node 개념이 없다.        | 시작점인 Root Node가 존재 |
|        부모-자식 개념이 없다.        |  부모-자식 개념이 있다.   |

<br>

## 참고

> https://gmlwjd9405.github.io/2018/08/13/data-structure-graph.html  
> https://coding-factory.tistory.com/610  
> https://sarah950716.tistory.com/12  
> https://hongcoding.tistory.com/78  
> https://ongveloper.tistory.com/165  
> https://velog.io/@gimtommang11/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EA%B7%B8%EB%9E%98%ED%94%84
