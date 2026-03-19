var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  var V = cm.getJob();
  if (V == 2005 || V == 2500 || V == 2510 || V == 2511 || V == 2512) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.sendNormalTalk("虽然这让我轻而易举地进入了，可是花巨金制成的物品居然成了这副样子，看来幻影那家伙可要愤怒了。不过看这里的宝物还是堆积如山，应该不是有人入侵。可以说是运气不错吧。", 3, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("女皇阿莉亚…………这就是幻影绝对不让外人进入这里的理由吧。虽然对其他人来说已经是数百年前的事了，但对于幻影来说就好像发生在昨天一样。", 3, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2159439, "oid=240779431", -567, 118, 5, -617, -517, 0, false, 0, false);
              cm.npc_SetSpecialAction("oid=240779431", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("怎么回事？守护者坏掉还不算，又有入侵者？啊，这让怪盗幻影的面子往哪儿放啊？看来我得好好招待一下客人才行。", 1, 2159439, false, true);
              } else if (status === V++) {
                cm.spawnMobLimit(9300872, 1, -567, 120, 100);
                cm.spawnMobLimit(9300872, 1, -567, 120, 100);
                cm.npc_LeaveField("oid=240779431");
                cm.npc_LeaveField("oid=240779431");
                cm.updateInfoQuest(38054, '');
                cm.forceStartQuest(38054, '');
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.forceStartQuest(38054, "001");
                cm.gainExp(30000);
                cm.forceCompleteQuest(38054);
                cm.dispose();
                cm.warp(915020202, 0, false);
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}