package  ma.zsmart.engflexy.ws.dto;

import ma.zsmart.engflexy.zynerator.audit.Log;
import ma.zsmart.engflexy.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;



@JsonInclude(JsonInclude.Include.NON_NULL)
public class GroupeEtudiantDetailDto  extends AuditBaseDto {


    private GroupeEtudiantDto groupeEtudiant ;
    private EtudiantDto etudiant ;



    public GroupeEtudiantDetailDto(){
        super();
    }




    public GroupeEtudiantDto getGroupeEtudiant(){
        return this.groupeEtudiant;
    }

    public void setGroupeEtudiant(GroupeEtudiantDto groupeEtudiant){
        this.groupeEtudiant = groupeEtudiant;
    }
    public EtudiantDto getEtudiant(){
        return this.etudiant;
    }

    public void setEtudiant(EtudiantDto etudiant){
        this.etudiant = etudiant;
    }




}
