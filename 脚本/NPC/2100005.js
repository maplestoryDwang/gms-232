var status = -1;
var beauty = 0;
var card = 0;
var hair_Colo_new;
function action(x, q, P) {
  if (x == 0) {
    cm.dispose();
    return;
  } else if (x == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.askMenu("我是喜欢在发型上追求创新的夏特，玛兹拉的助手。如果你有#b#t5150053##k，我可以给你做头发。\r\n#b#L0#更换发型（使用普通理发券）#l\r\n#L1#染色（使用普通染色卡）#l", 0, 2100005);
      break;
    case 1:
      if (P == 0) {
        var f = cm.getPlayerStat('HAIR');
        hair_Colo_new = [];
        beauty = 1;
        if (cm.getPlayer().getGender() == 0) {
          hair_Colo_new = [30250, 30350, 30270, 30150, 30300, 30600, 30160, 30700, 30720, 30420];
        } else {
          hair_Colo_new = [31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230, 31690, 31210, 31170, 31450];
        }
        for (var Z = 0; Z < hair_Colo_new.length; Z++) {
          hair_Colo_new[Z] = hair_Colo_new[Z] + f % 10;
        }
        hair_Colo_new = cm.filterValidHairs(hair_Colo_new);
        cm.askYesNo("使用#b#t5150053##k可以随机改变发型。您确定要换发型吗？");
      } else {
        if (P == 1) {
          var d = Math.floor(cm.getPlayerStat('HAIR') / 10) * 10;
          hair_Colo_new = [];
          beauty = 2;
          for (var Z = 0; Z < 8; Z++) {
            hair_Colo_new[Z] = d + Z;
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;