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
      cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(5, 256, 0, 0, 0, 0);
      cm.setMobImage("SoundEff.img/PL_AfterLand/clear_night", 200);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400311, "oid=22467576", 0, -360, 7, -50, 50, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22467576", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#fs40#嗷", 5, 9400311, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("Map/EffectPL.img/Afterland/yellow");
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=22467576");
            cm.npc_LeaveField("oid=22467576");
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b咦……这种空虚感是怎么回事……我这么容易就保卫了和平吗……", 3, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b我居然无意识地有了这样的想法……咦？口袋里有什么……", 3, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b哦，这不是钥匙嘛。这把钥匙怎么……。不管怎样，我得确认一下是否有适合开启巨门的钥匙。", 3, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.forceCompleteQuest(63105);
                      cm.updateInfoQuest(63105, "keyOk=1");
                      var O = cm.addNumberForQuestInfo(63099, "keyCount", 1);
                      cm.getPlayer().getTopMsgByItem(4036001, "获得了可以开启巨门的钥匙。(" + O + "/12)");
                      cm.gainItem(4036007, 1);
                      cm.dispose();
                      cm.warp(867113400, 0, false);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;