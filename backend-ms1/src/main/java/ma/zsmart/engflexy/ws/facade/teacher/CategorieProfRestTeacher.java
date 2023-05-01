package  ma.zsmart.engflexy.ws.facade.teacher;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.CategorieProf;
import ma.zsmart.engflexy.bean.history.CategorieProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.CategorieProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.CategorieProfHistoryCriteria;
import ma.zsmart.engflexy.service.facade.teacher.CategorieProfTeacherService;
import ma.zsmart.engflexy.ws.converter.CategorieProfConverter;
import ma.zsmart.engflexy.ws.dto.CategorieProfDto;
import ma.zsmart.engflexy.zynerator.controller.AbstractController;
import ma.zsmart.engflexy.zynerator.dto.AuditEntityDto;
import ma.zsmart.engflexy.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zsmart.engflexy.zynerator.process.Result;

import org.springframework.web.multipart.MultipartFile;
import ma.zsmart.engflexy.zynerator.dto.FileTempDto;

@Api("Manages categorieProf services")
@RestController
@RequestMapping("/api/teacher/categorieProf/")
public class CategorieProfRestTeacher  extends AbstractController<CategorieProf, CategorieProfDto, CategorieProfHistory, CategorieProfCriteria, CategorieProfHistoryCriteria, CategorieProfTeacherService, CategorieProfConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all categorieProfs")
    @GetMapping("")
    public ResponseEntity<List<CategorieProfDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all categorieProfs")
    @GetMapping("optimized")
    public ResponseEntity<List<CategorieProfDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a categorieProf by id")
    @GetMapping("id/{id}")
    public ResponseEntity<CategorieProfDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  categorieProf")
    @PostMapping("")
    public ResponseEntity<CategorieProfDto> save(@RequestBody CategorieProfDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  categorieProf")
    @PutMapping("")
    public ResponseEntity<CategorieProfDto> update(@RequestBody CategorieProfDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of categorieProf")
    @PostMapping("multiple")
    public ResponseEntity<List<CategorieProfDto>> delete(@RequestBody List<CategorieProfDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified categorieProf")
    @DeleteMapping("")
    public ResponseEntity<CategorieProfDto> delete(@RequestBody CategorieProfDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified categorieProf")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple categorieProfs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds a categorieProf and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<CategorieProfDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @ApiOperation("Finds categorieProfs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<CategorieProfDto>> findByCriteria(@RequestBody CategorieProfCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated categorieProfs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody CategorieProfCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports categorieProfs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody CategorieProfCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets categorieProf data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody CategorieProfCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets categorieProf history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets categorieProf paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody CategorieProfHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports categorieProf history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody CategorieProfHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets categorieProf history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody CategorieProfHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public CategorieProfRestTeacher (CategorieProfTeacherService service, CategorieProfConverter converter) {
        super(service, converter);
    }


}