var status = -1;
var beauty = 0;
var hair_Colo_new;
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
    return;
  } else if (f == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.askMenu("如果您有#b#t5150052##k或者#b#t5151036##k，就让我来为您打造新的形象吧！下面做出您的选择吧。\r\n#b#L0#美发（使用#b#t5150052#）#l\r\n#L1#染发（使用#b#t5151036#）#l");
      break;
    case 1:
      if (U == 0) {
        var V = cm.getPlayerStat("HAIR");
        hair_Colo_new = [];
        beauty = 1;
        if (cm.getPlayer().getGender() == 0) {
          hair_Colo_new = [30030, 30020, 30000, 30250, 30190, 30150, 30050, 30280, 30240, 30300, 30160];
        } else {
          hair_Colo_new = [31040, 31000, 31150, 31280, 31160, 31120, 31290, 31270, 31030, 31230, 31010];
        }
        for (var w = 0; w < hair_Colo_new.length; w++) {
          hair_Colo_new[w] = hair_Colo_new[w] + V % 10;
        }
        cm.askAvatar("我能把您现在的头发换个全新的发型。您对现在的发型不厌倦吗？只要您有#b#t5150052##k，我就帮您换发型。慢慢挑选您想要的发型吧！", hair_Colo_new, 5150052);
      } else {
        if (U == 1) {
          var N = Math.floor(cm.getPlayerStat("HAIR") / 10) * 10;
          hair_Colo_new = [];
          beauty = 2;
          for (var w = 0; w < 8; w++) {
            hair_Colo_new[w] = N + w;
          }
          cm.askAvatar("我能把您现在的头发换个全新的颜色。您对现在的发色不厌倦吗？只要您有#b#t5151036##k，我就帮您换发色。慢慢挑选您想要的发色吧！", hair_Colo_new, 5151036);
        }
      }
      break;
    case 2:
      if (beauty == 1) {
        if (cm.setAvatar(5150052, hair_Colo_new[U]) == 1) {
          cm.sendOk("好了，让朋友们赞叹您的新发型吧！");
        } else {
          cm.sendOk("嗯……您好像没有#b#t5150052##k啊？不好意思，没有会员卡的话，我不能帮您美发。");
        }
      } else if (cm.setAvatar(5151036, hair_Colo_new[U]) == 1) {
        cm.sendOk("好了，让朋友们赞叹您的新发色吧！");
      } else {
        cm.sendOk("嗯……您好像没有#b#t5151036##k啊？不好意思，没有会员卡的话，我不能帮您染发。");
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