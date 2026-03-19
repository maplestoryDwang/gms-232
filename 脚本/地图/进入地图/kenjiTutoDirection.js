var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getMapId() == 807100010) action1(f, E, e);
  else if (cm.getMapId() == 807100000) action2(f, E, e);
  else if (cm.getMapId() == 807100011) action3(f, E, e);
  else if (cm.getMapId() == 807100001) action4(f, E, e);
  else if (cm.getMapId() == 807100002) action5(f, E, e);
  else if (cm.getMapId() == 807100012) action6(f, E, e);
  else if (cm.getMapId() == 807100003) action7(f, E, e);
  else if (cm.getMapId() == 807100004) action8(f, E, e);
  else if (cm.getMapId() == 807100005) {
    action9(f, E, e);
    // if (cm.getPlayer().getLevel() == 1) {
    //   cm.getPlayer().getBaseStats().setHp(1);
    //   cm.getPlayer().getBaseStats().setMp(1);
    //   cm.getPlayer().getBaseStats().setMaxHp(60);
    //   cm.getPlayer().getBaseStats().setMaxMp(6);
    // }
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.updateInfoQuest(26902, '');
    cm.updateInfoQuest(26903, '');
    cm.updateInfoQuest(26904, '');
    cm.updateInfoQuest(26905, '');
    cm.updateInfoQuest(26900, 'sf=0;mt=0;id=0;al=1');
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.setStandAloneMode(true);
    cm.fieldEffect_ScreenMsg('JPKenji/text0');
    cm.inGameDirectionEvent_AskAnswerTime(7000);
  } else if (status === V++) {
    cm.dispose();
    cm.warp(807100000, 1);
    cm.setInGameDirectionMode(false, true, false);
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_MoveAction(1);
    cm.inGameDirectionEvent_AskAnswerTime(4300);
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.inGameDirectionEvent_MoveAction(0);
    cm.sendNormalTalk_Bottom('#face0#这一时刻终于来到了。第六天魔王的化身——织田信长的传奇到今天终于要结束了。', 37, 9130000, false, true);
  } else if (status === V++) cm.sendNormalTalk_Bottom('之前的我没能护住自己侍奉的主公，没能保住自己的家门，就连姬儿都没能守护住……一想到今日终于能一雪前耻，我就激动得浑身发抖。', 57, 0, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#能够一雪前耻当然是好事，但是切记，不要被复仇蒙蔽了你的双眼。我承认你确实很有本事，但是激动过头只会影响你的判断，并让你的动作出现破绽。', 37, 9130000, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('是，这一点我一定会铭记于心。不过，我可不确定能否控制住自己沾满鲜血的刀剑。', 57, 0, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face1#哈哈哈，还有心情说这种玩笑话，应该就没什么问题了。我很相信你的本事，率先冲入本能寺的任务可不可以就交给你来办了？', 37, 9130000, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('是要我负责打开东门对吧？', 57, 0, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#没错。只要你越过本能寺的外墙并打开东门，武田骑马队就可以大举进攻，并将魔王的手下彻底打飞。', 37, 9130000, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('只要能得到敌人的鲜血，我的斩霞之刀是不会拒绝任何任务的。就请放心交给我吧。', 57, 0, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face1#哈哈哈，我就欣赏你的这种过人胆识！真希望你能加入我的门下啊。好了，祝你好运吧。武田骑马队也会立刻随你而去的！', 37, 9130000, true, true);
  else if (status === V++) {
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
    cm.OnStartNavigation(807100000, 0, 'out00', 0);
    cm.dispose();
  }
}
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, false);
    cm.fieldEffect_ScreenMsg('JPKenji/text1');
    cm.inGameDirectionEvent_AskAnswerTime(7000);
    cm.curNodeEventEnd(true);
  } else if (status === V++) {
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.dispose();
    cm.warp(807100001, 1, true);
  }
}
function action4(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.npc_ChangeController(9131009, 'oid=104977', 514, 32, 14, 464, 564, 1, false, false);
    cm.updateInfoQuest(57100, '');
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.spawnMobLimit(9421505, 1, -630, -18, 4);
    cm.spawnMobLimit(9421507, 1, -450, -18, 4);
    cm.spawnMobLimit(9421505, 1, -270, -18, 4);
    cm.spawnMobLimit(9421507, 1, -90, -18, 4);
    cm.spawnMobLimit(9421505, 1, 90, -18, 4);
    cm.spawnMobLimit(9421507, 1, 270, -18, 4);
    cm.spawnMobLimit(9421505, 1, 450, -18, 4);
    cm.spawnMobLimit(9421507, 1, 630, -18, 4);
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0'], [0, 0, -120, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
    cm.curNodeEventEnd(true);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/1'], [0, 0, -120, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/2'], [0, 0, -120, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.playerMessage(-1, '打倒所有敌兵，将东门开启吧！');
    cm.teachSkill(40011183, 1, -1);
    cm.teachSkill(40011184, 1, -1);
    cm.teachSkill(40011185, 1, -1);
    cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.fieldEffect_ScreenMsg('aran/tutorialGuide2');
    cm.inGameDirectionEvent_AskAnswerTime(200);
  } else if (status === V++) {
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
    cm.updateInfoQuest(57100, 'npc9131009=8');
    cm.dispose();
  }
}
function action5(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.forceStartQuest(57101, '');
    cm.sendNormalTalk_Bottom('#face0#你果然出色地完成了任务。我越来越想将你收入麾下了啊。', 37, 9130000, false, true);
  } else if (status === V++) cm.sendNormalTalk_Bottom('这事并不困难。而且在战斗已经打响的时候，就更加轻而易举了……不过，这到底是怎么了？难道负责北方的上杉或者南方的士兵先闯进去了吗？', 57, 0, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#这一次的突入作战，必须是位于各个方向的士兵同一时间冲进去才行。除非是有人想要恶意破坏作战，否则应该不会有人先一步进去的。不过我倒是已经心里有数了，就是还不能确定是否真是这么回事。总之，现在说什么也是白搭。', 37, 9130000, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#趁着境内局势混乱之际，我们顺利闯入了其中，眼下情况对我们十分有利。等拦下信长之后，再来查明真相也不迟。先一鼓作气攻入大殿吧。', 37, 9130000, true, true);
  else if (status === V++) cm.sendNormalTalk_Bottom('好。那我先告辞了！！', 57, 0, true, true);
  else if (status === V++) {
    cm.OnStartNavigation(807100012, 0, 'in00', 0);
    cm.dispose();
  }
}
function action6(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true, true);
    cm.fieldEffect_ScreenMsg('JPKenji/text2');
    cm.inGameDirectionEvent_AskAnswerTime(7000);
    cm.curNodeEventEnd(true);
  } else if (status === V++) {
    cm.dispose();
    cm.warp(807100003, 1);
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
  }
}
function action7(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, false);
    cm.inGameDirectionEvent_同时移动镜头和人(1, 280);
    cm.inGameDirectionEvent_AskAnswerTime(2200);
    cm.curNodeEventEnd(true);
  } else if (status === V++) cm.sendNormalTalk_Bottom('#face0#哎呀……我本想去猎虎，没想到会在途中碰到一头小鹿。看你这身打扮，应该并不是信长大人手下的武将吧……不知你特意跑来这已经闹成一团的本能寺，究竟所为何事呢？', 37, 9131000, false, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('（哼，这人的表情和口气虽然都十分平和，但却一直在散发着惊人的杀气……他是信长手下的武将吗？）', 57, 0, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('我乃松山家元老姐崎朝信的次子——姐崎剑斗！ 为了报主公及家门之仇，也为了夺回姬儿，特此前来！', 57, 0, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#松山，松山啊……似乎没听说过这个名字呢。就算记住这种已经不复存在的家名，也没有任何意义了吧。', 37, 9131000, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('即使你不自报家门，只要看到你这副旁若无人的傲慢态度，应该可以确定你就是魔王的手下了。那么，我和斩霞之刀就没有丝毫犹豫的理由了。', 57, 0, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('你要想自报家门，那就尽管说吧。因为这会成为你在这个世界上说出的最后一句话。', 57, 0, true, true, 1);
  else if (status === V++) {
    cm.npc_ChangeController(9131007, 'oid=37007080', 135, 30, 6, 85, 185, 1, false, 0, false);
    cm.npc_SetSpecialAction('oid=37007080', 'summon', 0, 0);
    cm.sendNormalTalk_Bottom('#face0#看来是没有必要询问你的名字了。', 37, 9130000, true, true, 1);
  } else if (status === V++) cm.sendNormalTalk_Bottom('信玄大人！', 57, 0, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#一看到你，我就能够猜到这场乱战究竟是因何而起的了。没错吧？织田四天王——明智光秀！', 37, 9130000, true, true, 1);
  else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0'], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/3'], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/4'], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) cm.sendNormalTalk_Bottom('#face0#哎呀呀，呵呵……真不愧是稀世的谋臣——武田信玄大人啊。不仅一眼看穿了我的真实身份，还猜到了是我起兵谋反……', 37, 9131000, false, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#虽然我们是第一次见面，但是依据至今为止你的各种风评，我就猜到你绝不会长时间屈居人下……不过呢，既然你要起兵谋反自己的旧主，不妨在此和我们一起联手吧？', 37, 9130000, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('信玄大人，就是这个男人烧毁了松山家！我是绝对不会跟这种不共戴天的仇敌联手的！', 57, 0, true, true, 1);
  else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/5'], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/6'], [0, -100, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/7'], [0, -100, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/8'], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/9'], [0, -100, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/10'], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_MoveAction(1);
    cm.inGameDirectionEvent_AskAnswerTime(1300);
  } else if (status === V++) {
    cm.inGameDirectionEvent_MoveAction(0);
    cm.inGameDirectionEvent_OneTimeAction('剑豪_普通攻击', 0);
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/11'], [0, -100, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
    cm.updateInfoQuest(65890, 'count=313;todayCount=278;lastDate=20210502');
    cm.updateInfoQuest(65890, 'count=313;todayCount=313;lastDate=20210502');
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/12'], [0, -100, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/13'], [0, 150, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(1400);
  } else if (status === V++) {
    cm.npc_SetSpecialAction('oid=37007080', 'attack', 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(300);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/shingenAttack/0'], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(400);
  } else if (status === V++) {
    cm.npc_LeaveField('oid=37007080');
    cm.dispose();
    cm.warp(807100004, 1, true);
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
  }
}
function action8(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.hideNpc(9131005);
    cm.npc_ChangeController(9131005, 'oid=107480', 187, 51, 9, 187, 237, 0, false, 0, true);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, false);
    cm.inGameDirectionEvent_同时移动镜头和人(1, 550);
    cm.inGameDirectionEvent_AskAnswerTime(4200);
    cm.curNodeEventEnd(true);
  } else if (status === V++) cm.sendNormalTalk_Bottom('我无意对女性兵戎相向。速速退开吧。', 57, 0, false, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#哼，真是个没有礼貌的毛头小子。你知不知道我是什么人？我可是斋藤道三的女儿，第六天魔王织田信长的正室妻子——浓姬。', 37, 9131005, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('不要让我再次重复这句话。我无意对女性兵戎相向。快点给我退开。', 57, 0, true, true, 1);
  else if (status === V++) cm.sendNormalTalk_Bottom('#face0#你还挺狂妄的嘛。那就让我来试试看，你的本事是不是和你的态度一样拽上天！', 37, 9131005, true, true, 1);
  else if (status === V++) {
    cm.npc_SetSpecialAction('oid=107480', 'step', 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(1080);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/14'], [0, -250, -100, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/15'], [0, 0, -150, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/16'], [0, -260, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_头顶图片(['Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/17'], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_MoveAction(1);
    cm.inGameDirectionEvent_AskAnswerTime(1800);
  } else if (status === V++) {
    cm.inGameDirectionEvent_MoveAction(5);
    cm.inGameDirectionEvent_AskAnswerTime(1000);
  } else if (status === V++) {
    cm.inGameDirectionEvent_MoveAction(0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++) {
    cm.dispose();
    cm.warp(807100005, 0, false);
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
  }
}
function action9(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true, false);
    cm.playVideoByScript('JPHayato.avi');
    cm.curNodeEventEnd(true);
  } else if (status === V++) {
    cm.setStandAloneMode(false);
    cm.dispose();
    cm.gainItem(1003567, 1);
    cm.gainItem(1003626, 1);
    cm.gainItem(1082442, 1);
    cm.gainItem(1052473, 1);
    cm.gainItem(1052531, 1);
    cm.gainItem(1072678, 1);
    cm.gainItem(1072750, 1);
    cm.gainItem(1542044, 1);
    cm.warp(807040000, 0, false);
    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
    cm.setInGameDirectionMode(false, true, false);
  }
}
function action10(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
  }
}
function action11(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
  }
}
function action12(f, E, e) {
  var V = -1;
  if (status <= V++) cm.dispose();
  else if (status === V++) {
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}
