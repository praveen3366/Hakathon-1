window.onload = function () {
        

    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
          'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses

  
    
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
  
  
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "Catagory-1";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "Catagory-2";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "Catagory-3";
      }
    }
  
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      

    play = function () {
      categories = [
       ["MUG", "TELEPHONE", "CAR", "HORSE", "MOUSE", "DOG", "TABLE", "TANK", "SQUARE", "HOUSE", "MEADOW", "BULL", "TOWEL", "BAG", "BOOK", "PLATE", "PERFUME", "PEN", 
        "BENCH","BLOCK", "ELEPHANT","LAPTOP", "CABLE", "CAN", "SPOON", "HAND", "EAR","DRESS", "BLANKET", "SHOES", "CAT", "SAND", "LAVA", "SHARK"],
        ["DRAWER", "FIGURE","WIPER", "WATER", "SANDWICH", "TRUCK", "DOLL", "GUITAR", "DRUM", "PIANO","PUZZLE", "TIGER", "BEAR","FOLDER", "FILE", "LIST", "CLOCK", "FOX", "BUTTERFLY", "KEYBOARD", "CAMERA", "LENS", "SMARTPHONE", "FISHNET","CLOTH", "TURTLE", "FISH", "BONE"],
        ["GROUND", "SALAD", "BIKE", "PLANE", "TRAIN", "METRO", "SHIP", "PHOTO","BRACELET", "COLLAR","PILLOW", "CAP", "BAND","SWITCH","BROOM", "BIN", "SHEET", "LEAF"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    

  
      hint.onclick = function() {
  
        hints = [
          ["Daily usage", "For communication", "Its for transportation", "It's an Animal","Computer Hardware", "It,s an Animal", "Things will be placed on it", "It as a storage", "It has four sides", "Shelter", "NAture", "Its Animal", "To rub your face", "To carry things", "To write", "A thing used to eat food", "fragrance", "To write a word in paper", 
          "To sit on it","Communication Restricted", "It's an Animal","A system we can carry", "cabel", "type of network", "To feed", "Human Being important things", "Human listen through", "Humans wear", "We use while sleeping", "We wear it while going out", "It,s an Animal", "Its used to build house", "Its a mobile brand", "It,s a fish"],
          ["Another name of table Draw", "Another name of picture","Its a part of car used when rain", "Daily need of Living things", "Its a type of food", "To carry the goods", "Kids love it", "Its a music instrument", "Its a music instrument", "Its a music instrument","To improve the iQlevel", "It's an animal", "It's an animal","Its a storage", 
          "To save the data", "Another name of onebyone", "To maintain panctuality", "It's an animal", "It is an wonderful flies", "A part of Computer hardware", "To capture image", "To view small things to big one", "Communication Device", "To caught fish", "to wear ","sea food", "Strongest things of  human"],
          ["Field to play", "It's a type of food", "Youth transportation", "Transport To travel country to country", "Transport To travel in Inter state", "An another rail service", "Its called as port ","Another name of picture", "A gold mens wear in hands", "A gold mine","We use while sleeping", "Use to cover head", "To tie hair","another name of power on and off",
          "To clean the house", "Its a folder name which used to recycle", "Enter data in Excel____", "Every tree has it"]
      ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
    };
  
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }