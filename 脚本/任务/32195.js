var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.askYesNo("我听说了你的出色表现，便来见见你。你在这地方立了大功呢？", 0, 1510009)
    } else {
        if (status == 1) {
            cm.sendNormalTalk("你对这地方有什么感想？\r\n\r\n企鹅族、阿拉斯加犬族、海象族它们曾经彼此憎恨。尽管现在它们已经一笑泯恩仇，可要是它们从一开始就没有互相争斗，维持着合作关系，也许就可以阻止今天这样的事情发生。", 0, 1510009, false, true)
        } else {
            if (status == 2) {
                cm.sendNormalTalk_Illus("大家没必要非得思想一致，可如果在共同的敌人面前，有想要守护的东西的话，至少就应该齐心协力来和敌人对抗。作为冒险岛世界的一员，希望你要牢牢记住这句话。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n #i1142629# #b#t1142629##k\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 38805 exp", 1510009, 4, true, true, 2)
            } else {
                if (status == 3) {
                    cm.forceStartQuest(32195, "");
                    cm.forceCompleteQuest(32195);
                    cm.finishAchievement(1156);
                    cm.gainExp(38805);
                    cm.gainItem(1142629, 1);
                    cm.dispose()
                }
            }
        }
    }
}

function end(c, b, a) {
    status++;
    cm.dispose()
};