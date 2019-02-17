"use strict";

(function() {
    const STUDENTS = [
            "Derek DenHartigh",
            "Will Morrissey",
            "Alex Darmos",
            "Megan Schafer",
            "Marion Luxem",
            "Hannah Barker",
            "Eric Medema",
            "Mike Brameijer",
            "Bob Matyas",
            "Jessa Challa",
            "Dave Gillespie",
            "Jessica Otte",
            "Humberto Flores"
        ];

    const GET_STUDENT = function(showSpliceExample) {
        let index = Math.floor(Math.random() * (STUDENTS.length));
        console.log(STUDENTS.length);
        let student;
        if (!showSpliceExample) {
            return STUDENTS[index];
        } else {
            if (STUDENTS.length > 1) {
                student = STUDENTS.splice(index, 1)[0];
                return student;
            } else {
                console.error("There is only one student left! Refresh the page to start again.");
                return STUDENTS.pop();
            }
            
        }
    }

    // do {
    //     console.log(GET_STUDENT(true));
    //     console.log(`Remaining Students: ${STUDENTS.toString()}`);
    // } while (confirm("Continue?") && STUDENTS.length > 0);

    console.log(GET_STUDENT());
})();