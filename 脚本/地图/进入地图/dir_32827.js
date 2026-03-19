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
      cm.npc_ChangeController(1530502, "oid=29934", 1027, 62, 3, 977, 1077, 1, false, false);
      cm.npc_ChangeController(1530140, "oid=37352709", 261, 19, 1, 211, 311, 0, true, false);
      cm.npc_SetSpecialAction("oid=37352709", "summon", 0, 0);
      cm.npc_ChangeController(1530080, "oid=37352710", 127, 19, 1, 77, 177, 0, true, false);
      cm.npc_SetSpecialAction("oid=37352710", 'summon', 0, 0);
      cm.npc_ChangeController(1530070, "oid=37352711", 12, 19, 1, -38, 62, 0, true, false);
      cm.npc_SetSpecialAction("oid=37352711", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=37352712", 350, 19, 1, 300, 400, 0, true, false);
      cm.npc_SetSpecialAction("oid=37352712", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#h0#这个队员，在这儿做什么呢？！胡克队长，#h0#这队员他违背军令，从战场上逃离了。最好是罚他请大家吃冰淇淋！我要草莓味的。", 37, 1530140, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我要香草味的。不过，这不是体育老师和校医的照片吗？嗬，这两个人居然会出现在同一张照片中，可真让人吃惊啊？而且看上去还挺亲密呢？", 37, 1530080, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这是抓住他们二人看似比较亲密的时机，故意拍下来的照片。为的就是在校园里制造出有关两个人的传闻。好像有人说过，就算心里没想法，如果周围的人不断地煽风点火的话，也一定会慢慢开始关注的。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这话说得还真有道理。\r\n不过在校园里未经允许随便贴这种宣传物，可是违反校规……", 37, 1530070, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("真了不起，#h0#队员！你是我们部队名副其实的优秀队员啊！那么开始进入下一计划吧！", 37, 1530100, true, true);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(330000500, 0);
                cm.setInGameDirectionMode(false, true, false);
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