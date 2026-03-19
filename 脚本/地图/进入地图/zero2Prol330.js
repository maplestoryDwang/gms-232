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
      cm.npc_ChangeController(2411017, "oid=24143", 540, 260, 16, 490, 590, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2411011, "oid=2253624", 910, 222, 6, 860, 960, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2253624", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
      cm.gainSkillBuff(100001263);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……这里就是那条龙所在的洞穴吗？龙呢？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("也许在里边……", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.gainSkillBuff(100001263);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                cm.sendNormalTalk("#face6#那，那就是#p2411011#？！塔塔曼说得果然没错！长得果然非常凶暴！这种东西竟然拿着圣物？！可恶，没办法了，只能#r战斗#k了！", 41, 2400005, false, true);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=2253624");
                cm.spawnMobLimit(9300749, 1, 910, 230, 100);
                cm.updateInfoQuest(40055, '');
                cm.forceStartQuest(40055, '');
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
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