package  ma.zsmart.engflexy.ws.facade.teacher;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.zsmart.engflexy.bean.core.FaqProf;
import ma.zsmart.engflexy.bean.history.FaqProfHistory;
import ma.zsmart.engflexy.dao.criteria.core.FaqProfCriteria;
import ma.zsmart.engflexy.dao.criteria.history.FaqProfHistoryCriteria;
import ma.zsmart.engflexy.service.facade.teacher.FaqProfTeacherService;
import ma.zsmart.engflexy.ws.converter.FaqProfConverter;
import ma.zsmart.engflexy.ws.dto.FaqProfDto;
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

@Api("Manages faqProf services")
@RestController
@RequestMapping("/api/teacher/faqProf/")
public class FaqProfRestTeacher  extends AbstractController<FaqProf, FaqProfDto, FaqProfHistory, FaqProfCriteria, FaqProfHistoryCriteria, FaqProfTeacherService, FaqProfConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all faqProfs")
    @GetMapping("")
    public ResponseEntity<List<FaqProfDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds an optimized list of all faqProfs")
    @GetMapping("optimized")
    public ResponseEntity<List<FaqProfDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @ApiOperation("Finds a faqProf by id")
    @GetMapping("id/{id}")
    public ResponseEntity<FaqProfDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  faqProf")
    @PostMapping("")
    public ResponseEntity<FaqProfDto> save(@RequestBody FaqProfDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  faqProf")
    @PutMapping("")
    public ResponseEntity<FaqProfDto> update(@RequestBody FaqProfDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of faqProf")
    @PostMapping("multiple")
    public ResponseEntity<List<FaqProfDto>> delete(@RequestBody List<FaqProfDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified faqProf")
    @DeleteMapping("")
    public ResponseEntity<FaqProfDto> delete(@RequestBody FaqProfDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified faqProf")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple faqProfs by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by prof id")
    @GetMapping("prof/id/{id}")
    public List<FaqProf> findByProfId(@PathVariable Long id){
        return service.findByProfId(id);
    }
    @ApiOperation("delete by prof id")
    @DeleteMapping("prof/id/{id}")
    public int deleteByProfId(@PathVariable Long id){
        return service.deleteByProfId(id);
    }
    @ApiOperation("find by admin id")
    @GetMapping("admin/id/{id}")
    public List<FaqProf> findByAdminId(@PathVariable Long id){
        return service.findByAdminId(id);
    }
    @ApiOperation("delete by admin id")
    @DeleteMapping("admin/id/{id}")
    public int deleteByAdminId(@PathVariable Long id){
        return service.deleteByAdminId(id);
    }
    @ApiOperation("find by faqType id")
    @GetMapping("faqType/id/{id}")
    public List<FaqProf> findByFaqTypeId(@PathVariable Long id){
        return service.findByFaqTypeId(id);
    }
    @ApiOperation("delete by faqType id")
    @DeleteMapping("faqType/id/{id}")
    public int deleteByFaqTypeId(@PathVariable Long id){
        return service.deleteByFaqTypeId(id);
    }
    @ApiOperation("Finds faqProfs by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<FaqProfDto>> findByCriteria(@RequestBody FaqProfCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated faqProfs by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody FaqProfCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports faqProfs by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody FaqProfCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets faqProf data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody FaqProfCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets faqProf history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets faqProf paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody FaqProfHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports faqProf history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody FaqProfHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets faqProf history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody FaqProfHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public FaqProfRestTeacher (FaqProfTeacherService service, FaqProfConverter converter) {
        super(service, converter);
    }


}