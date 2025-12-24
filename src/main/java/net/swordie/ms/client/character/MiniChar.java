package net.swordie.ms.client.character;

public class MiniChar {
    private int id;
    private String name;
    private int job;
    private int subJob;

    public MiniChar() {}

    public MiniChar(Char chr) {
        var cs = chr.getAvatarData().getCharacterStat();
        var al = chr.getAvatarData().getAvatarLook();

        id = chr.getId();
        name = cs.getName();
        job = cs.getJob();
        subJob = cs.getSubJob();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getJob() {
        return job;
    }

    public void setJob(int job) {
        this.job = job;
    }

    public int getSubJob() {
        return subJob;
    }

    public void setSubJob(int subJob) {
        this.subJob = subJob;
    }
}
