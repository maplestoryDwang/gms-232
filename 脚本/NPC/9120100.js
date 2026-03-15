var status = -1;
var beauty = 0;
var hair_Colo_new;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
    return;
  } else {
    status++;
  }
  if (status == 0) {
    cm.askMenu("Welcome to the Showa hair shop. If you have a #b#t5150009##k, or a #b#t5151009##k, allow me to take care of your hairdo. Please choose the one you want. \r\n#L0#Haircut: #i5150009##t5150009##l\r\n#L1#Dye your hair: #i5151009##t5151009##l");
  } else {
    if (status == 1) {
      if (U == 0) {
        var V = cm.getPlayerStat('HAIR');
        hair_Colo_new = [];
        beauty = 1;
        if (cm.getPlayer().getGender() == 0) {
          hair_Colo_new = [30230, 30030, 30260, 30280, 30240, 30290, 30020, 30270, 30340, 30710, 30810];
        } else {
          hair_Colo_new = [31310, 31300, 31050, 31040, 31160, 31100, 31410, 31030, 31790, 31550];
        }
        for (var w = 0; w < hair_Colo_new.length; w++) {
          hair_Colo_new[w] = hair_Colo_new[w] + V % 10;
        }
        cm.setAvatar("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? With #b#t5150009##k, I'll take care of the rest for you. Choose the style of your liking!", hair_Colo_new);
      } else {
        if (U == 1) {
          var N = Math.floor(cm.getPlayerStat("HAIR") / 10) * 10;
          hair_Colo_new = [];
          beauty = 2;
          for (var w = 0; w < 8; w++) {
            hair_Colo_new[w] = N + w;
          }
          cm.setAvatar("I can totally change your haircolor and make it look so good. Why don't you change it up a bit? With #b#t5151009##k, I'll take care of the rest. Choose the color of your liking!", hair_Colo_new);
        }
      }
    } else if (status == 2) {
      if (beauty == 1) {
        if (cm.setAvatar(5150009, hair_Colo_new[U]) == 1) {
          cm.sendOk("Enjoy your new and improved hairstyle!");
        } else {
          cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't give you a haircut without it. I'm sorry...");
        }
      } else if (cm.setAvatar(5151009, hair_Colo_new[U]) == 1) {
        cm.sendOk("Enjoy your new and improved hair colour!");
      } else {
        cm.sendOk("Hmmm...it looks like you don't have our designated coupon...I'm afraid I can't dyle your hair without it. I'm sorry...");
      }
      cm.dispose();
    }
  }
}