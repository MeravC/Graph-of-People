const { Graph, DirectedGraph } = require('@datastructures-js/graph');
let graph = new Graph();
let people = [];


class Person{
    constructor(Name, Address){
        this.Name = Name.FirstName + " " + Name.LastName;
        this.Address = Address.Street + " " + Address.City;
    }
}

class Name{
    constructor(FirstName, LastName){
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}

class Address{
    constructor(Street,City){
        this.Street = Street;
        this.City = City;
    }
}
 
function addPerson(FirstName,LastName,City,Street){
    let name = new Name(FirstName,LastName);
    let address = new Address(Street,City);    
    let p = new Person(name,address); 
    people.push(p);
}

function Init(people){
    for (let index = 0; index < people.length; index++) {
        graph.addVertex('v' + index.toString(), people[index]);

    }
    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people.length; j++) {
            if(people[i].Name == people[j].Name){
                graph.addEdge('v' + i.toString(), 'v' + j.toString());
                
            }
            else if(people[i].Address == people[j].Address){
                graph.addEdge('v' + i.toString(), 'v' + j.toString());
            }
        }
    }
    return graph;
}

function getTraverseDfs(vStart, graph){
    graph.traverseDfs(vStart, (v) => console.log(v.serialize()));
}
addPerson("David","Cohen","Tel Aviv","Ben Yehuda");
addPerson("David","Cohen","Herzliya","Yehuda Halevi");
addPerson("Merav","Corem","Petah Tiqwa","Haim Arlozorov");
addPerson("Ben","Levy","Petah Tiqwa","Haim Arlozorov");
addPerson("Liron","Peleg","Petah Tiqwa","Haim Arlozorov");
console.log("people " + JSON.stringify(people));

Init(people);
getTraverseDfs('v1',graph);



