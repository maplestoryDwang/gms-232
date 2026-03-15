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
      cm.sendNormalTalk_Bottom("我一直在等你来访，啦啦。", 36, 3003658, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("全新的冒险就等同于结识新的缘分。", 36, 3003658, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("冒险岛世界幅员辽阔，这里生活着形形色色的人，各人有各人的苦难。", 36, 3003658, true, true, 1);
        } else {
          if (status === v++) {
            cm.askAcceptDecline_Bottom("如果你不介意，不如先去找找那些需要帮助的村民？", 36, 3003658, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("好，那请稍等片刻。我会从冒险岛世界各地接到的委托中寻找适合啦啦你的委托案。", 36, 3003658, false, true, 1);
            } else if (status === v++) {
              cm.forceStartQuest(36247, '');
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
      cm.sendNormalTalk_Bottom("这些应该就够了，妖精学院艾利涅、金海滩度假村、列娜海峡、秘密森林艾洛丁，你想去哪里看看？只要你乐意，大可以去所有地方都探访一遍。", 36, 3003658, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#（去哪儿好呢？）※可通过画面左侧的电灯泡提示接受。", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("那祝你旅途愉快，啦啦。", 36, 3003658, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36247);
          cm.dispose();
        }
      }
    }
  }
}