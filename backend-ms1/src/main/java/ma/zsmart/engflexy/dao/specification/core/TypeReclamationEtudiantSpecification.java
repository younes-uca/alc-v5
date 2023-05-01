package  ma.zsmart.engflexy.dao.specification.core;

import ma.zsmart.engflexy.zynerator.specification.AbstractSpecification;
import ma.zsmart.engflexy.dao.criteria.core.TypeReclamationEtudiantCriteria;
import ma.zsmart.engflexy.bean.core.TypeReclamationEtudiant;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class TypeReclamationEtudiantSpecification extends  AbstractSpecification<TypeReclamationEtudiantCriteria, TypeReclamationEtudiant>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
        addPredicate("libelle", criteria.getLibelle(),criteria.getLibelleLike());
    }

    public TypeReclamationEtudiantSpecification(TypeReclamationEtudiantCriteria criteria) {
        super(criteria);
    }

    public TypeReclamationEtudiantSpecification(TypeReclamationEtudiantCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
