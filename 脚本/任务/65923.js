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
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom((cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '，运气太难了。', 36, 9401306, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1##b干得好。只要双脚牢牢站在地面，就能让身体保持稳定，更好地使出力量。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom((cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！你能示范一下吗？", 36, 9401306, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2##b哈哈，好好看着吧。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1##b（给小师弟们示范一下吧。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face1##b（既然这样，那就展示一下招式全开吧。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1##b（打开技能窗，把招式全开技能添加到快捷栏中吧。）", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1##b（可通过快捷键[K]打开技能窗。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else if (status === v++) {
                    cm.forceStartQuest(65923, '');
                    cm.playerMessage(5, "可通过快捷键[K]打开技能窗。");
                    cm.getTopMsgFont("可通过快捷键[K]打开技能窗。", 3, 20, 20, 0, 0);
                    cm.playerMessage(5, "每次升级时可以获得SP，使用SP可以提升技能等级。");
                    cm.getTopMsgFont("每次升级时可以获得SP，使用SP可以提升技能等级。", 3, 20, 20, 0, 0);
                    cm.playerMessage(5, "将技能添加到右下方的快捷栏中，使用起来会更加方便。");
                    cm.getTopMsgFont("将技能添加到右下方的快捷栏中，使用起来会更加方便。", 3, 20, 20, 0, 0);
                    cm.playerMessage(5, "请将[招式全开]技能加入快捷栏，攻击木人桩。");
                    cm.getPlayer().getTopMsgByItem(3801595, "请将[招式全开]技能加入快捷栏，攻击木人桩。");
                    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face1##b使用[招式全开]技能，攻击木人桩吧。", '', 0);
                    cm.gainExp(1000);
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
  } else if (status == v++) {
    cm.dispose();
    cm.warp(875003003, 0, true);
  }
}