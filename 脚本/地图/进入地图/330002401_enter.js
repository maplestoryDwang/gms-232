var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.useItem(2210132, false);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("这是去年发生的真实故事. ", 0);
        cm.effect_Voice("Voice2.img/Friends/CH4_00/3", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("那个孩子肯定也不想深夜来到学校. ", 0);
          cm.effect_Voice("Voice2.img/Friends/CH4_00/4", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("但考试前一天, 他把教科书忘在了学校. ", 1);
            cm.effect_Voice("Voice2.img/Friends/CH4_00/5", 100);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呃呃，为什么偏偏把书包忘在了音乐室……好恐怖。", 37, 1530270, false, true);
                } else if (status === V++) {
                  cm.setAmbience("Ambience.img/wind", 100, 60);
                  cm.setInGameDirectionMode(false, true, false);
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