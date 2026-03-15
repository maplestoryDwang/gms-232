var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.forceStartQuest();
        cm.sendNextNoESC_Bottom("#face9#好的，测量毫无异常，那就正式开始吧。\r\n把左边的5个训练机器人B全都打倒。", 1531001)
    } else {
        if (status == 1) {
            cm.mob_EnterField(2700300, 703, -150);
            cm.mob_EnterField(2700300, 703, -150);
            cm.mob_EnterField(2700300, 85, -179);
            cm.mob_EnterField(2700300, 85, -179);
            cm.mob_EnterField(2700300, 85, -179);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/metaldrop");
            cm.cameraSwitch_PushSwitchMoveInfo("pt_VP", 1000);
            cm.sendNextNoESC_Bottom("#face9#打倒后拾取剩下的材料时，按下Z键就可以了。\r\n结束之后利用左侧的传送口来我这里。", 1531001)
        } else {
            if (status == 2) {
                cm.topMsg("按下Z键可以拾取道具。");
                cm.effect_Voice("Voice3.img/Kinesis/guide_12");
                cm.effect_OnUserEff("UI/tutorial.img/kinesis/1");
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};