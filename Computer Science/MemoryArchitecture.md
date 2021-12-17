# 프로세스에 할당되는 memory
![image](https://user-images.githubusercontent.com/68576770/146217068-5bff9ee4-923b-4472-83dc-686762d769e4.png)
1. stack 영역
- 함수 호출시 사용되는 지역변수 혹은 매개변수가 할당되는 영역
- 동적 세그먼트
- 컴파일시 크기 결정
- 함수가 호출되면 생성되었다가 해당 함수가 종료되면 사라지는 임시 메모리 공간
- 힙과 같은 공간 공유 - 스택은 높은 메모리 주소부터 할당됨
- 스택 영역이 힙 영역을 침범하면 stack Overflow
- 예시
~~~
public class memory {
	public static void main(String[] args) {
		int num = 7;	// 1번 시점
		sqrt(num);
		
		// 3번 시점
		for (int i = 0; i < 10; i++) {
			System.out.println(i);
		}
	}

	private static int sqrt(int n) {
		int result = n * n;	// 2번 시점
		return result;
	}
}
~~~
![image](https://user-images.githubusercontent.com/68576770/146221822-4070badc-4475-4c75-b990-3ab143cd174d.png)
2. heap 영역
- 프로그래머(사용자)가 동적 할당하거나 해제하는 영역(예. 객체 할당)
- 동적 세그먼트
- 런타임시 크기 결정
- 스택과 같은 공간 공유 - 힙은 낮은 메모리 주소부터 할당됨
- 힙 영역이 스택 영역을 침범하면 HEAP Overflow
- 자바에서 가비지 컬렉션의 대상이 되는 메모리 영역
- 예시
~~~
public class memoryHeap {
	public static void main(String[] args) {
		Person p1 = new Person("Alice");
		Person p2 = new Person("Tay");
	}
	static class Person {
		String name;
		Person(String name) {
			this.name = name;
		}
	}
}
~~~
![image](https://user-images.githubusercontent.com/68576770/146223074-37483af5-a6d8-44e2-8425-00eb320ac5b5.png)
3. data 영역
- 전역 변수와 정적(static) 변수가 할당되는 영역
- 정적 세그먼트
- 프로그램이 실행될 때 할당되고, 프로그램이 종료되면 소멸
4. code 영역
- 실행할 프로그램의 코드가 저장되는 영역
- 정적 세그먼트
- 사용자가 프로그램 실행 -> OS에 요청 -> 실행 코드가 Code 영역에 담김 -> CPU가 Code 영역의 프로그램 실행 명령어 처리 -> 프로그램 실행



