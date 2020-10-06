import add from "../src/tutu"

describe("test fichier tutu.js", function() {

    it("add 2 nbr", function() {

        let connard = add(1,1)

        expect(connard).toBe(2);
    });
});
