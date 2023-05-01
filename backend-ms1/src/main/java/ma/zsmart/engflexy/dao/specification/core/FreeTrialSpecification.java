package  ma.zsmart.engflexy.dao.specification.core;

import ma.zsmart.engflexy.zynerator.specification.AbstractSpecification;
import ma.zsmart.engflexy.dao.criteria.core.FreeTrialCriteria;
import ma.zsmart.engflexy.bean.core.FreeTrial;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class FreeTrialSpecification extends  AbstractSpecification<FreeTrialCriteria, FreeTrial>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("reference", criteria.getReference(),criteria.getReferenceLike());
        addPredicate("dateFreeTrial", criteria.getDateFreeTrial(), criteria.getDateFreeTrialFrom(), criteria.getDateFreeTrialTo());
        addPredicate("link", criteria.getLink(),criteria.getLinkLike());
        addPredicateBool("emailTeacherSent", criteria.getEmailTeacherSent());
        addPredicate("emailTeacherSendingDate", criteria.getEmailTeacherSendingDate(), criteria.getEmailTeacherSendingDateFrom(), criteria.getEmailTeacherSendingDateTo());
        addPredicateBool("whatsTeacherSent", criteria.getWhatsTeacherSent());
        addPredicate("whatsTeacherSendingDate", criteria.getWhatsTeacherSendingDate(), criteria.getWhatsTeacherSendingDateFrom(), criteria.getWhatsTeacherSendingDateTo());
        addPredicate("dateFreeTrialPremierRappel", criteria.getDateFreeTrialPremierRappel(), criteria.getDateFreeTrialPremierRappelFrom(), criteria.getDateFreeTrialPremierRappelTo());
        addPredicate("dateFreeTrialPremierDeuxiemeRappel", criteria.getDateFreeTrialPremierDeuxiemeRappel(), criteria.getDateFreeTrialPremierDeuxiemeRappelFrom(), criteria.getDateFreeTrialPremierDeuxiemeRappelTo());
        addPredicateInt("nombreStudentTotal", criteria.getNombreStudentTotal(), criteria.getNombreStudentTotalMin(), criteria.getNombreStudentTotalMax());
        addPredicateInt("nombreStudentAbonne", criteria.getNombreStudentAbonne(), criteria.getNombreStudentAbonneMin(), criteria.getNombreStudentAbonneMax());
        addPredicateInt("nombreStudentPresent", criteria.getNombreStudentPresent(), criteria.getNombreStudentPresentMin(), criteria.getNombreStudentPresentMax());
        addPredicateFk("prof","id", criteria.getProf()==null?null:criteria.getProf().getId());
        addPredicateFk("prof","id", criteria.getProfs());
        addPredicateFk("prof","ref", criteria.getProf()==null?null:criteria.getProf().getRef());
        addPredicateFk("niveauEtude","id", criteria.getNiveauEtude()==null?null:criteria.getNiveauEtude().getId());
        addPredicateFk("niveauEtude","id", criteria.getNiveauEtudes());
        addPredicateFk("niveauEtude","code", criteria.getNiveauEtude()==null?null:criteria.getNiveauEtude().getCode());
        addPredicateFk("freeTrialStudentWhatsTemplate","id", criteria.getFreeTrialStudentWhatsTemplate()==null?null:criteria.getFreeTrialStudentWhatsTemplate().getId());
        addPredicateFk("freeTrialStudentWhatsTemplate","id", criteria.getFreeTrialStudentWhatsTemplates());
        addPredicateFk("freeTrialStudentEmailTemplate","id", criteria.getFreeTrialStudentEmailTemplate()==null?null:criteria.getFreeTrialStudentEmailTemplate().getId());
        addPredicateFk("freeTrialStudentEmailTemplate","id", criteria.getFreeTrialStudentEmailTemplates());
        addPredicateFk("freeTrialTeacherEmailTemplate","id", criteria.getFreeTrialTeacherEmailTemplate()==null?null:criteria.getFreeTrialTeacherEmailTemplate().getId());
        addPredicateFk("freeTrialTeacherEmailTemplate","id", criteria.getFreeTrialTeacherEmailTemplates());
        addPredicateFk("freeTrialTeacherWhatsTemplate","id", criteria.getFreeTrialTeacherWhatsTemplate()==null?null:criteria.getFreeTrialTeacherWhatsTemplate().getId());
        addPredicateFk("freeTrialTeacherWhatsTemplate","id", criteria.getFreeTrialTeacherWhatsTemplates());
        addPredicateFk("freeTrialConfiguration","id", criteria.getFreeTrialConfiguration()==null?null:criteria.getFreeTrialConfiguration().getId());
        addPredicateFk("freeTrialConfiguration","id", criteria.getFreeTrialConfigurations());
        addPredicateFk("statutFreeTrial","id", criteria.getStatutFreeTrial()==null?null:criteria.getStatutFreeTrial().getId());
        addPredicateFk("statutFreeTrial","id", criteria.getStatutFreeTrials());
        addPredicateFk("statutFreeTrial","code", criteria.getStatutFreeTrial()==null?null:criteria.getStatutFreeTrial().getCode());
    }

    public FreeTrialSpecification(FreeTrialCriteria criteria) {
        super(criteria);
    }

    public FreeTrialSpecification(FreeTrialCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
