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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("等等，你要去哪儿，跟踪狂。", 37, 1530130, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.npc_ChangeController(1530130, "oid=36443130", 1, 80, 7, -49, 51, 0, true, false);
                cm.npc_SetSpecialAction("oid=36443130", 'summon', 0, 0);
                cm.npc_SetForceMove("oid=36443130", -1, 400, 120);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我一直都很好奇跟踪狂长得什么样子，现在终于看到啦。给我写信的人，就是你吧？", 37, 1530130, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("不是的，你一定是误会……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("别狡辩了，我都知道。之前在奥尔卡的保管箱里插花的也是你吧？往练习室送便当和饮料的也是你吧？每天如一日地把我的书桌和椅子擦得锃亮的也是你吧？", 37, 1530130, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b（弗朗西斯这家伙，还真是什么都干得出来呢……）#k", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那封信……我知道不是什么威胁信。仔细看看那些晕染开的文字，还是可以看清内容的。", 37, 1530130, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我就不追问你所做的事情了……你愿意听奥尔卡说说吗？", 37, 1530130, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/what");
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(330002212, 1);
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