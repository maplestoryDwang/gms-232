var status = -1;
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true);
      cm.setStandAloneMode(true);
      cm.sendNextSNoESC_Bottom("我无意对女性兵戎相向，速速退开吧。");
    } else {
      if (status === V++) {
        cm.sendNextNoESC_Bottom("哼，真是个没有礼貌的毛头小子。你知不知道我是什么人？我可是斋藤道三的女儿，第六天魔王织田信长的正室妻子——浓姬。", 9131005);
      } else {
        if (status === V++) {
          cm.sendNextSNoESC_Bottom("不要让我再次重复这句话，我无意对女性兵戎相向，快点给我退开。");
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("你还挺狂妄的嘛，那就让我来试试看，你的本事是不是和你的态度一样拽上天！", 9131005);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(9131005, 187, 51);
              cm.npc_SetSpecialAction(9131005, "summon");
              cm.npc_SetSpecialAction(9131005, "step");
              cm.inGameDirectionEvent_AskAnswerTime(1080);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/14", "oid=9131005"], [0, 0, -120, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/15", "oid=9131005"], [0, 0, -120, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/16", "oid=9131005"], [0, 0, -120, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/17"], [0, 0, -120]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(1);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(5);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(807100005, 0);
                            cm.setInGameDirectionMode(false, true);
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