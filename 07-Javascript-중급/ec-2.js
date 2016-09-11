debugger;
var value = 1;
function fn1 (){};
var value2 = function(){};

// 초기화 단계에서는 undefined 처리 하지 않음
// 실행 단계(3)에서 1로 할당
// var value(){};
fn1(){};


/*
	렉시컬 환경 컴포넌트: {
		글로벌 환경: {
			환경 레코드: {
				오브젝트 환경 레코드: {
					value: undefined
				}
			}
		},
		외부 렉시컬 환경 참조: null
	}
 */