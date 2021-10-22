# Cost of accessing an element
> Array가 Linked List보다 접근 비용은 적으므로 요소 접근이 필수 요건이면 Array가 낫다.
### Array
<img src="https://user-images.githubusercontent.com/68576770/138261079-1390ad31-da12-44b8-9ca4-211581a00424.jpg" width="400"><br>
- 저장 방식 : Array의 요소들은 인접한 메모리 위치에 저장됨
- 요소 접근 : base address(0x100)에서부터 인덱스를 이용해 메모리 주소를 계산하기 때문에 빠르게 접근 가능
	- 시간 복잡도 : O(1)
### Linked List
<img src="https://user-images.githubusercontent.com/68576770/138267303-1e8195b3-5c57-4093-8fbd-cd5b0a53775a.jpg" width="500"><br>
- 저장 방식 : Linked List의 요소들은 다음 요소를 가리키는 link와 함께 저장됨 (인접해서 저장되지 않음)
- 요소 접근 : 한 요소로 접근하기 위해서는 head에서 출발해 앞의 모든 요소들을 거쳐서 접근
	- 시간 복잡도 : O(N) // 마지막 노드 찾을 때

# Cost of inserting an element
> 삽입과 삭제 과정은 동일하다.
> Linked List가 Array보다 시간이 덜 소요된다.
### Array
<img src="https://user-images.githubusercontent.com/68576770/138268806-e5187d2f-738c-466b-9b0e-dd6310f43db4.jpg" width="400"><br>
- 맨 첫번째 자리로 삽입 : 뒤의 요소들이 한 칸씩 뒤로 밀림
	- 시간 복잡도 : O(N)
- 맨 뒷자리로 삽입
	- Array가 다 차지 않았을 때 : 인덱스로 요소 직접 삽입
    	- 시간 복잡도 : O(1)
    - Array가 다 찼을 때 : 다른 배열을 생성해서 원래 배열을 복사 후 요소 삽입
        - 시간 복잡도 : O(N)	// 복사할 때 비용
- 중간에 삽입 : i번째에 삽입한다고 하면, N/2 개의 요소들은 한 칸씩 뒤로 밀림
	- 시간 복잡도 : O(N)
### Linked List
<img src="https://user-images.githubusercontent.com/68576770/138269605-158f7255-2d33-48c5-b15a-29ca3dd458f3.jpg" width="500"><br>
- 맨 첫 번째 자리로 삽입 : 리스트의 사이즈와 상관없이, 새 노드 생성 후 원래 첫 번째에 있던 노드의 주소 값이 새 노드의 링크 값으로 변경됨
	- 시간 복잡도 : O(1)
- 맨 뒷자리로 삽입 : head부터 리스트 끝까지 링크 타고 가서 마지막에 삽입
	- 시간 복잡도 : O(N)	// 마지막 노드까지의 탐색 비용
- 중간에 삽입 : i번째에 삽입한다고 하면, 링크만 연결 바꿔준다고 해도 i번째까지 링크 타고 가서 삽입
	- 시간 복잡도 : O(N)	// 중간 노드까지의 탐색 비용
    
# 한눈에 비교👀
||Array|Linked List|
|:-----------:|:---------------------:|:---------------------:|
|요소 저장 방식|인접한 메모리 공간|메모리 어디든지 랜덤한 위치에 저장 가능|
|요소 접근|Random Access|Sequential Access|
|메모리 할당|정적 메모리 할당|동적 메모리 할당|
|크기|선언 시점에 지정해 컴파일 타임 때 할당|런타임 때 필요에 따라 할당할 수 있어서 크기가 다양함|
|종류|1차원, 2차원, 다차원|선형, 이중, 원형|

# References
https://www.geeksforgeeks.org/linked-list-vs-array/
https://www.javatpoint.com/ds-array-vs-linked-list
