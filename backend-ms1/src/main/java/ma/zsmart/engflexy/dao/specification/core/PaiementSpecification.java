package  ma.zsmart.engflexy.dao.specification.core;

import ma.zsmart.engflexy.zynerator.specification.AbstractSpecification;
import ma.zsmart.engflexy.dao.criteria.core.PaiementCriteria;
import ma.zsmart.engflexy.bean.core.Paiement;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class PaiementSpecification extends  AbstractSpecification<PaiementCriteria, Paiement>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("datePaiement", criteria.getDatePaiement(), criteria.getDatePaiementFrom(), criteria.getDatePaiementTo());
        addPredicateFk("prof","id", criteria.getProf()==null?null:criteria.getProf().getId());
        addPredicateFk("prof","id", criteria.getProfs());
        addPredicateFk("prof","ref", criteria.getProf()==null?null:criteria.getProf().getRef());
        addPredicateFk("groupeEtudiant","id", criteria.getGroupeEtudiant()==null?null:criteria.getGroupeEtudiant().getId());
        addPredicateFk("groupeEtudiant","id", criteria.getGroupeEtudiants());
    }

    public PaiementSpecification(PaiementCriteria criteria) {
        super(criteria);
    }

    public PaiementSpecification(PaiementCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
