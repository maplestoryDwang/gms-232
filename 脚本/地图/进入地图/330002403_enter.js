var status = -1;
var selectionLog = [];
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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("离开音乐室后, 就听不到那奇怪的声音了. ", 0);
        cm.effect_Voice("Voice2.img/Friends/CH4_00/11", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("虽然很害怕, 但他还是很庆幸拿到了教科书, 可以为第二天的考试做准备了……", 0);
          cm.effect_Voice("Voice2.img/Friends/CH4_00/12", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("就在那个孩子从书包中拿出教科书的瞬间, ", 1);
            cm.effect_Voice("Voice2.img/Friends/CH4_00/13", 100);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_Voice("Voice2.img/Friends/GHOST/3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fs40##fn黑体##r '我警告过你不要走'", 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("书包中女孩血淋淋的手，猛然……！！！", 37, 1530180, false, true);
                    cm.effect_Voice("Voice2.img/Friends/CH4_00/14", 100);
                  } else if (status === V++) {
                    cm.effect_Voice("Voice2.img/Friends/CH2_06/17", 100);
                    cm.dispose();
                    cm.warp(330002404, 0);
                    cm.inGameDirectionEvent_ForcedFlip(0);
                    cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;