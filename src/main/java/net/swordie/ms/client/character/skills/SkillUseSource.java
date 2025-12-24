package net.swordie.ms.client.character.skills;

/**
 * Created on 27/01/2021.
 *
 * @author Asura
 */
public enum SkillUseSource {
    AttackUseRequest,
    SkillUseRequest,
    ThrowGrenadeRequest,
    ShootObjCreateRequest,
    ;

    public boolean isAttackRequest() {
        return
                this.equals(AttackUseRequest)
                ;
    }

    public boolean isSkillRequest() {
        return
                this.equals(SkillUseRequest) ||
                this.equals(ThrowGrenadeRequest) ||
                this.equals(ShootObjCreateRequest)
                ;
    }
}
