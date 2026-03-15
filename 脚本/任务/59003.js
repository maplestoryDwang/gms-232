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
      cm.sendNormalTalk("喂,可爱的人,救救我喵!", 0, 9390467, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("哇!猫居然会说话啊!!!", 2, 9390467, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("喵!!我是会说话的猫阿尔喵!!!\r\n啊,现在重要的不是这个喵。", 0, 9390467, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("现在掉到陷阱里而无法出去喵。\r\n而且我还想撒尿喵。\r\n可不可以救我一下喵。", 0, 9390467, true, true);
          } else {
            if (status === v++) {
              cm.askAcceptDecline("把这个捕兽器摧毁喵。请试着用力连击#e#b[Ctrl]#k#n键喵。大概按几次，捕兽器就会被摧毁了喵。", 0, 9390467);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("在陷阱前连击#e#b[Ctrl]#k#n键是吧?", 3, 9390467, false, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("哦耶！你好像和我一样聪明喵。", 0, 9390467, true, true);
                } else if (status === v++) {
                  cm.forceStartQuest(59003, '');
                  cm.forceStartQuest(56427, '');
                  cm.effect_OnUserEff("Effect/Direction14.img/effect/ShamanBT/ChapterA/29");
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