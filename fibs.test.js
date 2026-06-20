import { fibsIteration } from "./fibs";

test('It exist ',()=>{
    expect(fibsIteration()).toEqual();
})
test('fibsIteration(5) ',()=>{
    expect(fibsIteration(5)).toEqual([0,1,1,2,3,5]);
})