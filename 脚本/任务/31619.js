var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else if (status == v++) {
    cm.forceStartQuest(31619, '');
    cm.dispose();
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("正在识别使用者……", 0, 3001012, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("使用者识别，完成。准备验证使用者。请确保可以采集到脸部形象。", 0, 3001012, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("正在认证使用者……", 0, 3001012, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("哔哔……两个粉色辫子，使用者：爆莉萌天使。认证完成。准备发射。", 0, 3001012, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo("完成发射准备。最后一次发射的坐标是319, 906。要设置新坐标吗？", 0, 3001012);
            } else {
              if (status === v++) {
                cm.askText("请输入新坐标。\r\n#b( 坐标输入格式: XXX,YYY )#k\r\n\r\n#b(请输入3个喜爱的数字，3个讨厌的数字。)#k", '', 3001012, 0, 7, 0);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("设置好的新坐标：" + cm.getText() + "\r\n向该坐标发射\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 64,686", 0, 3001012, false, true);
                } else {
                  if (status === v++) {
                    cm.npc_SetSpecialAction("oid=48722", "launch", 0, 0);
                    cm.playerMessage(-1, "319，90向坐标发射！");
                    cm.playerMessage(-1, "由于连续发射，炮身已经融化，无法继续发射。");
                    cm.sendNormalTalk("吼吼吼。告诉#b#p3001000##k，我已经#r重新向正确坐标发射#k，让他不要担心。", 2, 3001012, true, true);
                  } else if (status === v++) {
                    cm.forceCompleteQuest(31619);
                    cm.gainExp(64686);
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
}