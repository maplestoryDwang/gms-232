var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.npc_ChangeController(9401116, "oid=200589", -2300, 3344, 15, -2350, -2250, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("杰斯，电闸全部开启了。", 56, 0, 0, 1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("做的好！那现在……像克拉尼亚说的那样，输入指令……我也是工作人员，所以用我的指纹许可后……", 36, 9401071, 1, 1);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.getTopMsgFont("启动自爆方案。将切断所有系统电源。", 3, 20, 20, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(3200);
          } else {
            if (status === V++) {
              cm.getTopMsgFont("请从最近的出口逃出。剩余时间：15分钟。", 3, 20, 20, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(3200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("成了！#h0#，快点离开这里。", 36, 9401071, 0, 1);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/scanner_alert", 100);
                  cm.getTopMsgFont("发生致命错误。请再次验证。", 3, 20, 20, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("啊，#h0#，等一下。我再试一次。", 36, 9401071, 0, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我重新输入了……！这下真的可以出去了……", 36, 9401071, 0, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/scanner_alert", 100);
                          cm.getTopMsgFont("发生致命错误。自爆方案无法自动执行。", 3, 20, 20, 0, 0);
                          cm.getTopMsgFont('请启动手动模式。', 3, 20, 20, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这，这是……", 36, 9401071, 0, 1);
                          } else if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.setStandAloneMode(false);
                            cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                            cm.forceCompleteQuest(64926);
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
        }
      }
    }
  }
}