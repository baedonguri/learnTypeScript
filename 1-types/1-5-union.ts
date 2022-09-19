{
    /**
     * Union Types: OR => 발생할 수 있는 경우의 수 중 하나만 할당할 수 있을 때 활용!!!
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }

    move('up');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;


    // 예제
    // function: login -> success, fail
    type SuccessState = {
        response: {
            body : string;
        };
    };
    type FailState = {
        reason:string
    };
    type LoginState = SuccessState | FailState;

    function login(): LoginState{
        // return {
        //     response: {
        //         body: 'logged in!',
        //     },
        // };
        return {
            reason: 'password is incorrect!'
        };
    };

    function printLoginState(state : LoginState){
        if ('response' in state) {
            console.log(`${state.response.body}`);
        }else {
            console.log(`${state.reason}`);
        }
    }

    const result = login();

    printLoginState(result);
}