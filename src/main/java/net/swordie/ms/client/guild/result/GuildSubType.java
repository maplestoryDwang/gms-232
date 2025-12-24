package net.swordie.ms.client.guild.result;

public enum GuildSubType {
    NotEnoughGGP(3),
    Cooltime(4),

    Skill_Unk1(7),
    Skill_Unk2(8),
    NoGuild(9),
    NotGuildMember(10),
    CantUseInState(11),
    CantFindUser(12),
    IncorrectLocation1(13),
    IncorrectLocation2(14),

    NotGuildmaster(17),

    LimitSummonField(20),
    // 21~100 unk
    Failed_Unknown(100),
    NoGuild2(101),
    NoGuildOrGuildMaster(102),
    CharAlreadyInAlliance(103),
    AllyInDifferentChannel(110),
    ;

    private final int val;

    GuildSubType(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}
