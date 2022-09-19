{
    // Array
    const fruits1: string[] =['tomato', 'banana'];
    const fruits2: Array<string> =['tomato', 'banana'];

    // 주어진 데이터를 변경할 수 없도록 하기 위한 readonly : object의 불변성을 보장하기 위함
    function printArray(fruits: readonly string[]) {
        // fruits.push('apple'); // error
        console.log(fruits);
    }


    // Tuple -> interface, type alias, class로 대체하여 사용하는 것이 좋음. 인덱스를 통해 접근하면 가독성이 떨어짐
    let student: [string,number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student; // array destructure 
    console.log(name, age);

}