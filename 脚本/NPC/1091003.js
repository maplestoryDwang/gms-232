function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
  }
  if (status == 0 && f == 1) {
    var V = "What? You want to make your own weapons and gloves? Seriously... it's tough to do it by yourself if you don't have experience... I'll help you out. I've been a pirate for 20 years, and for 20 years I have made various items for the crew here. It's easy for me.";
    var w = new Array("Make a Knuckler", "Make a Gun", "Make a pair of gloves");
    for (var N = 0; N < w.length; N++) {
      V += "\r\n#L" + N + "# " + w[N] + '#l';
    }
    cm.askMenu(V);
  } else {
    if (status == 1 && f == 1) {
      selectedType = U;
      if (selectedType == 0) {
        var V = "As long as you bring in the materials required, I'll make you a fine Knuckler. Which Knuckler would you like to make?";
        var u = new Array("Leather Arms (Level limit: 15, Pirate)", "Double Tail Knuckler (Level limit: 20, Pirate)", "Norman Grip (Level limit: 25, Pirate)", "Prime Hands (Level limit: 30, Pirate)", "Silver Maiden (Level limit: 35, Pirate)", "Neozard (Level limit: 40, Pirate)", "Fury Claw (Level limit: 50, Pirate)");
        for (var N = 0; N < u.length; N++) {
          V += "\r\n#L" + N + "# " + u[N] + '#l';
        }
        equip = true;
        cm.askMenu(V);
      } else {
        if (selectedType == 1) {
          var V = "As long as you bring in the materials required, I'll make you a fine Gun. Which Gun would you like to make?";
          var Q = new Array("Dellinger Special (Level limit: 15, Pirate)", "The Negotiator (Level limit: 20, Pirate)", "Golden Hook (Level limit: 25, Pirate)", "Cold Mind (Level limit: 30, Pirate)", "Shooting Star (Level limit: 35, Pirate)", "Lunar Shooter (Level limit: 40, Pirate)", "Mr. Rasfelt (Level limit: 50, Pirate)");
          for (var N = 0; N < Q.length; N++) {
            V += "\r\n#L" + N + "# " + Q[N] + '#l';
          }
          equip = true;
          cm.askMenu(V);
        } else {
          if (selectedType == 2) {
            var V = "As long as you bring in the materials required, I'll make you a fine glove. Which glove would you like to make?";
            var m = new Array("Green Lagger Halfglove", "Brown Leather Armour Glove", "Hard Leather Glove", "Yellow Tartis", "Brown Jewelled", "Brown Barbee", "Brown Royce", "Black Schult");
            for (var N = 0; N < m.length; N++) {
              V += "\r\n#L" + N + "# " + m[N] + '#l';
            }
            equip = true;
            cm.askMenu(V);
          }
        }
      }
      if (equip) {
        status++;
      }
    } else {
      if (status == 3 && f == 1) {
        if (equip) {
          selectedItem = U;
          qty = 1;
        } else {
          qty = U;
        }
        if (selectedType == 0) {
          var c = new Array(1482001, 1482002, 1482003, 1482004, 1482005, 1482006, 1482007);
          var B = new Array(4000021, new Array(4011001, 4011000, 4000021, 4003000), new Array(4011000, 4011001, 4003000), new Array(4011000, 4011001, 4000021, 4003000), new Array(4011000, 4011001, 4000021, 4003000), new Array(4011000, 4011001, 4021000, 4000021, 4003000), new Array(4000039, 4011000, 4011001, 4000030, 4000021, 4003000));
          var F = new Array(20, new Array(1, 1, 10, 5), new Array(2, 1, 10), new Array(1, 1, 30, 10), new Array(2, 2, 30, 20), new Array(1, 1, 2, 50, 20), new Array(150, 1, 2, 20, 20, 20));
          var e = new Array(1000, 2000, 5000, 15000, 30000, 50000, 100000);
          var A = new Array(15, 20, 25, 30, 35, 40, 50);
          item = c[selectedItem];
          mats = B[selectedItem];
          matQty = F[selectedItem];
          cost = e[selectedItem];
          levelLimit = A[selectedItem];
        } else {
          if (selectedType == 1) {
            var c = new Array(1492001, 1492002, 1492003, 1492004, 1492005, 1492006, 1492007);
            var B = new Array(new Array(4011000, 4003000, 4003001), new Array(4011000, 4003000, 4003001, 4000021), new Array(4011000, 4003000), new Array(4011001, 4000021, 4003000), new Array(4011006, 4011001, 4000021, 4003000), new Array(4011004, 4011001, 4000021, 4003000), new Array(4011006, 4011004, 4011001, 4000030, 4003000));
            var F = new Array(new Array(1, 5, 1), new Array(1, 10, 5, 10), new Array(2, 10), new Array(2, 10, 10), new Array(10, 2, 5, 10), new Array(1, 2, 10, 20), new Array(1, 2, 4, 30, 30));
            var e = new Array(1000, 2000, 5000, 15000, 30000, 50000, 100000);
            var A = new Array(15, 20, 25, 30, 35, 40, 50);
            item = c[selectedItem];
            mats = B[selectedItem];
            matQty = F[selectedItem];
            cost = e[selectedItem];
            levelLimit = A[selectedItem];
          } else {
            if (selectedType == 2) {
              var c = new Array(1082180, 1082183, 1082186, 1082189, 1082192, 1082195, 1082198, 1082201);
              var B = new Array(new Array(4000021, 4021003), 4000021, new Array(4011000, 4000021), new Array(4021006, 4000021, 4003000), new Array(4011000, 4000021, 4003000), new Array(4000021, 4011000, 4011001, 4003000), new Array(4011000, 4000021, 4000030, 4003000), new Array(4011007, 4021008, 4021007, 4000030, 4003000));
              var F = new Array(new Array(15, 1), 35, new Array(2, 20), new Array(2, 50, 10), new Array(3, 60, 15), new Array(80, 3, 3, 25), new Array(3, 20, 40, 30), new Array(1, 1, 1, 50, 50));
              var e = new Array(1000, 8000, 15000, 25000, 30000, 40000, 50000, 70000);
              var A = new Array(15, 20, 25, 30, 35, 40, 50, 60);
              item = c[selectedItem];
              mats = B[selectedItem];
              matQty = F[selectedItem];
              cost = e[selectedItem];
              levelLimit = A[selectedItem];
            }
          }
        }
        prompt = "Making one #t" + item + "# requires the items listed below. The level limit for this item is " + levelLimit + ", so check and make sure you really need this item before getting it. What do you think? Do you really want one?\r\n";
        if (mats instanceof Array) {
          for (var N = 0; N < mats.length; N++) {
            prompt += "\r\n#i" + mats[N] + "# " + matQty[N] * qty + " #t" + mats[N] + '#';
          }
        } else {
          prompt += "\r\n#i" + mats + "# " + matQty * qty + " #t" + mats + '#';
        }
        if (cost > 0) {
          prompt += "\r\n#i4031138# " + cost * qty + " meso";
        }
        cm.askYesNo(prompt);
      } else {
        if (status == 4 && f == 1) {
          var k = false;
          if (cm.getMeso() < cost * qty) {
            cm.sendOk("I'm afraid you cannot afford my services.");
            cm.dispose();
            return;
          } else {
            if (mats instanceof Array) {
              for (var N = 0; N < mats.length; N++) {
                k = cm.haveItem(mats[N], matQty[N] * qty);
                if (!k) {
                  break;
                }
              }
            } else {
              k = cm.haveItem(mats, matQty * qty);
            }
          }
          if (k == false) {
            cm.sendNext("Check and make sure you have all the necessary items to make this. Also, make sure your Equips inventory has room. I can't give you the item if your inventory is full, you know.");
          } else {
            if (mats instanceof Array) {
              for (var N = 0; N < mats.length; N++) {
                cm.gainItem(mats[N], -matQty[N] * qty);
              }
            } else {
              cm.gainItem(mats, -matQty * qty);
            }
            if (cost > 0) {
              cm.gainMeso(-cost * qty);
            }
            if (item == 4003000) {
              cm.gainItem(4003000, 15 * qty);
            } else {
              cm.gainItem(item, qty);
            }
            cm.sendOk("All done. If you need anything else... Well, I'm not going anywhere.");
          }
          cm.dispose();
        }
      }
    }
  }
}
var status = -1;