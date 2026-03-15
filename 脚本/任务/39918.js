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
      cm.sendNormalTalk_Bottom("#face1#这就是燃烧近天峰的使徒之力……", 36, 3004433, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#整座城都雷鸣滚滚，怎么会这样呢，太不可思议了……", 36, 3004433, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#王子殿下！乌云马上就要笼罩这里了！！", 36, 3004437, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#有闪电劈向王宫了！", 36, 3004437, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#咳……总之#h0#，我们会守住这里。", 36, 3004433, true, true);
            } else {
              if (status === v++) {
                cm.askYesNo_Bottom("#face1#现在请到图书馆去吧。我很担心伊黛娜大人。", 36, 3004433);
              } else if (status === v++) {
                cm.forceStartQuest(39918, '');
                cm.OnStartNavigation(410000830, 0, 'north00', 39918);
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
      cm.sendNormalTalk_Bottom("#face0#对抗者大人？", 36, 3004437, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#不好了！", 36, 3004437, true, true);
      } else if (status === v++) {
        cm.forceCompleteQuest(39918);
        cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
        cm.dispose();
      }
    }
  }
}