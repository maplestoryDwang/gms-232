package net.swordie.ms.world.field.fieldeffect;

import net.swordie.ms.util.Util;

/**
 * Created on 3/26/2018.
 */
public enum FieldEffectType {
    Summon(0),
    Tremble(1),
    Object(2),
    ObjectDisable(3),
    Screen(4),
    PlaySound(5),
    MobHPTag(6),
    ChangeBGM(7),
    BGMVolumeOnly(8),
    BGMVolume(9),
    // 上面都一样

    // 12 - 22 和CMS说明不一样  按照CMS来发
    Unk10(10),
    LimanB(11),
    Unk12(12),
    Unk13(13),
    Unk14(14),
    RewardRoulette(15),
    TopScreen(16),  // cms is SaveEff
    ScreenDelayed(17),
    TopScreenDelayed(18),
    ScreenAutoLetterBox(19),
    FloatingUI(20),
    Blind(21),
    GreyScale(22),   // todo 没修改，cms和gms发包不同




    // 下面一样
    OnOffLayer(23),
    Overlap(24),
    OverlapDetail(25),
    RemoveOverlapDetail(26),
    ColorChange(27),
    StageClear(28), //获得经验特写
    TopScreenWithOrigin(29),
    SpineScreen(30),     // 复合动画
    OffSpineScreen(31),  // 取消复合动画
    // 32 doesn't exist
    Unk33(33),
    Unk34(34),
    半边黑屏(40);

    ;

    private byte val;

    FieldEffectType(int val) {
        this.val = (byte) val;
    }

    public byte getVal() {
        return val;
    }

    public static FieldEffectType getByVal(int val) {
        return Util.findWithPred(values(), v -> v.getVal() == val);
    }
}
