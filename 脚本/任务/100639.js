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
      cm.sendNormalTalk("#b#h0#！#k你过得好吗？\r\n觉醒山开放挺长时间了。\r\n你有在好好修炼#r#e<觉醒秘籍>#n#k吗？", 4, 9062318, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("这是专门为没跟上修炼速度的人准备的。\r\n\r\n#fs16##e#r<觉醒秘籍>辅助修炼！", 4, 9062318, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("这是为目前还不能学习#b#e天空的秘籍#n#k的人设计的额外修炼。", 4, 9062318, true, true);
        } else {
          if (status === v++) {
            cm.updateInfoQuest(501094, "start=1;shop6=1;mapTuto=2;trainigTuto=1;trainigTuto2=1;shop0=1");
            cm.askMenu("#e#b#h0##k#n，\r\n即使累一点，只要加倍努力，一定能赶上其他人。\r\n\r\n#L1# #e#r请帮助我进行辅助修炼。#k#n#n#l\r\n#L2# 请给我介绍一下辅助修炼。#n#l", 4, 9062318);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("你今天还没修炼#b#e<觉醒秘籍>#n#k！\r\n得先完成基本的修炼，才能追加进行#r#e辅助修炼#n#k吧？", 4, 9062318, false, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("那你先去修炼#b#e<觉醒秘籍>#n#k再来吧。", 4, 9062318, true, true);
              } else if (status === v++) {
                cm.openUI(1271);
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}