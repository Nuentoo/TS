type InnerFn = (val2: any) => boolean | void;

interface ExceptFn {
    (val1: any): {
        toBe: InnerFn;
        notToBe: InnerFn;
    }
}

var expect: ExceptFn = (val1) => ({
    toBe: (val2) => {
        if (val1 === val2) {
            return true;
        } else {
            throw new Error ('Not Equal');
        }
    },
    notToBe: (val2) => {
        if (val1 !== val2) {
            return true;
        } else {
            throw new Error ('Equal');
        }
    }
});

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */