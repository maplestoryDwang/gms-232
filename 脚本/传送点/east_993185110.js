function enter() {
  cm.openScriptNpc();
}
var status = -1;
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  status++;
  if (cm.getMapId() == 993185110) {
    action1(l, B, x);
  } else {
    if (cm.getMapId() == 993185120) {
      action2(l, B, x);
    } else if (cm.getMapId() == 993185130) {
      action3(l, B, x);
    } else {
      cm.dispose();
    }
  }
}
function action1(l, B, x) {
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
        cm.dispose();
      } else {
        cm.sendNormalTalk_Bottom('这里也有身份牌……', 56, 0, false, true, 1);
      }
    } else {
      if (status === R++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.setStandAloneMode(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === R++) {
          cm.sendNormalTalk_Bottom("#face0#大部队全军覆没，我们也没法期待救援。", 36, 3004854, false, true, 1);
        } else {
          if (status === R++) {
            cm.sendNormalTalk_Bottom("#face0#供应氧气的渠道只有一个。", 36, 3004854, true, true, 1);
          } else {
            if (status === R++) {
              cm.sendNormalTalk_Bottom("#face0#我们甚至没时间讨论该由谁上去。", 36, 3004854, true, true, 1);
            } else {
              if (status === R++) {
                cm.sendNormalTalk_Bottom("#face0#和平时一样，谁抽到红签\r\n谁就出去。", 36, 3004854, true, true, 1);
              } else {
                if (status === R++) {
                  cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                } else if (status === R++) {
                  cm.dispose();
                  cm.warp(993185120, 0, false);
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.setStandAloneMode(false);
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(l, B, x) {
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
        cm.dispose();
      } else {
        cm.sendNormalTalk_Bottom("(果然……是身份牌掉了)", 56, 0, false, true, 1);
      }
    } else {
      if (status === R++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.setStandAloneMode(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === R++) {
          cm.sendNormalTalk_Bottom("#face0#休麦，作战期间别胡乱多愁善感的。", 36, 3004854, false, true, 1);
        } else {
          if (status === R++) {
            cm.sendNormalTalk_Bottom("#face0#没时间了。快穿戴装备。", 36, 3004854, true, true, 1);
          } else {
            if (status === R++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === R++) {
                cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Sellas/hands1/skeleton", "animation", '', '0'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                cm.sendNormalTalk_Bottom("#face0#(不要啊……！！！)", 36, 3004854, false, true, 1);
              } else {
                if (status === R++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else if (status === R++) {
                  cm.fieldEffect_取消复合图片动画('0', 0, 0);
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.dispose();
                  cm.warp(993185130, 0, false);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.setStandAloneMode(false);
                }
              }
            }
          }
        }
      }
    }
  }
}
function action3(l, B, x) {
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont('地图剩余怪物：' + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
        cm.dispose();
      } else {
        cm.sendNormalTalk_Bottom("(这个……好像是最后一块身份牌。)", 56, 0, false, true, 1);
      }
    } else {
      if (status === R++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.setStandAloneMode(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === R++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
          cm.sendNormalTalk_Bottom("#face0#呼叫总部，请回答。这里是……海蜇号……作战……", 36, 3004854, false, true, 1);
        } else {
          if (status === R++) {
            cm.sendNormalTalk_Bottom("#face0#行动是……（嗞嗞）", 36, 3004854, true, true, 1);
          } else if (status === R++) {
            cm.dispose();
            cm.warp(993185015, 0, false);
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.setStandAloneMode(false);
          }
        }
      }
    }
  }
}
function randomNum(l, B) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * l + 1, 10);
    case 2:
      return parseInt(Math.random() * (B - l + 1) + l, 10);
    default:
      return 0;
  }
}