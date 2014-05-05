/* global describe, it */




(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });



     describe('Lets check Hermiones Wand Type', function () {
        describe('It should equal a string', function () {
            it('should run here few assertions', function () {
                var hermioneGrainger = new Wizard("holly", "everything", "hogwarts", 100);




            	expect(hermioneGrainger.wandType).to.equal('holly');

                expect(hermioneGrainger.alliegance).to.equal('hogwarts');


            });
        });
    });

   describe('Lets check Hermiones life', function () {
        describe('It should be above 90', function () {
            it('should run here few assertions', function () {
                var hermioneGrainger = new Wizard("holly", "everything", "hogwarts", 100);



            	expect(hermioneGrainger.wizLife).to.be.above(90);
            	


            });
        });
    });

       describe('Who is Hermione loyal to?', function () {
        describe('It should equal a string', function () {
            it('should be Hogwarts', function () {
                var hermioneGrainger = new Wizard("holly", "everything", "hogwarts", 100);





                expect(hermioneGrainger.alliegance).to.equal('hogwarts');


            });
        });
    });

   




})();


