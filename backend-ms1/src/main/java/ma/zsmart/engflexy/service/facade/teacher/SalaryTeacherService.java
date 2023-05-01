package ma.zsmart.engflexy.service.facade.teacher;

import java.util.List;
import ma.zsmart.engflexy.bean.core.Salary;
import ma.zsmart.engflexy.dao.criteria.core.SalaryCriteria;
import ma.zsmart.engflexy.dao.criteria.history.SalaryHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface SalaryTeacherService extends  IService<Salary,SalaryCriteria, SalaryHistoryCriteria>  {

    List<Salary> findByProfId(Long id);
    int deleteByProfId(Long id);



}
