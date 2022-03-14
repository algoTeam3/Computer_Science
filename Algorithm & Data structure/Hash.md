# Hash

- 임의의 길이의 값을 **해시함수(Hash Function)**를 사용하여 고정된 크기의 값으로 변환하는 작업을 말한다.

</br>

# Hash Function

- Key를 **고정된 길이**의 Hash로 변경해주는 역할
- Hash는 저장된 위치

</br>

# Hash Table

- 해시값을 주소로 삼아 데이터를 key와 함께 저장하는 자료구조

![해쉬테이블](https://i.imgur.com/EMW1YZP_d.webp?maxwidth=760&fidelity=grand)

</br>

# 해쉬충돌

- 해쉬 함수로 얻은 해쉬값이 똑같아 충돌이 나는 경우

![해쉬충돌](https://i.imgur.com/NnEBDcX.png)

</br>

# 해쉬 충돌 해결

## 1️⃣ 체이닝(Chaining)

![체이닝](https://baeharam.netlify.app/media/ds/hash4.png)

- 인덱스가 충돌될 경우 뒤에 연결리스트로 연결해줌으로서 처리

</br>

## 2️⃣ Open Addressing 

![오픈어드레싱](https://baeharam.netlify.app/media/ds/hash5.png)

- 동일한 주소에 다른 값이 존재할 경우 다른 주소도 이용
  - 삽입 : 해시값에 인덱스에 데이터 이미 존재할 경우 다음 인덱스의 **빈 곳을 찾아(탐사)** 저장 저장
  - 탐색 : 해시값에 인덱스부터 검사하며 탐사하는데 삭제 표시는 지나간다.
  - 삭제 : 탐색을 통해 값을 찾고 삭제한뒤 삭제 표시

</br>

# Open Addressing 3가지 충돌 처리기법

1. 선형탐사
2. 제곱탐사
3. 이중해싱

</br>

## 1️⃣ 선형 탐사

- 바로 인접한 인덱스에 데이터 삽입
- 데이터 밀집되는 **클러스터링**문제 발생
  
![선형탐사](https://baeharam.netlify.app/media/ds/hash6.gif)

</br>

## 2️⃣ 제곱 탐사

- 1^2, 2^2 3^2와 같이 제곱만큼 이동하여 탐사하는 방식

![제곱탐사](https://baeharam.netlify.app/media/ds/hash7.png)

</br>

## 3️⃣ 이중 해싱

- 충돌을 피하기위해 해싱을 한번 더 진행하는 처리 기법
  
</br>

# HashMap vs HashTable

- 보조 해시 함수 : HashMap은 보조 해쉬함수를 사용하여 해시충돌이 덜 발생하는 이점
- 동기화 : HashTable은 동기화를 지원하기 때문에 처리 시간의 지연 존재.

```java
// 해시테이블의 put 
public synchronized V put(K key, V value) { 
    // Make sure the value is not null 
    if (value == null) { 
        throw new NullPointerException(); 
    } 
        // Makes sure the key is not already in the hashtable. 
    Entry<?,?> tab[] = table; 
    int hash = key.hashCode(); 
    int index = (hash & 0x7FFFFFFF) % tab.length; 
    @SuppressWarnings("unchecked") 
    Entry<K,V> entry = (Entry<K,V>)tab[index]; 
    for(; entry != null ; entry = entry.next) { 
        if ((entry.hash == hash) && entry.key.equals(key)) {
            V old = entry.value; 
            entry.value = value; 
            return old; 
        } 
    } 
    addEntry(hash, key, value, index); 
    return null; 
    } 
// 해시맵의 put 
public V put(K key, V value) { 
    return putVal(hash(key), key, value, false, true);
}
```

</br>

# 참고

- [https://mangkyu.tistory.com/102](https://mangkyu.tistory.com/102)
- [https://baeharam.netlify.app/posts/data%20structure/hash-table](https://baeharam.netlify.app/posts/data%20structure/hash-table)
- [https://go-coding.tistory.com/30](https://go-coding.tistory.com/30)