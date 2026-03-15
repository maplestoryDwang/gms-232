var status = -1;
var beauty = 0;
var card = 0;
var hair_Colo_new;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(H, h, n) {
  if (H == 0) {
    cm.dispose();
    return;
  } else if (H == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.askMenu("如果您有#b#t5150053##k或者#b#t5151035##k，就让我来为您打造新的形象吧！下面做出您的选择吧。\r\n#b#L0#美发（使用#b#t5150053#）#l\r\n#L1#染发（使用#b#t5151035#）#l");
      break;
    case 1:
      if (n == 0) {
        var W = cm.getPlayerStat("HAIR");
        hair_Colo_new = [];
        beauty = 1;
        if (cm.getPlayer().getGender() == 0) {
          hair_Colo_new = [30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160, 30770, 30620, 30550, 30520];
        } else {
          hair_Colo_new = [31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010, 31520, 31440, 31750, 31620];
        }
        for (var C = 0; C < hair_Colo_new.length; C++) {
          hair_Colo_new[C] = hair_Colo_new[C] + W % 10;
        }
        hair_Colo_new = cm.filterValidHairs(hair_Colo_new);
        cm.askYesNo("使用#b#t5150053##k可以随机改变发型。您确定要换发型吗？");
      } else {
        if (n == 1) {
          var u = Math.floor(cm.getPlayerStat('HAIR') / 10) * 10;
          hair_Colo_new = [];
          beauty = 2;
          for (var C = 0; C < 8; C++) {
            hair_Colo_new[C] = u + C;
          }
          hair_Colo_new = cm.filterValidHairs(hair_Colo_new);
          cm.askYesNo("使用#b#t5151035##k可以随机改变发色。您确定要换发色吗？");
        }
      }
      break;
    case 2:
      if (beauty == 1) {
        if (cm.setRandomAvatar(5150053, hair_Colo_new) == 1) {
          cm.sendOk("好了，让朋友们赞叹您的新发型吧！");
          card = 1;
        } else {
          cm.askYesNo("嗯……您好像没有#b#t5150053##k啊？是否消费480点券直接美发？");
        }
      } else if (cm.setRandomAvatar(5151035, hair_Colo_new) == 1) {
        cm.sendOk("好了，让朋友们赞叹您的新发色吧！");
        card = 1;
      } else {
        cm.askYesNo("嗯……您好像没有#b#t5151035##k啊？是否消费480点券直接染发？");
      }
      break;
    case 3:
      if (card == 0) {
        if (cm.getPlayer().getCSPoints(1) >= 480) {
          if (cm.setRandomAvatar(hair_Colo_new) == 1) {
            cm.getPlayer().modifyCSPoints(1, -480);
            if (beauty == 1) {
              cm.sendOk("好了，让朋友们赞叹您的新发型吧！");
            } else {
              cm.sendOk("好了，让朋友们赞叹您的新发色吧！");
            }
          }
        }
      }
      cm.dispose();
      break;
    default:
      cm.dispose();
      break;
  }
}