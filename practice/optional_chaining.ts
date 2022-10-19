/**
 * Optional Chaining 연산자 (?.)
 * 만약 참조가 nullish (null or undefind)이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined로 단락된다.
 * 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면 undefined를 리턴.
 * optional chaining은 선언되지 않은 루트 객체에 사용할 수 없지만, 정의되지 않은 루트 객체와는 함께 사용할 수 있다.
 */

interface CompanyInfo {
  name: string | null | undefined;
}

let obj: CompanyInfo = {
  name: "Facebook",
};

console.log(obj.name?.length); // 8

let obj_null: CompanyInfo = {
  name: null,
};

console.log(obj_null.name?.length); // undefined
