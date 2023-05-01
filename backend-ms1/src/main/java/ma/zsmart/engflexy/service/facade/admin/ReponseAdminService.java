package ma.zsmart.engflexy.service.facade.admin;

import java.util.List;
import ma.zsmart.engflexy.bean.core.Reponse;
import ma.zsmart.engflexy.dao.criteria.core.ReponseCriteria;
import ma.zsmart.engflexy.dao.criteria.history.ReponseHistoryCriteria;
import ma.zsmart.engflexy.zynerator.service.IService;

public interface ReponseAdminService extends  IService<Reponse,ReponseCriteria, ReponseHistoryCriteria>  {

    List<Reponse> findByEtatReponseId(Long id);
    int deleteByEtatReponseId(Long id);
    List<Reponse> findByQuestionId(Long id);
    int deleteByQuestionId(Long id);



}
