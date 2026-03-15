var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;
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
    var V = "Um... Hi, I'm Mr. Thunder's apprentice. He's getting up there in age, so he handles most of the heavy-duty work while I handle some of the lighter jobs. What can I do for you?#b";
    var w = new Array("Make a glove", "Upgrade a glove", "Create materials");
    for (var N = 0; N < w.length; N++) {
      V += "\r\n#L" + N + "# " + w[N] + '#l';
    }
    cm.askMenu(V);
  } else {
    if (status == 1 && f == 1) {
      selectedType = U;
      if (selectedType == 0) {
        var V = "Okay, so which glove do you want me to make?#b";
        var u = new Array("Juno#k - Warrior Lv. 10#b", "Steel Fingerless Gloves#k - Warrior Lv. 15#b", "Venon#k - Warrior Lv. 20#b", "White Fingerless Gloves#k - Warrior Lv. 25#b", "Bronze Missel#k - Warrior Lv. 30#b", "Steel Briggon#k - Warrior Lv. 35#b", "Iron Knuckle#k - Warrior Lv. 40#b", "Steel Brist#k - Warrior Lv. 50#b", "Bronze Clench#k - Warrior Lv. 60#b");
        for (var N = 0; N < u.length; N++) {
          V += "\r\n#L" + N + "# " + u[N] + '#l';
        }
        cm.askMenu(V);
        equip = true;
      } else {
        if (selectedType == 1) {
          var V = "Upgrade a glove? That shouldn't be too difficult. Which did you have in mind?#b";
          var Q = new Array("Steel Missel#k - Warrior Lv. 30#b", "Orihalcon Missel#k - Warrior Lv. 30#b", "Yellow Briggon#k - Warrior Lv. 35#b", "Dark Briggon#k - Warrior Lv. 35#b", "Adamantium Knuckle#k - Warrior Lv. 40#b", "Dark Knuckle#k - Warrior Lv. 40#b", "Mithril Brist#k - Warrior Lv. 50#b", "Gold Brist#k - Warrior Lv. 50#b", "Sapphire Clench#k - Warrior Lv. 60#b", "Dark Clench#k - Warrior Lv. 60#b");
          for (var N = 0; N < Q.length; N++) {
            V += "\r\n#L" + N + "# " + Q[N] + '#l';
          }
          cm.askMenu(V);
          equip = true;
        } else {
          if (selectedType == 2) {
            var V = "Materials? I know of a few materials that I can make for you...#b";
            var m = new Array("Make Processed Wood with Tree Branch", "Make Processed Wood with Firewood", "Make Screws (packs of 15)");
            for (var N = 0; N < m.length; N++) {
              V += "\r\n#L" + N + "# " + m[N] + '#l';
            }
            cm.askMenu(V);
            equip = false;
          }
        }
      }
      if (equip) {
        status++;
      }
    } else {
      if (status == 2 && f == 1) {
        selectedItem = U;
        if (selectedType == 2) {
          var c = new Array(4003001, 4003001, 4003000);
          var B = new Array(4000003, 4000018, new Array(4011000, 4011001));
          var F = new Array(10, 5, new Array(1, 1));
          var e = new Array(0, 0, 0);
          item = c[selectedItem];
          mats = B[selectedItem];
          matQty = F[selectedItem];
          cost = e[selectedItem];
        }
        var A = "So, you want me to make some #t" + item + "#s? In that case, how many do you want me to make?";
        cm.askNumber(A, 1, 1, 100);
      } else {
        if (status == 3 && f == 1) {
          if (equip) {
            selectedItem = U;
            qty = 1;
          } else {
            qty = U;
          }
          if (selectedType == 0) {
            var c = new Array(1082003, 1082000, 1082004, 1082001, 1082007, 1082008, 1082023, 1082009, 1082059);
            var B = new Array(new Array(4000021, 4011001), 4011001, new Array(4000021, 4011000), 4011001, new Array(4011000, 4011001, 4003000), new Array(4000021, 4011001, 4003000), new Array(4000021, 4011001, 4003000), new Array(4011001, 4021007, 4000030, 4003000), new Array(4011007, 4011000, 4011006, 4000030, 4003000));
            var F = new Array(new Array(15, 1), 2, new Array(40, 2), 2, new Array(3, 2, 15), new Array(30, 4, 15), new Array(50, 5, 40), new Array(3, 2, 30, 45), new Array(1, 8, 2, 50, 50));
            var e = new Array(1000, 2000, 5000, 10000, 20000, 30000, 40000, 50000, 70000);
            item = c[selectedItem];
            mats = B[selectedItem];
            matQty = F[selectedItem];
            cost = e[selectedItem];
          } else {
            if (selectedType == 1) {
              var c = new Array(1082005, 1082006, 1082035, 1082036, 1082024, 1082025, 1082010, 1082011, 1082060, 1082061);
              var B = new Array(new Array(1082007, 4011001), new Array(1082007, 4011005), new Array(1082008, 4021006), new Array(1082008, 4021008), new Array(1082023, 4011003), new Array(1082023, 4021008), new Array(1082009, 4011002), new Array(1082009, 4011006), new Array(1082059, 4011002, 4021005), new Array(1082059, 4021007, 4021008));
              var F = new Array(new Array(1, 1), new Array(1, 2), new Array(1, 3), new Array(1, 1), new Array(1, 4), new Array(1, 2), new Array(1, 5), new Array(1, 4), new Array(1, 3, 5), new Array(1, 2, 2));
              var e = new Array(20000, 25000, 30000, 40000, 45000, 50000, 55000, 60000, 70000, 80000);
              item = c[selectedItem];
              mats = B[selectedItem];
              matQty = F[selectedItem];
              cost = e[selectedItem];
            }
          }
          var A = "You want me to make ";
          if (qty == 1) {
            A += "a #t" + item + '#?';
          } else {
            A += qty + " #t" + item + '#?';
          }
          A += " In that case, I'm going to need specific items from you in order to make it. Make sure you have room in your inventory, though!#b";
          if (mats instanceof Array) {
            for (var N = 0; N < mats.length; N++) {
              A += "\r\n#i" + mats[N] + "# " + matQty[N] * qty + " #t" + mats[N] + '#';
            }
          } else {
            A += "\r\n#i" + mats + "# " + matQty * qty + " #t" + mats + '#';
          }
          if (cost > 0) {
            A += "\r\n#i4031138# " + cost * qty + " meso";
          }
          cm.askYesNo(A);
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
            if (!k) {
              cm.sendOk("I'm still an apprentice, I don't know if I can substitute other items in yet... Can you please bring what the recipe calls for?");
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
              cm.sendOk("Did that come out right? Come by me again if you have anything for me to practice on.");
            }
            cm.dispose();
          }
        }
      }
    }
  }
}