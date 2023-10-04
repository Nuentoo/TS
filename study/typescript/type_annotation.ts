export function typeAnnotation() {
    return ':Type Annotation';
}

    /** Primitive Types ------------------------------------------------------------------------ */
    var num: number;
    var str: string;
    var bool: boolean;


    /** Arrays --------------------------------------------------------------------------------- */
    var boolArray: boolean[];
    boolArray = [true, 'false'];  // Error!


    /** Interfaces ----------------------------------------------------------------------------- */
    // 複数の型アノテーションを単一の名前付きアノテーションに合成
    interface Name {
        first: string;
        second: string;
    }

    var nameObj1: Name;
    nameObj1 = {
        first: 'John',
        second: 1234    // Error!
    }


    /** Inline Type Annotation ----------------------------------------------------------------- */
    var name2: {
        first: string;
        second: string;
    }
    name2 = {   // Error!
        first: 'John'
    }

    /** Generics ------------------------------------------------------------------------------- */
    // function、interface、classなどと一緒に利用できる。引数名はT、T1、T2、U、Vなど
    // コードの共通化と型の安全性を両立するための言語機能。型も引数のように扱う。Array/Promise/Mapでよく使われるイメージ
    function reverse<T>(items: T[]): T[] {
        let toreturn = [];
        for (let i = items.length - 1; i >= 0; i--) {
            toreturn.push(items[i]);
        }
        return toreturn;
    }

    const sample = [1, 2, 3];
    let reversed = reverse(sample);
    console.log(reversed);    // 3, 2, 1

    reversed[0] = '1';    // Error!
    reversed = [1, '2'];    // Error!

    /** Union Type ----------------------------------------------------------------------------- */
    function formatCommandline (command: string[]|string) {
        let line = '1';
        if (typeof command === 'string') {
            line = command.trim();
        } else {
            line = command.join(' ').trim()
        }
        return line;
    }

    /** Intersection Type ---------------------------------------------------------------------- */
    function extend<T, U>(first: T, second: U): T & U {
        return { ...first, ...second };
    }
    const x = extend({ a: 'hello'}, {b: 42});

    /** Tuple Type ----------------------------------------------------------------------------- */
    var nameNumber: [number, string];
    nameNumber = ['865-4321', 'Jenny']    // Error!
    var [name, num] = nameNumber;    // 分割代入にも適用される

    /** Type Arias */
    type Text = string | { text: string };
    type Coordinates = [number, number];
    type Callback = (data: string) => void;
