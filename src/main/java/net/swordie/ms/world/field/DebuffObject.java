package net.swordie.ms.world.field;

import net.swordie.ms.enums.DebuffObjectType;

//Magnus poison emitter & PNO charms
public class DebuffObject {
    private boolean enabled;
    private int id;
    private DebuffObjectType debuffObjectType;
    private String name;
    private String effectPath;

    public DebuffObject(boolean enabled, int id, DebuffObjectType debuffObjectType, String name, String effectPath){
        this.enabled = enabled;
        this.id = id;
        this.debuffObjectType = debuffObjectType;
        this.name = name;
        this.effectPath = effectPath;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEffectPath() {
        return effectPath;
    }

    public void setEffectPath(String effectPath) {
        this.effectPath = effectPath;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public DebuffObjectType getDebuffObjectType() {
        return debuffObjectType;
    }

    public void setDebuffObjectType(DebuffObjectType debuffObjectType) {
        this.debuffObjectType = debuffObjectType;
    }
}
