package ma.zsmart.engflexy.service.facade.admin;

import java.util.List;
import ma.zsmart.engflexy.bean.core.FreeTrialformule;
import ma.zsmart.engflexy.dao.criteria.core.FreeTrialformuleCriteria;
import ma.zsmart.engflexy.dao.criteria.history.FreeTrialformuleHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface FreeTrialformuleAdminService extends  IService<FreeTrialformule,FreeTrialformuleCriteria, FreeTrialformuleHistoryCriteria>  {

    List<FreeTrialformule> findByInscriptionId(Long id);
    int deleteByInscriptionId(Long id);



}
