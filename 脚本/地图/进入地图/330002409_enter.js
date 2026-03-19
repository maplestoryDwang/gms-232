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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530180, "oid=37607822", 860, 20, 3, 810, 910, 1, true, false);
      cm.npc_SetSpecialAction("oid=37607822", "summon", 0, 0);
      cm.npc_ChangeController(1530240, "oid=37607823", 660, 20, 2, 610, 710, 0, true, false);
      cm.npc_SetSpecialAction("oid=37607823", 'summon', 0, 0);
      cm.npc_ChangeController(1530300, "oid=37607824", 600, 20, 2, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=37607824", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=37607825", 540, 20, 2, 490, 590, 0, true, false);
      cm.npc_SetSpecialAction("oid=37607825", "summon", 0, 0);
      cm.npc_ChangeController(1530270, "oid=37607826", 480, 20, 1, 430, 530, 0, true, false);
      cm.npc_SetSpecialAction("oid=37607826", "summon", 0, 0);
      cm.npc_ChangeController(1530280, "oid=37607827", 420, 20, 1, 370, 470, 0, true, false);
      cm.npc_SetSpecialAction("oid=37607827", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=37607828", 320, 20, 1, 270, 370, 0, true, false);
      cm.npc_SetSpecialAction("oid=37607828", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 700, 58);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6048);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#哎呀，吓死我了……能不能不要发出惨叫啊~？", 37, 1530110, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("对，对不起……我太害怕了。", 37, 1530240, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我突然想起来，我好像听到过一个传闻。\r\n据说原来的学校是块墓地，当初动工时未曾获得许可……？", 37, 1530270, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那声音难道是被埋在地下的那些鬼发出的？因为很痛，所以喊着不要踩它们？\r\n呃呃，我再也不敢到旧楼附近了。", 37, 1530310, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("世，世界上哪来的鬼啊……？", 37, 1530110, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("呵呵，信不信随便你。\r\n反正我所说的句句属实！\r\n如果你们不相信，不妨亲自到旧楼看看吧？", 37, 1530180, true, true);
                      } else if (status === V++) {
                        cm.forceStartQuest(32858, '');
                        cm.forceCompleteQuest(32858);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.dispose();
                        cm.warp(330000200, 0);
                        cm.cancelItem(2210132);
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