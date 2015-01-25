'use strict';

angular
  .module( 'globalgamejam2015App' )
  .factory( 'peopleData', function peopleData( Person ) {

    var self = {};

    // Helpers

    self.getRandomPerson = function () {

      // Select a random person and return it.
      var randomInt = Math.floor( Math.random() * self.people.length );
      return self.people[ randomInt ];

    };

    // Init

    ( function init () {

      self.people = [

        new Person( {
          name: 'TABYROSE', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_4_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'JEFFROSE', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_1_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'HAX MGEE', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_2_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'HAX MGEE', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_4_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'HAX MGEE', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_3_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'ALB FUNG', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_1_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'J ZINGER', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_2_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'KRIS NEU', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_5_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'BRYNNLEM', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_6_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'RIKER', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_2_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'ANDYCASK', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_1_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'JESSE P', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_6_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'JADE PK', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_4_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'ROBIN', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_6_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'SORAYA', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_5_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'VEEREN J', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_3_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'SURINDER', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_3_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'NAVEEN', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_3_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'RICKYHYD', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_2_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } ),

        new Person( {
          name: 'JUSTINE', 
          atbSpeed: 10,
          avatarUrl: 'images/dev_5_GGJ2015.png',
          bug: 10,
          csl: 10,
          cln: 10,
          crt: 10, 
          exe: 10,
          hrd: 10, 
          maxHP: 30
        } )

      ];

    } )();

    // Export
    return self;
  
  } );