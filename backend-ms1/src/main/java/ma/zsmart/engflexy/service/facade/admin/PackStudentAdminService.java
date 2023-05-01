package ma.zsmart.engflexy.service.facade.admin;

import java.util.List;
import ma.zsmart.engflexy.bean.core.PackStudent;
import ma.zsmart.engflexy.dao.criteria.core.PackStudentCriteria;
import ma.zsmart.engflexy.dao.criteria.history.PackStudentHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface PackStudentAdminService extends  IService<PackStudent,PackStudentCriteria, PackStudentHistoryCriteria>  {

    List<PackStudent> findByParcoursId(Long id);
    int deleteByParcoursId(Long id);
    List<PackStudent> findByPriceId(Long id);
    int deleteByPriceId(Long id);



}
