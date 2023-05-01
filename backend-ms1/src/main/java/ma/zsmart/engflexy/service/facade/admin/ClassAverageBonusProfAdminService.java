package ma.zsmart.engflexy.service.facade.admin;

import java.util.List;
import ma.zsmart.engflexy.bean.core.ClassAverageBonusProf;
import ma.zsmart.engflexy.dao.criteria.core.ClassAverageBonusProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ClassAverageBonusProfHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface ClassAverageBonusProfAdminService extends  IService<ClassAverageBonusProf,ClassAverageBonusProfCriteria, ClassAverageBonusProfHistoryCriteria>  {

    List<ClassAverageBonusProf> findByProfId(Long id);
    int deleteByProfId(Long id);
    List<ClassAverageBonusProf> findBySalaryId(Long id);
    int deleteBySalaryId(Long id);



}
