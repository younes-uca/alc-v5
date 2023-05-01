package ma.zsmart.engflexy.service.facade.teacher;

import java.util.List;
import ma.zsmart.engflexy.bean.core.Parcours;
import ma.zsmart.engflexy.dao.criteria.core.ParcoursCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ParcoursHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface ParcoursTeacherService extends  IService<Parcours,ParcoursCriteria, ParcoursHistoryCriteria>  {

    List<Parcours> findByCentreId(Long id);
    int deleteByCentreId(Long id);



}
