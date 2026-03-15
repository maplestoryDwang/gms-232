var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(100655, "shopTuto2") > 0) {
        cm.dispose();
        cm.openShop(9062352);
        return;
      }
      cm.sendNormalTalk("你好！\r\n请问……", 4, 9062348, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你喜欢#b#e#i4310303# #t4310303##n#k吗……？", 4, 9062348, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嘻嘻，我可喜欢#b#e#i4310303# #t4310303##n#k啦！", 4, 9062348, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你帮我找来#b#e#i4310303# #t4310303##n#k，我就为你制造#r#e美观实用的物品#n#k！", 4, 9062348, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("以我通过制作戏剧服装磨练出的手艺！\r\n使用棉花糖，咻咻～", 4, 9062348, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("嘻嘻，和旁边的#r#e耶波尼玩小游戏#n#k，可以获得#b#e#i4310303# #t4310303##n#k哦！", 4, 9062348, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("欢迎随时来玩！", 4, 9062348, true, true);
                } else if (status === V++) {
                  cm.setNumberForQuestInfo(100655, "shopTuto2", 1);
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}