var status = -1;
var questions = new Array("Which of these items does the Flaming Raccoon NOT drop?", "Which NPC is responsible for transporting travellers from Kerning City to Zipangu, and back?", "Which of the items sold at the Mushroom Shrine increases your attack power?", "Which of these items do the Extras NOT drop?", "Which of these items DO NOT exist??", "What's the name of the vegetable store owner in Showa Town?", "Which of these items DO exist?", "What is the name of the strongest boss in the Mushroom Shrine?", "Which one of these items has a mis-matched class or level description?", "Which of these noodles are NOT being sold by Robo at the Mushroom Shrine?", "Which of these NPCs do NOT stand in front of Showa Movie Theater?");
var answers = new Array(new Array("Raccoon Firewood", "Solid Horn", "Red Brick"), new Array("Peli", "Spinel", 'Poli'), new Array("Takoyaki", "Yakisoba", "Tempura"), new Array("Extra A's Badge", "Extra B's Corset", "Extra C's Necklace"), new Array("Frozen Tuna", "Fan", "Fly Swatter"), new Array("Sami", "Kami", "Umi"), new Array("Cloud Fox's Tooth", "Ghost's Bouquet", "Dark Cloud Fox's Tail"), new Array("Black Crow", "Blue Mushmom", 'Himegami'), new Array("Bamboo Spear - Warrior-only Weapon", "Pico-Pico Hammer - One-handed Sword", "Mystic Cane - Level 51 equip"), new Array("Kinoko Ramen (Pig Skull)", "Kinoko Ramen (Salt)", "Mushroom Miso Ramen"), new Array("Skye", "Furano", "Shinta"));
var correctAnswer = new Array(1, 1, 0, 1, 2, 2, 2, 0, 0, 2, 2);
var questionNum;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.getQuestStatus(8012) == 1 && !cm.haveItem(4031064)) {
      cm.askYesNo("Did you get them all? Are you going to try to answer all of my questions?");
    } else {
      cm.sendOk("Meeeoooowww!");
      cm.dispose();
    }
  } else {
    if (status == 1) {
      var V = cm.haveItem(2020001, 300);
      if (!V) {
        cm.sendOk("What? No！300！THREE. HUNDRED. No less. Hand over more if you want, but I need at least 300. Not all of us can be as big and as fed as you...");
        cm.dispose();
      } else {
        cm.gainItem(2020001, -300);
        cm.sendNext("Good job！Now hold on a sec... Hey look！I got some food here！Help yourselves. Okay, now it's time for me to ask you some questions. I'm sure you're aware of this, but remember, if you're wrong, it's over. It's all or nothing!");
      }
    } else {
      if (status == 7) {
        if (U != correctAnswer.pop()) {
          cm.sendNext("Hmmm...all humans make mistakes anyway！If you want to take another crack at it, then bring me 300 Fried Chicken.");
          cm.dispose();
        } else {
          cm.sendNext("Dang, you answered all the questions right. I may not like humans in general, but I HATE breaking a promise, so, as promised, here's the Orange Marble.");
        }
      } else {
        if (status == 8) {
          cm.gainItem(4031064, 1);
          cm.sendOk("Our business is concluded, thank you very much！You can leave now!");
          cm.dispose();
        } else {
          if (status >= 2 && status <= 6 && f == 1) {
            var w = true;
            if (status > 2) {
              if (U != correctAnswer.pop()) {
                cm.sendNext("Hmmm...all humans make mistakes anyway！If you want to take another crack at it, then bring me 300 Fried Chicken.");
                cm.dispose();
                w = false;
              }
            }
            if (w) {
              questionNum = Math.floor(Math.random() * questions.length);
              if (questionNum != questions.length - 1) {
                var N;
                N = questions[questionNum];
                questions[questionNum] = questions[questions.length - 1];
                questions[questions.length - 1] = N;
                N = answers[questionNum];
                answers[questionNum] = answers[questions.length - 1];
                answers[questions.length - 1] = N;
                N = correctAnswer[questionNum];
                correctAnswer[questionNum] = correctAnswer[questions.length - 1];
                correctAnswer[questions.length - 1] = N;
              }
              var u = questions.pop();
              var Q = answers.pop();
              var m = "Question no." + (status - 1) + ": " + u;
              for (var c = 0; c < Q.length; c++) {
                m += "\r\n#b#L" + c + '#' + Q[c] + "#l#k";
              }
              cm.askMenu(m);
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;