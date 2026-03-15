var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, W, U) {
  if (cm.getQuestStatus(21002) == 0) {
    if (status == 0 && f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.sendNormalTalk("现在才醒？战神！伤口还好吧？……什么？现在的状况？", 0, 1209000, false, true);
    } else {
      if (status == 1) {
        cm.sendNormalTalk("避难准备都做好了，所有的人都上了方舟。避难船飞行的时候就只有听天由命了，没啥可担心的。准备得差不多就该向金银岛出发了。", 0, 1209000, true, true);
      } else {
        if (status == 2) {
          cm.sendNormalTalk("战神的同伴们？他们……已经去找黑魔法师了。在我们避难的时候，他们打算阻止黑魔法师的进攻……什么？你也要去找黑魔法师？不行！你伤得太重，跟我们一起吧！", 0, 1209000, true, true);
        } else if (status == 3) {
          cm.forceStartQuest(21002, '1');
          cm.effect_Direction("Effect/Direction1.img/aranTutorial/Trio", 0, 0, 0);
          cm.dispose();
        }
      }
    }
  } else {
    if (status == 0 && f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askMenu("情况紧急。你想了解哪些情况？\r\n#b#L0#黑魔法师？#l \r\n#b#L1#避难准备？#l \r\n#b#L2#同伴们？#l", 0, 1209000);
    } else {
      if (status == 1) {
        switch (U) {
          case 0:
            cm.sendNormalTalk("据说黑魔法师已经追到附近哦。因为黑魔法师手下的那些龙，我们无法通过森林。所以才修建了这个方舟，战神。现在只有飞去金银岛避难了……", 0, 1209000, false, true);
            break;
          case 1:
            cm.sendNormalTalk("避难准备已经做得差不多了。该上方舟的人都已经上船了。再等几个人，就能启航去金银岛了。避难船在空中飞行的这段时间，对于来自空中的攻击几乎没有防御能力，所以只能听天由命了……已经没有剩余的人守护圣地了……", 0, 1209000, false, true);
            break;
          case 2:
            cm.sendNormalTalk("你的同伴们……他们已经去找黑魔法师了。在我们避难的时候，他们打算阻止黑魔法师的进攻……你受伤太重，所以没带你去。你还是跟我们一起避难吧，战神！", 0, 1209000, false, false);
            break;
        }
        cm.dispose();
      }
    }
  }
}