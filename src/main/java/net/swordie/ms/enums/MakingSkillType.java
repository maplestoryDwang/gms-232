package net.swordie.ms.enums;

/**
 * Created by MechAviv on 23/11/2018.
 */
public enum MakingSkillType {
    // didn't find the enum in kmst leak...
    MakeRecipe(0),
    Extraction(1),
    Fuse(2), // guess

    Success_SoSo(25),
    Success_Good(26),
    Success_Cool(27),
    Fail_Unknown(28),// shows fail effect with error message
    Fail_Crafting(29),// shows fail effect with fail message
    Fail_ExtractorClosed(30),
    Fail_ExtractorOwnerNoFee(31),
    Fail_ExtractorFeeTooLarge(32),
    Fail_CannotAffordPartyListing(33);
    // 33+ => fail effect + inc skill proficiency effect
    private byte val;

    MakingSkillType(int val) {this.val = (byte) val;}

    public byte getVal() {
        return val;
    }

    public boolean isSuccess() {
        return this == Success_Cool || this == Success_Good || this == Success_SoSo;
    }
}
