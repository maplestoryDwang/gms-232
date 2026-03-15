var status = 0;
var beauty = 0;
var mhair = Array(30000, 30120, 30140, 30190, 30210, 30360, 30220, 30370, 30400, 30440, 30790, 30800, 30810, 30770, 30760);
var fhair = Array(31030, 31050, 31000, 31070, 31100, 31120, 31130, 31250, 31340, 31680, 31350, 31400, 31650, 31550, 31800);
var hairnew = Array();
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askMenu("I'm the head of Showa hair salon. If you have a #b#t5150009##k or a #b#t5151009##k allow me to take care of your hairdo. Please choose the one you want.\r\n#L0#I want to buy a coupon!#l\r\n#L1#Haircut: #i5150009##t5150009##l\r\n#L2#Dye your hair: #i5151009##t5151009##l");
    } else {
      if (status == 1) {
        if (U == 0) {
          beauty = 0;
          cm.askMenu("Which coupon would you like to buy?\r\n#L0#Haircut for 1000000 mesos: #i5150009##t5150009##l\r\n#L1#Dye your hair for 1000000 mesos: #i5151009##t5151009##l");
        } else {
          if (U == 1) {
            beauty = 1;
            hairnew = Array();
            if (cm.getPlayer().getGender() == 0) {
              for (var V = 0; V < mhair.length; V++) {
                hairnew.push(mhair[V] + parseInt(cm.getPlayer().getHair() % 10));
              }
            }
            if (cm.getPlayer().getGender() == 1) {
              for (var V = 0; V < fhair.length; V++) {
                hairnew.push(fhair[V] + parseInt(cm.getPlayer().getHair() % 10));
              }
            }
            cm.sendStyle("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? If you have #b#t5150009##k I'll change it for you. Choose the one to your liking~.", hairnew);
          } else {
            if (U == 2) {
              beauty = 2;
              haircolor = Array();
              var w = parseInt(cm.getPlayer().getHair() / 10) * 10;
              for (var V = 0; V < 8; V++) {
                haircolor.push(w + V);
              }
              cm.sendStyle("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b#t51051009##k I'll change it for you. Choose the one to your liking.", haircolor);
            }
          }
        }
      } else {
        if (status == 2) {
          cm.dispose();
          if (beauty == 1) {
            if (cm.haveItem(5150009)) {
              cm.gainItem(5150009, -1);
              cm.setHair(hairnew[U]);
              cm.sendOk("Enjoy your new and improved hairstyle!");
            } else {
              cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
            }
          }
          if (beauty == 2) {
            if (cm.haveItem(5151009)) {
              cm.gainItem(5151009, -1);
              cm.setHair(haircolor[U]);
              cm.sendOk("Enjoy your new and improved haircolor!");
            } else {
              cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dye your hair without it. I'm sorry...");
            }
          }
          if (beauty == 0) {
            if (U == 0 && cm.getMeso() >= 1000000) {
              cm.gainMeso(-1000000);
              cm.gainItem(5150009, 1);
              cm.sendOk("Enjoy!");
            } else if (U == 1 && cm.getMeso() >= 1000000) {
              cm.gainMeso(-1000000);
              cm.gainItem(5151009, 1);
              cm.sendOk('Enjoy!');
            } else {
              cm.sendOk("You don't have enough mesos to buy a coupon!");
            }
          }
        }
      }
    }
  }
}