package net.swordie.ms.client.guild;

public enum GuildPermission {
    Invite(0x1),
    EditGreeting(0x2),
    SetMemberGrade(0x4),
    EditMark(0x8),
    Kick(0x10),
    ManageBBS(0x20),
    Accept(0x40),

    ManageSkills(0x100),
    UseSkills(0x400),
    ManageAdmission(0x4000),
    ;

    private final int val;

    GuildPermission(int val) {
        this.val = val;
    }

    public int getVal() {
        return val;
    }
}
