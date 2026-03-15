var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = cm.getNumberFromQuestInfo(33961, "33947");
  var w = cm.getNumberFromQuestInfo(33961, '33948');
  var N = cm.getNumberFromQuestInfo(33961, "33949");
  if (V == 1 && w == 1 && N == 1) {
    action2(f, W, U);
  } else {
    action1(f, W, U);
  }
}
function action1(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var w = "那，你要去见谁呢？";
      if (cm.getNumberFromQuestInfo(33961, '33947') == 0) {
        w += "\r\n#b#L0#精灵之王双弩精灵#l";
      }
      if (cm.getNumberFromQuestInfo(33961, "33948") == 0) {
        w += "\r\n#b#L1#怪盗幻影#l";
      }
      if (cm.getNumberFromQuestInfo(33961, "33949") == 0) {
        w += "\r\n#b#L2#光之魔法师夜光法师";
      }
      w += "\r\n\r\n#L3##k考虑片刻。#l\r\n#L4##k前往联盟会场。#l";
      cm.askMenu(w, -123, 1540822);
    } else {
      if (status > 0) {
        switch (selectionLog[1]) {
          case 0:
            精灵之王双弩精灵(f, W, U, V);
            break;
          case 1:
            怪盗幻影(f, W, U, V);
            break;
          case 2:
            光之魔法师夜光法师(f, W, U, V);
            break;
          case 4:
            cm.dispose();
            cm.warp(913050010);
            break;
          default:
            cm.dispose();
        }
      } else {
        cm.dispose();
      }
    }
  }
}
function 精灵之王双弩精灵(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk_Bottom("想要见双弩精灵就得前往精灵村庄#b埃欧雷#k了，\r\n那里距此地不远，用不了多久。\r\n那我们就出发了！", 37, 1540822, false, true);
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 198, 800);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(350150100, 0, true);
            cm.setInGameDirectionMode(false, true, false);
            cm.npc_LeaveField("oid=286211984");
            cm.npc_LeaveField("oid=286211984");
          }
        }
      }
    }
  }
}
function 怪盗幻影(f, W, U, V) {
  if (status === V++) {
    cm.askYesNo_Bottom("是要去见#b幻影#k吗？", 36, 1540822);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("想要见幻影，唯一的线索就在#b玛加提亚#k。", 37, 1540822, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("最近有人发来了要在玛加提亚#b偷走宝石的预告函#k。", 37, 1540822, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("半天左右就能到玛加提亚了，\r\n那我们就出发前往玛加提亚了！", 37, 1540822, true, true);
        } else {
          if (status === V++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
              cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 198, 800);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(350150200, 0, true);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=286307249");
                  cm.npc_LeaveField("oid=286307249");
                }
              }
            }
          }
        }
      }
    }
  }
}
function 光之魔法师夜光法师(f, W, U, V) {
  if (status === V++) {
    cm.askYesNo_Bottom("是要去见#b夜光法师#k吗？", 36, 1540822);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("想要见夜光法师，就得去魔法密林，\r\n那我们就出发了！", 37, 1540822, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
          cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 198, 800);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(350150300, 0, true);
              cm.setInGameDirectionMode(false, true, false);
            }
          }
        }
      }
    }
  }
}
function action2(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo_Bottom("该见的人都已经见过了，要回到#b圣地#k吗？", 36, 1540822);
      cm.forceStartQuest(33958, '');
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我知道了，\r\n那就回圣地。", 37, 1540822, false, true);
      } else {
        if (status === V++) {
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(true, false, true);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 198, 800);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(350150400, 0, true);
                cm.setInGameDirectionMode(false, true, false);
                cm.npc_LeaveField("oid=286469001");
                cm.npc_LeaveField("oid=286469001");
              }
            }
          }
        }
      }
    }
  }
}