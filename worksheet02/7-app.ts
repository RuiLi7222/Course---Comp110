import { print } from "introcs";
import { Prank } from "./7.1";
import { worstOnes, pranksCommitted } from "./7.2";
export let main = async() => {
    let a = new Prank();
    a.label = "q";
    a.guiltyPeople = ["asd", "wer", "huio", "ers"];
    a.estPrepTime = 678;
    a.officeSuppliesWasted = true;
    let b = new Prank();
    b.label = "w";
    b.guiltyPeople = ["asd", "wer"];
    b.estPrepTime = 89;
    b.officeSuppliesWasted = true;
    let c = new Prank();
    c.label = "e";
    c.guiltyPeople = ["asd", "wer", "huio"];
    c.estPrepTime = 6;
    c.officeSuppliesWasted = true;
    let d = new Prank();
    d.label = "r";
    d.guiltyPeople = ["asd", "wer", "ers"];
    d.estPrepTime = 78;
    d.officeSuppliesWasted = true;
    let e = new Prank();
    e.label = "t";
    e.guiltyPeople = ["asd", "huio", "ers"];
    e.estPrepTime = 68;
    e.officeSuppliesWasted = true;
    let f = new Prank();
    f.label = "y";
    f.guiltyPeople = ["asd", "wer", "huio", "ers", "jik"];
    f.estPrepTime = 67;
    f.officeSuppliesWasted = true;
    print(worstOnes([a, b, c, d, e, f]));
    print(pranksCommitted([a, b, c, d, e, f], "huio"));
};
main();