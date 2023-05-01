package ma.zsmart.engflexy.service.facade.teacher;

import java.util.List;
import ma.zsmart.engflexy.bean.core.GroupeEtudiant;
import ma.zsmart.engflexy.dao.criteria.core.GroupeEtudiantCriteria;
import ma.zsmart.engflexy.dao.criteria.history.GroupeEtudiantHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface GroupeEtudiantTeacherService extends  IService<GroupeEtudiant,GroupeEtudiantCriteria, GroupeEtudiantHistoryCriteria>  {

    List<GroupeEtudiant> findByGroupeEtudeId(Long id);
    int deleteByGroupeEtudeId(Long id);
    List<GroupeEtudiant> findByParcoursId(Long id);
    int deleteByParcoursId(Long id);
    List<GroupeEtudiant> findByProfId(Long id);
    int deleteByProfId(Long id);



}
