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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs26#当天晚上"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
      cm.forceStartQuest(17910, '');
      cm.forceStartQuest(17911, '');
      cm.forceStartQuest(17912, '');
      cm.forceStartQuest(17913, '');
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectBT.img/dawnveil1/storm", 0, 3000, 0, 0, 0, 4, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder3", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder2", 100);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/thunder", 100);
              cm.sendNormalTalk_Bottom("呃……！探险家大人！这天气怎么这样啊？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你这个笨蛋，这还不明显？暴风来了！你赶紧抓牢了，不要被波浪卷走了！", 37, 9390200, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("(什么狗屁平安送到……！！！等着瞧吧，帕尔巴特！等着瞧吧，南哈特！！！)", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("啊啊啊啊啊！！！！#e船似乎要翻了！#n", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("该死！桅杆断了！只要再走一点就是凯梅尔兹！！喂，年轻人！打起精神来！", 37, 9390200, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b(……昏迷过去了)#k", 57, 0, true, true);
                      } else if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 3000, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.setStandAloneMode(false);
                        cm.dispose();
                        cm.warp(865010200, 0);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;