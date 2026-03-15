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
      cm.sendNormalTalk_Bottom("#face0#您打算怎么做？", 36, 3004481, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo_Bottom("#face0#翼人军又攻过来了。\r\n比起撤退，我们现在要去支援这里#b夜晚的西城墙#k吗？", 36, 3004481);
      } else {
        if (status === v++) {
          cm.sendNextS_Bottom("#face0#好，我先解决西城墙这里的翼人步兵和法师。", 3004435);
        } else {
          if (status === v++) {
            cm.sendNextS_Bottom("#face0#胡克和切奇就负责东城墙吧。", 3004435);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#很好！切奇，走吧！", 36, 3004435, false, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#就这么回去，果然还是有些放心不下的吧？", 36, 3004436, true, true);
              } else if (status === v++) {
                cm.forceStartQuest(39915, '');
                cm.OnStartNavigation(410000920, 0, '', 39915);
                cm.dispose();
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
      cm.sendOk_Bottom("现在这边的问题貌似解决得差不多了。剩下的就交给我们吧！");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
      cm.dispose();
    }
  }
}