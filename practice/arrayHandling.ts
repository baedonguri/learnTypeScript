/**
 * pratice about array method
 */

let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter
let useFilter: number[] = nums.filter((val: number) => val % 2 === 0);
// console.log(useFilter); // [ 2, 4, 6, 8, 10 ]
// map
let useMap: string[] = nums.map((val: number) => val.toString());
// console.log(useMap); // [ '1',  '2', '3', '4',  '5', '6', '7',  '8', '9', '10'];

// reduce
let useReduce: number = nums.reduce(
  (total: number, value: number) => (total += value),
  0
);
// console.log(useReduce); // 5

/*----------------------------------------------------------------------*/

const sleep = function (ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const array: number[] = [500, 500, 500, 500, 500, 500];

// for-of : 의도한대로 동작하지만 순차로 동작하게 됨
const runFor = async function (): Promise<void> {
  console.log("START");
  let idx = 0;
  for (const num of array) {
    await sleep(num);
    console.log(`index: ${idx++}, ms: ${num}`);
  }
  console.log("END");
};

// runFor();

/**
 * map을 이용한 비동기 처리
 */
const runMap = async function (): Promise<void> {
  console.log("START");

  await Promise.all(
    array.map(async (num: number, index: number): Promise<void> => {
      const result = await sleep(num);
      console.log(`index: ${index++}, ms: ${num}`);
      return result;
    })
  );
  console.log("END");
};
// runMap();

/**
 * reduce를 이용한 비동기처리
 */

const runReduce = async function (): Promise<void> {
  console.log("START");

  await array.reduce(
    async (acc: Promise<void>, num: number, index: number): Promise<void> => {
      //   await acc.then();
      await sleep(num);
      console.log(`index: ${index++}, ms: ${num}`);
      return acc;
    },
    Promise.resolve()
  );
  console.log("END");
};

runReduce();
