package ma.zsmart.engflexy.service.facade.admin;

import java.util.List;
import ma.zsmart.engflexy.bean.core.CalendrierProf;
import ma.zsmart.engflexy.dao.criteria.core.CalendrierProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.CalendrierProfHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface CalendrierProfAdminService extends  IService<CalendrierProf,CalendrierProfCriteria, CalendrierProfHistoryCriteria>  {

    List<CalendrierProf> findByProfId(Long id);
    int deleteByProfId(Long id);
    List<CalendrierProf> findByEtudiantId(Long id);
    int deleteByEtudiantId(Long id);



}
