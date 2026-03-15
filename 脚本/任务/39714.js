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
      cm.sendNormalTalk_Bottom("#face2#埃尔文。听说汉斯大人开启空间门后就消失了。你可以追踪到他的去向吗？", 36, 1540451, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#让我来看看……目的地是神秘河。\r\n虽然可以勉强开启次元门，但无法立刻得知里面的情况。", 36, 3004322, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#该不会需要战斗吧？", 36, 3004322, true, true);
        } else {
          if (status === v++) {
            cm.askYesNo_Bottom("#face4##h0#，能帮我一个忙吗？\r\n请你与埃尔文和莉莉同行寻找#r汉斯#k大人。", 36, 1540451);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#传送口打开了。", 36, 3004322, false, true);
            } else if (status === v++) {
              cm.forceStartQuest(39714, '');
              cm.npc_SetSpecialAction("oid=2700210", 'special', 1, 1);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/createPortal", 100);
              cm.dispose();
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}