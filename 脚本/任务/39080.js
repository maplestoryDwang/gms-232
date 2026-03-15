var status = -1;
var selectionLog = [];
function start(r, v, n) {
  if (status == 0 && r == 0) {
    cm.dispose();
    return;
  }
  if (r == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = n;
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status == H++) {
      cm.sendNormalTalk("#h0#！我感觉到一股比从前更强大的气息。", 0, 3003490, false, true, 0);
    } else {
      if (status === H++) {
        cm.sendNormalTalk("安哈因之柱还撑得住吗？", 2, 3003490, true, true, 0);
      } else {
        if (status === H++) {
          cm.sendNormalTalk("嗯，没问题，更何况现在有更多勇士来帮忙，总感觉他的复活意志已经被打消了不少。", 0, 3003490, true, true, 0);
        } else {
          if (status === H++) {
            cm.sendNormalTalk("（其实他的复活早已注定……可有必要将这件事说出去，长他人志气，灭自己威风吗……）", 2, 3003490, true, true, 0);
          } else {
            if (status === H++) {
              cm.sendNormalTalk("所以，#h0#，你有空的时候就时不时来帮个忙吧，距离他复活的日子已经不远了！", 0, 3003490, true, true, 0);
            } else {
              if (status === H++) {
                cm.sendNormalTalk("（这点苦没什么，\r\n有时候怀抱希望比获得结果更重要……）\r\n#r#e*每天通关1次安哈因防御时，即便不参加也可以完成2次。#n#k", 2, 3003490, true, true, 0);
              } else if (status === H++) {
                cm.forceCompleteQuest(39080);
                cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function stage0(r, v, n) {
  if (status == 0 && r == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = n;
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status == H++) {
      cm.askYesNo("");
    } else if (status == H++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(r, v, n) {
  if (status == 0 && r == 0) {
    cm.dispose();
    return;
  }
  if (r == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = n;
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status == H++) {
      var b = cm.getQuest();
      cm.askYesNo("");
    } else if (status == H++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}