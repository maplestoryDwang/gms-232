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
      cm.onSetBackEffectSchedule("bh_541_1", 1, 0, 0, 0, 10000, 0);
      cm.onSetBackEffectSchedule("bh_541_1", 1, 1, 0, 0, 10000, 4000);
      cm.onSetBackEffectSchedule("bh_541_2", 1, 0, 0, 0, 10000, 0);
      cm.onSetBackEffectSchedule("bh_541_2", 1, 1, 0, 0, 10000, 4000);
      cm.onSetBackEffectSchedule('bh_541_3', 1, 1, 0, 0, 10000, 0);
      cm.onSetBackEffectSchedule("bh_541_3", 1, 0, 0, 0, 10000, 4000);
      cm.onSetBackEffectSchedule("bh_541_4", 1, 0, 0, 0, 6000, 0);
      cm.onSetBackEffectSchedule('bh_541_4', 1, 1, 0, 0, 6000, 3000);
      cm.onSetBackEffectSchedule("bh_541_5", 1, 0, 0, 0, 10000, 0);
      cm.onSetBackEffectSchedule("bh_541_5", 1, 1, 0, 0, 10000, 4000);
      cm.onSetBackEffectSchedule('bh_541_6', 1, 0, 0, 0, 10000, 0);
      cm.onSetBackEffectSchedule("bh_541_6", 1, 1, 0, 0, 10000, 4000);
      cm.地图特效_开关落脚点_Schedule([103], [0], 9000, 0);
      cm.地图特效_开关落脚点_Schedule([103], [1], 9000, 8000);
      cm.地图特效_开关落脚点_Schedule([104], [0], 9000, 0);
      cm.地图特效_开关落脚点_Schedule([104], [1], 9000, 8000);
      cm.地图特效_开关落脚点_Schedule([105], [0], 10000, 0);
      cm.地图特效_开关落脚点_Schedule([105], [1], 10000, 7000);
      cm.地图特效_开关落脚点_Schedule([106], [0], 13000, 0);
      cm.地图特效_开关落脚点_Schedule([106], [1], 13000, 12000);
      cm.地图特效_开关落脚点_Schedule([107], [0], 8000, 0);
      cm.地图特效_开关落脚点_Schedule([107], [1], 8000, 4000);
      cm.地图特效_开关落脚点_Schedule([108], [0], 11000, 0);
      cm.地图特效_开关落脚点_Schedule([108], [1], 11000, 9000);
      cm.地图特效_开关落脚点_Schedule([114], [0], 9000, 0);
      cm.地图特效_开关落脚点_Schedule([114], [1], 9000, 8000);
      cm.地图特效_开关落脚点_Schedule([115], [0], 13000, 0);
      cm.地图特效_开关落脚点_Schedule([115], [1], 13000, 11000);
      cm.地图特效_开关落脚点_Schedule([116], [0], 10000, 0);
      cm.地图特效_开关落脚点_Schedule([116], [1], 10000, 7000);
      cm.地图特效_开关落脚点_Schedule([118], [0], 6000, 0);
      cm.地图特效_开关落脚点_Schedule([118], [1], 6000, 4000);
      cm.地图特效_开关落脚点_Schedule([119], [0], 8000, 0);
      cm.地图特效_开关落脚点_Schedule([119], [1], 8000, 4000);
      cm.地图特效_开关落脚点_Schedule([120], [0], 11000, 0);
      cm.地图特效_开关落脚点_Schedule([120], [1], 11000, 9000);
      cm.地图特效_开关落脚点([145, 188, 188, 145], [1, 1, 1, 1]);
      cm.地图特效_开关落脚点([164, 165, 166, 167, 170], [1, 1, 1, 1, 1]);
      cm.onSetBackEffect('bh_541_7', 1, 0, 0, 0);
      cm.onSetBackEffect("bh_541_8", 1, 0, 0, 0);
      cm.dynamicObjMoveSchedule(-4432, 1997, -4232, 2197, -4432, 1997, 1, 12, 12, "bh_541_1", 6000, 0);
      cm.dynamicObjMoveSchedule(-4232, 2197, -4432, 1997, -4232, 2197, 1, -12, -12, "bh_541_1", 6000, 3000);
      cm.dynamicObjMoveSchedule(-4417, 1967, -4217, 1767, -4417, 1967, 1, 15, -15, "bh_541_2", 7000, 0);
      cm.dynamicObjMoveSchedule(-4217, 1767, -4417, 1967, -4217, 1767, 1, -15, 15, "bh_541_2", 7000, 3500);
      cm.dynamicObjMoveSchedule(-4165, 1715, -4415, 1465, -4165, 1715, 1, -12, -12, "bh_541_3", 7000, 0);
      cm.dynamicObjMoveSchedule(-4415, 1465, -4165, 1715, -4415, 1465, 1, 12, 12, 'bh_541_3', 7000, 3500);
      cm.npc_ChangeController(1540711, 'oid=40171', -2176, 1637, 149, -2226, -2126, 1, false, 0, false);
      cm.npc_ChangeController(1540743, 'oid=40172', -2159, 2817, 89, -2209, -2109, 1, false, 0, false);
      cm.setPartner(1, 1540741, 80001601, 0);
      cm.setPartner(1, 1540736, 80001602, 0);
      cm.setPartner(1, 1540737, 80001635, 0);
      cm.setPartner(1, 1540738, 80001615, 0);
      cm.setPartner(1, 1540739, 80001616, 0);
      cm.updateInfoQuest(33244, 'count=1');
      cm.npc_ChangeController(1540712, "oid=26149623", -2755, 1600, 168, -2805, -2705, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26149623", 'summon', 0, 0);
      cm.updateInfoQuest(33213, "area=D3_Z11;x=4;y=1");
      cm.updateInfoQuest(33213, "area=D3_Z11;x=1;y=1");
      cm.updateInfoQuest(33213, "area=D3_Z11;x=1;y=2");
      cm.updateInfoQuest(33214, "ul=2000");
      cm.openUI(254);
      cm.updateInfoQuest(33244, "count=1;guide=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(10);
    } else {
      var O = -1790;
      var w = cm.getPlayer().getPosition().x;
      var L = cm.getPlayer().getPosition().y;
      if (Math.abs(O - w) <= 250 || Math.abs(1637 - L) <= 250) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
      } else {
        if (cm.haveItem(4009324)) {
          var S = "action1";
          eval(S)(f, E, e, V);
        } else {
          var S = "action0";
          eval(S)(f, E, e, V);
        }
      }
    }
  }
}
function action0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("啊！升降机入口就在那里！", 37, 1540451, false, true);
    cm.curNodeEventEnd(true);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -1930, 1660);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2135);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("为了搭乘升降机，需要用到出入证……\r\n如果确认一下雷达……", 37, 1540451, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -3820, 1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1053);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("看来好像可以通过那东西移动到上面。", 37, 1540451, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -5633, 2761);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1225);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('好了，我们快走吧。', 37, 1540451, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else if (status === V++) {
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
      }
    }
  }
}
function action1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("现在已经获得出入证，我们就没必要再到那上方了。", 37, 1540451, false, true);
    cm.curNodeEventEnd(true);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -1930, 1660);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1166);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我们往右边走，搭乘升降机吧。", 37, 1540451, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -4004, 1360);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1166);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else if (status === V++) {
                cm.onSetBackEffect("bh_541_2", 1, 1, 0, 0);
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