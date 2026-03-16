var status = -1;

function start() {
    action(1, 0, 0)
}

function action(d, b, a) {
    status++;
    var c = cm.getJob();
    if (c == 2005 || c == 2500 || c == 2510 || c == 2511 || c == 2512) {
        action1(d, b, a)
    } else {
        cm.dispose()
    }
}

function action1(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest(38051, "clear");
            cm.sendNormalTalk("看这门锁被破坏了，一定有人进去过。不可能是主人自己破坏的，可又不像被盗的样子，奇怪。也是，自诩为天下第一的盗贼，如果自己的仓库被盗的话，那简直是奇耻大辱。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("看来是不在这儿了，再去别的秘密仓库看看吧。说不定在#r阿里安特附近#k呢。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(38051, "");
                    cm.forceStartQuest(38051, "clear");
                    cm.forceCompleteQuest(38051);
                    cm.updateInfoQuest(38052, "");
                    cm.forceStartQuest(38052, "");
                    cm.gainExp(20000);
                    cm.dispose();
                    cm.warp(260010601, 0, false)
                }
            }
        }
    }
}

function action2(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {}
    }
};